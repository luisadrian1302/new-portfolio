# Portafolio de Luis Adrián

Portafolio independiente construido con React, TypeScript y Vite. Presenta seis proyectos web y móviles, experiencia, formación y contacto en español e inglés. El contenido y los recursos proceden de `../my-app`, pero esta aplicación no depende de esa carpeta para funcionar.

## Ejecutar

Usa Node **22.12 o superior** (o Node 20.19). Node 21 no pertenece al rango soportado por Vite.

```sh
cd portafolio
npm install
npm run dev
```

Abre la dirección que indique Vite. Para una instalación reproducible después de clonar, utiliza `npm ci`.

```sh
npm run typecheck     # Validación estricta de TypeScript
npm run build         # TypeScript + compilación de producción en dist/
npm run preview       # Servir el resultado compilado
npm run format        # Dar formato al código
npm run format:check  # Comprobar el formato
```

## Dónde editar

| Cambio                                                                  | Archivo                                    |
| ----------------------------------------------------------------------- | ------------------------------------------ |
| Nombre, correo, redes, experiencia, tecnologías, certificados           | `src/content/profile.ts`                   |
| Encabezados, navegación y textos generales ES/EN                        | `src/content/copy.ts`                      |
| Orden, categoría, resumen, capturas, tecnologías y enlaces de proyectos | `src/content/projects.ts`                  |
| Explicación detallada de cada proyecto                                  | `src/content/projects/es.json` y `en.json` |
| Colores, tipografía, ancho y espaciado general                          | `src/styles/tokens.css`                    |
| Estilos base, botones y accesibilidad                                   | `src/styles/global.css`                    |
| Distribución, secciones y adaptación móvil                              | `src/styles/layout.css`                    |
| Tarjetas, galería y diálogo                                             | `src/styles/projects.css`                  |
| Título inicial, descripción SEO e icono                                 | `index.html` y `public/favicon.svg`        |
| Capturas, video y certificados                                          | `public/images/` y `public/certificates/`  |

## Añadir un proyecto

1. Coloca las capturas en `public/images/nuevo-proyecto/`.
2. Añade una entrada en cada JSON de detalle. Usa la misma clave, por ejemplo `nuevoProyecto`, en ambos idiomas. Incluye `title`, `description` y `modalContent` con `overview`, `mainFeatures` y `participation`. `disclaimer` es opcional.
3. Añade un objeto al arreglo `projects` de `src/content/projects.ts`, siguiendo el tipo `Project`. Vincula `content: { es: es.nuevoProyecto, en: en.nuevoProyecto }`.
4. Usa `categories: ['web']`, `['mobile']` o `['web', 'mobile']` si el proyecto incluye ambas plataformas. Describe cada captura en ambos idiomas y marca su formato con `device: 'desktop'` o `'mobile'`. La galería agrupa las capturas por formato y la primera imagen determina la vista previa de la tarjeta.
5. Deja `links: []` cuando no exista una demo pública. `status` y `video` son opcionales.
6. Ejecuta `npm run build` y comprueba el filtro, las capturas y el contenido en ambos idiomas.

Los filtros calculan sus totales automáticamente. El primer proyecto del arreglo se presenta en la portada; su nombre, resumen, tecnologías y capturas se obtienen del mismo objeto. Mantén al menos un proyecto y una captura por proyecto.

Trackit incluye seis capturas móviles y tres web en `public/images/trackit-web/`. Se muestra en ambos filtros como un solo proyecto. Los totales por categoría pueden sumar más que el total de proyectos. Sus textos destacan desarrollo de APIs y endpoints, despliegues y bases de datos en dev, QA y producción. El contenido general está orientado a presentar la experiencia profesional en procesos de selección.

## Arquitectura

```text
src/
  app/                  Composición de la página y proveedor de idioma
  components/           Elementos compartidos: navegación, iconos, encabezados
  content/              Datos y traducciones; sin lógica de presentación
  features/projects/    Tarjeta y diálogo con galería de proyectos
  sections/             Hero, proyectos, sobre mí, experiencia y contacto
  types/                Contratos de contenido con TypeScript
  lib/                  Resolución de rutas de recursos
  styles/               Variables de diseño y estilos por responsabilidad
public/                 Recursos independientes de React
```

La separación de responsabilidades mantiene las ediciones frecuentes en `content/`. Las secciones componen componentes; los componentes reciben datos tipados y callbacks. `App` controla el proyecto seleccionado, `Projects` controla su filtro y `ProjectDialog` controla su galería. El idioma es el único estado compartido mediante Context, con persistencia opcional en `localStorage`.

Esta web no necesita una capa de servicios, repositorios, un router o un gestor de estado externo. Si después incorporas una API, añade su acceso en un módulo separado y convierte sus respuestas a los tipos de `types/` antes de entregarlas a la interfaz.

Los estilos se cargan en orden: tokens → base → layout → proyectos. Cambia las variables de `tokens.css` para mantener consistentes los colores y tamaños. Prettier mantiene el código legible y uniforme.

## Diseño e interacción

- Paleta clara con verde sobrio, tipografía jerarquizada y espacio para leer.
- Proyectos y aportaciones personales como evidencia principal.
- Capturas originales; galería completa al abrir cada proyecto.
- Menú adaptable, filtros y enlaces con nombres accesibles.
- Diálogo nativo con cierre mediante Escape, restricción de foco y restauración al elemento que lo abrió.
- Navegación de galería por botones, miniaturas y flechas de teclado cuando el foco está dentro de la galería.
- Respeto de `prefers-reduced-motion` y enlace para saltar al contenido.
- Correo mediante `mailto:` y botón de copia con aviso de éxito/error. No requiere backend ni envía mensajes automáticamente.

## Publicación

`npm run build` genera `dist/`, que se puede alojar en un servicio estático. `base: './'` y el helper `asset()` mantienen los recursos compatibles con subdirectorios, por ejemplo GitHub Pages. Publica el contenido de `dist/`; no abras `index.html` directamente mediante `file://`.

Los enlaces externos se conservaron del portafolio original. Los enlaces de LandySystem están identificados como entornos de desarrollo. Las notas sobre contenido simulado y el estado pausado de Benito Juárez se conservan en sus fichas. Revisa y actualiza la situación profesional en `profile.ts` cuando cambie.

