const fs = require('fs');

const en = {
  "header": {
    "nav": { "accueil": "Home", "services": "Services", "niveaux": "Levels", "temoignages": "Testimonials", "b2b": "B2B" },
    "contactBtn": "Contact Us",
    "portalBtn": "Student Portal"
  },
  "hero": {
    "badge": "German Excellence in Bamako",
    "title1": "Open the doors to ",
    "title2": "Germany",
    "subtitle": "Learn German with certified teachers. Prepare for your Goethe exams and build your academic or professional future.",
    "ctaStart": "Start Now",
    "ctaB2B": "💼 For Businesses",
    "stats": { "students": "Students trained", "levels": "Levels covered", "success": "Success rate" },
    "certBadge": { "title": "Certifications", "subtitle": "Goethe-Zertifikat" }
  },
  "services": {
    "badge": "Our Offer",
    "title": "Pedagogy of Excellence",
    "subtitle": "Programs designed for your success, whether you are a student or professional.",
    "cards": {
      "coursIntensifs": { "title": "Intensive Courses", "desc": "Fast progress with total immersion. Ideal for studies." },
      "preparation": { "title": "Goethe Preparation", "desc": "Specific training for official certifications." },
      "pro": { "title": "Pro German", "desc": "Technical and professional vocabulary (Doctors, Engineers...)" },
      "integration": { "title": "Integration", "desc": "Intercultural preparation and support during your first months in Germany for successful integration." }
    }
  },
  "niveaux": {
    "badge": "Your Progress",
    "title": "From beginner to expert",
    "subtitle": "A structured path according to the Common European Framework of Reference (CEFR).",
    "A1": { "title": "A1 - Beginner", "desc": "Understand and use familiar everyday expressions." },
    "A2": { "title": "A2 - Elementary", "desc": "Understand isolated and frequent phrases (personal info, shopping, immediate environment)." },
    "B1": { "title": "B1 - Intermediate", "desc": "Understand the essential points of a discussion on familiar topics (work, school, leisure)." },
    "B2": { "title": "B2 - Advanced", "desc": "Understand the main contents of concrete or abstract topics in a complex text." }
  },
  "b2b": {
    "badge": "Businesses",
    "title": "Train your teams",
    "subtitle": "Tailor-made solutions for companies wishing to collaborate with Germany.",
    "features": {
      "surMesure": "Tailored programs adapted to your sector",
      "horaires": "Flexible hours (in-company or online)",
      "culture": "Intercultural training for business"
    },
    "form": {
      "company": "Company Name *", "contact": "Contact Person *", "email": "Professional Email *", "phone": "Phone *",
      "sector": "Sector / Industry *", "candidates": "Number of candidates *", "message": "Message or required profiles",
      "submit": "Send Partnership Request", "loading": "Sending...", "success": "Your request has been sent. Our German office will contact you within 24h.",
      "error": "An error occurred while sending.", "privacy": "Your data will be treated with 100% confidentiality."
    },
    "sectors": {
      "health": "🩺 Health & Care", "craft": "🛠️ Craft & Technical", "it": "💻 IT", "gastro": "🏨 Hospitality & Catering", "other": "🏢 Other Sector"
    },
    "counts": {
      "1-2": "1 to 2 candidates", "3-5": "3 to 5 candidates", "6-10": "6 to 10 candidates", "10+": "More than 10 candidates"
    },
    "cta": "Request a Quote"
  },
  "contact": {
    "badge": "Contact",
    "title": "Ready to start?",
    "subtitle": "Contact us to assess your level or register for our next session.",
    "form": {
      "name": "Full Name *", "email": "Email *", "phone": "Phone", "level": "Desired Level",
      "message": "Your Message *", "submit": "Send Message", "loading": "Sending...",
      "success": "Your message has been sent successfully. We will contact you soon!", "error": "An error occurred. Please try again."
    },
    "levels": { "A1": "Level A1 (Beginner)", "A2": "Level A2 (Elementary)", "B1": "Level B1 (Intermediate)", "B2": "Level B2 (Advanced)" },
    "info": { "address": "ACI 2000, Bamako, Mali", "email": "deutschprobamako@outlook.com", "phone": "+223 70 00 00 00", "opening": "Mon-Sat: 8am-6pm" }
  },
  "testimonials": {
    "title": "What Our Students Say",
    "quote": "\"Thanks to Deutsch Pro Bamako, I was able to validate my B1 level in record time. The teachers are excellent and very pedagogical.\"",
    "author": "- Amadou T."
  },
  "footer": {
    "rights": "All rights reserved.", "legal": "Legal Notice", "privacy": "Privacy", "admin": "Admin"
  }
};

