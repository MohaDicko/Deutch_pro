import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/admin/:path*'],
};

export function proxy(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    const validUser = process.env.ADMIN_USERNAME;
    const validPass = process.env.ADMIN_PASSWORD;

    if (user === validUser && pwd === validPass) {
      return NextResponse.next();
    }
  }
  url.pathname = '/api/auth';

  return new NextResponse('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}
