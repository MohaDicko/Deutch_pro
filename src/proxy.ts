import { NextRequest, NextResponse } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { i18n } from './i18n-config';

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, and image files
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};

function getLocale(request: NextRequest): string {
  return i18n.defaultLocale;
}

export function proxy(req: NextRequest) {
  const url = req.nextUrl;
  
  // Basic Auth for Admin routes
  if (url.pathname.startsWith('/admin')) {
    const basicAuth = req.headers.get('authorization');
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');

      const validUser = process.env.ADMIN_USERNAME;
      const validPass = process.env.ADMIN_PASSWORD;

      if (user === validUser && pwd === validPass) {
        return NextResponse.next();
      }
    }
    
    return new NextResponse('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  // Check if there is any supported locale in the pathname
  const pathname = req.nextUrl.pathname;
  
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(req);

    // e.g. incoming request is /services
    // The new URL is now /de/services
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        req.url
      )
    );
  }
}