const es = {
  "header": {
    "nav": { "accueil": "Inicio", "services": "Servicios", "niveaux": "Niveles", "temoignages": "Testimonios", "b2b": "B2B" },
    "contactBtn": "Contáctenos",
    "portalBtn": "Portal del Estudiante"
  },
  "hero": {
    "badge": "Excelencia Alemana en Bamako",
    "title1": "Abra las puertas de ",
    "title2": "Alemania",
    "subtitle": "Aprenda alemán con profesores certificados. Prepárese para sus exámenes del Goethe y construya su futuro académico o profesional.",
    "ctaStart": "Empezar ahora",
    "ctaB2B": "💼 Para empresas",
    "stats": { "students": "Estudiantes formados", "levels": "Niveles cubiertos", "success": "Tasa de éxito" },
    "certBadge": { "title": "Certificaciones", "subtitle": "Goethe-Zertifikat" }
  },
  "services": {
    "badge": "Nuestra Oferta",
    "title": "Pedagogía de Excelencia",
    "subtitle": "Programas diseñados para su éxito, ya sea estudiante o profesional.",
    "cards": {
      "coursIntensifs": { "title": "Cursos Intensivos", "desc": "Progreso rápido con inmersión total. Ideal para los estudios." },
      "preparation": { "title": "Preparación Goethe", "desc": "Entrenamiento específico para certificaciones oficiales." },
      "pro": { "title": "Alemán Profesional", "desc": "Vocabulario técnico y profesional (Médicos, Ingenieros...)" },
      "integration": { "title": "Integración", "desc": "Preparación intercultural y apoyo durante sus primeros meses en Alemania para una integración exitosa." }
    }
  },
  "niveaux": {
    "badge": "Su Progreso",
    "title": "De principiante a experto",
    "subtitle": "Un recorrido estructurado según el Marco Común Europeo de Referencia (MCER).",
    "A1": { "title": "A1 - Principiante", "desc": "Comprender y utilizar expresiones cotidianas de uso frecuente." },
    "A2": { "title": "A2 - Básico", "desc": "Comprender frases aisladas y frecuentes (información personal, compras, entorno próximo)." },
    "B1": { "title": "B1 - Intermedio", "desc": "Comprender los puntos principales de una discusión sobre temas familiares (trabajo, escuela, ocio)." },
    "B2": { "title": "B2 - Avanzado", "desc": "Comprender el contenido esencial de temas concretos o abstractos en un texto complejo." }
  },
  "b2b": {
    "badge": "Empresas",
    "title": "Forme a sus equipos",
    "subtitle": "Soluciones a medida para empresas que desean colaborar con Alemania.",
    "features": {
      "surMesure": "Programas a medida adaptados a su sector",
      "horaires": "Horarios flexibles (en la empresa o en línea)",
      "culture": "Formación intercultural para los negocios"
    },
    "form": {
      "company": "Nombre de la Empresa *", "contact": "Persona de contacto *", "email": "Correo Profesional *", "phone": "Teléfono *",
      "sector": "Sector / Industria *", "candidates": "Número de candidatos *", "message": "Mensaje o perfiles buscados",
      "submit": "Enviar solicitud de asociación", "loading": "Enviando...", "success": "Su solicitud ha sido enviada. Nuestra oficina alemana se pondrá en contacto en 24h.",
      "error": "Ocurrió un error durante el envío.", "privacy": "Sus datos serán tratados con 100% de confidencialidad."
    },
    "sectors": {
      "health": "🩺 Salud y Cuidado", "craft": "🛠️ Artesanía y Técnica", "it": "💻 Informática (IT)", "gastro": "🏨 Hostelería y Restauración", "other": "🏢 Otro sector"
    },
    "counts": {
      "1-2": "1 a 2 candidatos", "3-5": "3 a 5 candidatos", "6-10": "6 a 10 candidatos", "10+": "Más de 10 candidatos"
    },
    "cta": "Solicitar un presupuesto"
  },
  "contact": {
    "badge": "Contacto",
    "title": "¿Listo para empezar?",
    "subtitle": "Contáctenos para evaluar su nivel o inscribirse en nuestra próxima sesión.",
    "form": {
      "name": "Nombre completo *", "email": "Correo electrónico *", "phone": "Teléfono", "level": "Nivel deseado",
      "message": "Su Mensaje *", "submit": "Enviar mensaje", "loading": "Enviando...",
      "success": "Su mensaje ha sido enviado con éxito. ¡Le contactaremos muy pronto!", "error": "Ocurrió un error. Por favor, inténtelo de nuevo."
    },
    "levels": { "A1": "Nivel A1 (Principiante)", "A2": "Nivel A2 (Básico)", "B1": "Nivel B1 (Intermedio)", "B2": "Nivel B2 (Avanzado)" },
    "info": { "address": "ACI 2000, Bamako, Mali", "email": "deutschprobamako@outlook.com", "phone": "+223 70 00 00 00", "opening": "Lun-Sáb: 8h-18h" }
  },
  "testimonials": {
    "title": "Lo que dicen nuestros estudiantes",
    "quote": "\"Gracias a Deutsch Pro Bamako, pude validar mi nivel B1 en tiempo récord. Los profesores son excelentes y muy pedagógicos.\"",
    "author": "- Amadou T."
  },
  "footer": {
    "rights": "Todos los derechos reservados.", "legal": "Aviso Legal", "privacy": "Privacidad", "admin": "Admin"
  }
};

