import type { Project, ProjectImage } from '../types/portfolio';
import es from './projects/es.json';
import en from './projects/en.json';

const shot = (
  src: string,
  es: string,
  en: string,
  device: ProjectImage['device'] = 'desktop',
): ProjectImage => ({
  src: `images/${src}`,
  alt: { es, en },
  device,
});

// The order here is the display order. Add a project here without changing the UI.
export const projects: Project[] = [
  {
    id: 'landysystem',
    name: 'LandySystem',
    categories: ['web'],
    field: { es: 'Gestión empresarial · ERP', en: 'Business management · ERP' },
    summary: {
      es: 'Desarrollé módulos de gestión, autenticación y pagos con actualización en tiempo real.',
      en: 'I built management, authentication and payment features with real-time updates.',
    },
    technologies: ['React', 'TypeScript', 'Express.js', 'PostgreSQL', 'Socket.IO'],
    images: [
      shot('landy/dash.png', 'Panel administrativo de LandySystem', 'LandySystem admin dashboard'),
      shot('landy/ventas.png', 'Administración de ventas', 'Sales management'),
      shot('landy/usuarios.png', 'Gestión de usuarios', 'User management'),
      shot('landy/empleados.png', 'Gestión de empleados', 'Employee management'),
      shot('landy/dash_mobile.png', 'Panel en móvil', 'Mobile dashboard', 'mobile'),
      shot('landy/ventas_mobile.png', 'Ventas en móvil', 'Mobile sales', 'mobile'),
      shot('landy/usuarios_mobile.png', 'Usuarios en móvil', 'Mobile users', 'mobile'),
      shot('landy/empleados_mobile.png', 'Empleados en móvil', 'Mobile employees', 'mobile'),
    ],
    links: [
      {
        label: { es: 'Administrativo (desarrollo)', en: 'Admin (development)' },
        href: 'https://dev-landysystem.corporativolanderos.com/',
      },
      {
        label: { es: 'Punto de venta (desarrollo)', en: 'Point of sale (development)' },
        href: 'https://dev-pos-landysystem.corporativolanderos.com/',
      },
    ],
    content: { es: es.landysystem, en: en.landysystem },
  },
  {
    id: 'trackit',
    name: 'HPL Trackit',
    categories: ['web', 'mobile'],
    field: { es: 'Logística · Web y móvil', en: 'Logistics · Web & mobile' },
    summary: {
      es: 'Desarrollé APIs y funcionalidades móviles. Gestiono despliegues y bases de datos en dev, QA y producción.',
      en: 'I developed APIs and mobile features. I manage deployments and databases across dev, QA and production.',
    },
    technologies: ['React Native', 'TypeScript', 'Express.js', 'MySQL'],
    images: [
      shot('trackit/vehiculos_track.jpeg', 'Gestión de vehículos', 'Vehicle management', 'mobile'),
      shot('trackit/punto_entrega.jpeg', 'Puntos de entrega', 'Delivery locations', 'mobile'),
      shot('trackit/graficas_track.jpeg', 'Métricas de viajes', 'Trip metrics', 'mobile'),
      shot('trackit/login_track.jpeg', 'Inicio de sesión', 'Sign in', 'mobile'),
      shot(
        'trackit/register_track.jpeg',
        'Registro de transportistas',
        'Carrier registration',
        'mobile',
      ),
      shot(
        'trackit/embaeques_conf.jpeg',
        'Configuración de embarques',
        'Shipment settings',
        'mobile',
      ),
      shot(
        'trackit-web/Captura de pantalla 2026-11-14 205334.png',
        'Trackit web: inicio de sesión',
        'Trackit web: sign in',
      ),
      shot(
        'trackit-web/Captura de pantalla 2026-11-14 205621.png',
        'Trackit web: seguimiento de estatus de traslados',
        'Trackit web: trip status tracking',
      ),
      shot(
        'trackit-web/Captura de pantalla 2026-11-14 205650.png',
        'Trackit web: catálogo de transportes MTR',
        'Trackit web: MTR transport catalog',
      ),
    ],
    links: [
      {
        label: { es: 'Google Play', en: 'Google Play' },
        href: 'https://play.google.com/store/apps/details?id=com.hpltrackit.trackit&pcampaignid=web_share',
      },
      {
        label: { es: 'App Store', en: 'App Store' },
        href: 'https://apps.apple.com/mx/app/hpl-track-it/id6758738570',
      },
    ],
    content: { es: es.trackit, en: en.trackit },
  },
  {
    id: 'mayakoba',
    name: 'Finanzas Mayakoba',
    categories: ['web'],
    field: { es: 'Finanzas · Plataforma interna', en: 'Finance · Internal platform' },
    summary: {
      es: 'Implementé formularios, APIs y flujos de autorización para órdenes de compra y pago.',
      en: 'I implemented forms, APIs and approval workflows for purchase and payment orders.',
    },
    technologies: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    images: [
      shot('Inicio.jpg', 'Consulta de órdenes de compra', 'Purchase orders'),
      shot('crear_orden_compra.jpg', 'Nueva orden de compra', 'New purchase order'),
      shot('crear_orden_compra_proveedores.jpg', 'Selección de proveedores', 'Supplier selection'),
      shot('Inicio_op.jpg', 'Órdenes de pago', 'Payment orders'),
      shot('inicio_phone.jpg', 'Vista móvil', 'Mobile view', 'mobile'),
      shot('inicio_oc_phone.jpg', 'Órdenes en móvil', 'Mobile orders', 'mobile'),
      shot('crear_orden_compra_phone.jpg', 'Formulario móvil', 'Mobile form', 'mobile'),
      shot(
        'crear_orden_compra_prov_phone.jpg',
        'Proveedores en móvil',
        'Mobile suppliers',
        'mobile',
      ),
    ],
    links: [],
    content: { es: es.mayakoba, en: en.mayakoba },
  },
  {
    id: 'benitojuarez',
    name: 'Benito Juárez',
    categories: ['mobile'],
    field: { es: 'Monitoreo · Aplicación móvil', en: 'Monitoring · Mobile application' },
    summary: {
      es: 'Integré autenticación, chat y reproducción de video en una aplicación móvil de monitoreo.',
      en: 'I integrated authentication, chat and video playback into a mobile monitoring application.',
    },
    status: { es: 'Desarrollo pausado', en: 'Development paused' },
    technologies: ['Flutter', 'Spring Boot', 'JWT', 'WebSockets'],
    images: [
      shot('bj/home_cameras.jpeg', 'Panel de cámaras', 'Camera dashboard', 'mobile'),
      shot('bj/chat_vecinal.jpeg', 'Chat vecinal', 'Neighborhood chat', 'mobile'),
      shot('bj/load_cameras.jpeg', 'Reproducción de cámaras', 'Camera playback', 'mobile'),
      shot('bj/change_password.jpeg', 'Cambio de contraseña', 'Password change', 'mobile'),
    ],
    links: [],
    video: 'images/bj/BJ-App.mp4',
    content: { es: es.benitojuarez, en: en.benitojuarez },
  },
  {
    id: 'expomex',
    name: 'Expomex',
    categories: ['web'],
    field: { es: 'Operaciones · Plataforma web', en: 'Operations · Web platform' },
    summary: {
      es: 'Desarrollé vistas por rol y endpoints para consultar zonas y subzonas de sucursales.',
      en: 'I developed role-based views and endpoints to query branch zones and subzones.',
    },
    technologies: ['Vue.js', 'Express.js', 'TypeScript', 'MySQL'],
    images: [
      shot('expo/inicio.jpg', 'Inicio de Expomex', 'Expomex home'),
      shot('expo/zonas.jpg', 'Consulta de zonas', 'Zone lookup'),
      shot('expo/subzonas.jpg', 'Consulta de subzonas', 'Subzone lookup'),
      shot('expo/zonas_1.jpg', 'Administración de zonas', 'Zone management'),
    ],
    links: [],
    content: { es: es.expomex, en: en.expomex },
  },
  {
    id: 'equilibrio',
    name: 'Equilibrio Total',
    categories: ['mobile'],
    field: { es: 'Asistencias · Aplicación móvil', en: 'Attendance · Mobile application' },
    summary: {
      es: 'Implementé autenticación, sesiones temporales y validación de asistencia mediante QR.',
      en: 'I implemented authentication, time-limited sessions and QR-based attendance validation.',
    },
    technologies: ['Flutter', 'PHP', 'MySQL'],
    images: [
      shot('equilibrio/qr.jpg', 'Registro mediante QR', 'QR attendance registration', 'mobile'),
      shot('equilibrio/inicio.jpg', 'Inicio de sesión', 'Sign in', 'mobile'),
      shot(
        'equilibrio/recuperar_contraseña.jpg',
        'Recuperación de contraseña',
        'Password recovery',
        'mobile',
      ),
    ],
    links: [],
    content: { es: es.equilibrio, en: en.equilibrio },
  },
];