const zh = {
  "header": {
    "nav": { "accueil": "首页", "services": "服务", "niveaux": "级别", "temoignages": "感言", "b2b": "B2B" },
    "contactBtn": "联系我们",
    "portalBtn": "学生门户"
  },
  "hero": {
    "badge": "巴马科的德国卓越",
    "title1": "开启通往 ",
    "title2": "德国",
    "subtitle": "与认证教师一起学习德语。准备歌德考试，构建您的学术或职业未来。",
    "ctaStart": "立即开始",
    "ctaB2B": "💼 企业合作",
    "stats": { "students": "培训学生", "levels": "涵盖级别", "success": "成功率" },
    "certBadge": { "title": "认证", "subtitle": "Goethe-Zertifikat" }
  },
  "services": {
    "badge": "我们的课程",
    "title": "卓越教学",
    "subtitle": "为您的成功量身定制的项目，无论您是学生还是专业人士。",
    "cards": {
      "coursIntensifs": { "title": "强化课程", "desc": "全沉浸式快速进步。非常适合留学。" },
      "preparation": { "title": "歌德备考", "desc": "针对官方认证的专门训练。" },
      "pro": { "title": "职业德语", "desc": "技术和专业词汇（医生、工程师...）" },
      "integration": { "title": "融入德国", "desc": "跨文化准备并在您抵达德国的头几个月提供支持。" }
    }
  },
  "niveaux": {
    "badge": "您的进度",
    "title": "从零基础到专家",
    "subtitle": "遵循欧洲共同语言参考标准（CEFR）的结构化路径。",
    "A1": { "title": "A1 - 初级", "desc": "理解并使用熟悉的日常用语。" },
    "A2": { "title": "A2 - 基础", "desc": "理解孤立和频繁的短语（个人信息、购物、直接环境）。" },
    "B1": { "title": "B1 - 中级", "desc": "理解熟悉主题（工作、学校、休闲）讨论的要点。" },
    "B2": { "title": "B2 - 高级", "desc": "理解复杂文章中具体或抽象主题的主要内容。" }
  },
  "b2b": {
    "badge": "企业",
    "title": "培训您的团队",
    "subtitle": "为希望与德国合作的企业量身定制的解决方案。",
    "features": {
      "surMesure": "适应您所在行业的定制项目",
      "horaires": "灵活的时间（公司内或在线）",
      "culture": "商业跨文化培训"
    },
    "form": {
      "company": "公司名称 *", "contact": "联系人 *", "email": "企业邮箱 *", "phone": "电话 *",
      "sector": "行业 *", "candidates": "候选人数 *", "message": "留言或需求概要",
      "submit": "发送合作请求", "loading": "发送中...", "success": "您的请求已发送。我们的德国办公室将在24小时内联系您。",
      "error": "发送过程中出错。", "privacy": "您的数据将得到100%保密处理。"
    },
    "sectors": {
      "health": "🩺 医疗保健", "craft": "🛠️ 工艺技术", "it": "💻 计算机 (IT)", "gastro": "🏨 酒店餐饮", "other": "🏢 其他行业"
    },
    "counts": {
      "1-2": "1 至 2 名", "3-5": "3 至 5 名", "6-10": "6 至 10 名", "10+": "10名以上"
    },
    "cta": "获取报价"
  },
  "contact": {
    "badge": "联系",
    "title": "准备好开始了吗？",
    "subtitle": "联系我们评估您的水平或报名下一期课程。",
    "form": {
      "name": "全名 *", "email": "电子邮件 *", "phone": "电话", "level": "期望级别",
      "message": "您的留言 *", "submit": "发送留言", "loading": "发送中...",
      "success": "您的留言已成功发送。我们将尽快与您联系！", "error": "发生错误。请重试。"
    },
    "levels": { "A1": "A1 级别 (初级)", "A2": "A2 级别 (基础)", "B1": "B1 级别 (中级)", "B2": "B2 级别 (高级)" },
    "info": { "address": "ACI 2000, 巴马科, 马里", "email": "deutschprobamako@outlook.com", "phone": "+223 70 00 00 00", "opening": "周一至周六: 8:00-18:00" }
  },
  "testimonials": {
    "title": "学生感言",
    "quote": "\"感谢 Deutsch Pro Bamako，我在创纪录的时间内达到了B1水平。老师们非常优秀，很有教学方法。\"",
    "author": "- Amadou T."
  },
  "footer": {
    "rights": "版权所有。", "legal": "法律声明", "privacy": "隐私政策", "admin": "管理"
  }
};

fs.writeFileSync('src/dictionaries/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('src/dictionaries/es.json', JSON.stringify(es, null, 2));
fs.writeFileSync('src/dictionaries/zh.json', JSON.stringify(zh, null, 2));
