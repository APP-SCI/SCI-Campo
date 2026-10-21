# SCI Campo – Guía de publicación e instalación

App web instalable (PWA) para diligenciar los formatos del Sistema Comando de Incidentes en campo.
No necesita servidor, no tiene costo, funciona sin internet una vez instalada y los datos quedan solo en el dispositivo.

## Archivos del paquete

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app completa, incluidas las plantillas oficiales HSES (201, 202, 204, 205, 207, 211, 214, 221) |
| `sw.js` | Permite que la app funcione sin internet |
| `manifest.webmanifest` | Permite instalarla como app en celular y PC |
| `icon-192.png`, `icon-512.png` | Íconos de la app |

Suba los cinco archivos juntos, en la misma carpeta.

## 1. Publicar gratis en GitHub Pages (una sola vez, unos 10 minutos)

1. Cree una cuenta gratuita en https://github.com (si no la tiene).
2. Arriba a la derecha: **+ › New repository**. Nombre: `sci-campo`. Marque **Public**. Clic en **Create repository**.
3. En el repositorio nuevo, clic en **uploading an existing file** (o **Add file › Upload files**).
4. Arrastre los cinco archivos del paquete (no la carpeta, los archivos). Clic en **Commit changes**.
5. Vaya a **Settings › Pages**. En *Branch* elija `main` y carpeta `/ (root)`. Clic en **Save**.
6. Espere 1 a 2 minutos y recargue esa página. Aparecerá la dirección de su app:
   `https://SU-USUARIO.github.io/sci-campo/`

Comparta esa dirección con su equipo.

## 2. Instalar la app

- **Android (Chrome):** abra la dirección › menú ⋮ › **Instalar app** o **Agregar a pantalla principal**.
- **iPhone / iPad (Safari):** abra la dirección › botón **Compartir** › **Agregar a inicio**.
- **PC (Chrome o Edge):** abra la dirección › ícono de instalar en la barra de direcciones › **Instalar**.

Abra la app una vez con internet; después funciona sin conexión en campo.
No pide permisos de instalación: corre dentro del navegador, aislada del sistema. Solo pide la ubicación si usted toca el botón **GPS**, y puede negarla.

## 3. Activar la IA generativa (opcional y gratuita)

El asistente experto que propone objetivos, estrategias y tácticas funciona siempre, sin internet.
Para tener además propuestas redactadas por IA generativa cuando haya señal:

1. Entre a https://aistudio.google.com/apikey con una cuenta de Google y cree una clave (no pide tarjeta).
2. En la app: **Ajustes › IA generativa** › pegue la clave › **Probar conexión**.

La clave queda guardada solo en ese dispositivo. Por defecto la app **no envía** el nombre de la infraestructura, el código del evento ni nombres de personas.
El nivel gratuito de Google tiene límites de uso que pueden cambiar.

## 4. Actualizar la app

1. Reemplace `index.html` en GitHub (**Add file › Upload files**).
2. Abra `sw.js` en GitHub, cambie la línea `VERSION` (por ejemplo `v1.0.0` → `v1.0.1`) y guarde.
Los equipos instalados toman la nueva versión la siguiente vez que abran la app con internet.

Si HSES publica una versión nueva de un formato con la misma distribución, cada usuario puede cargarla en **Ajustes › Plantillas oficiales** sin actualizar la app.

## 5. Seguridad de la información

- Los incidentes se guardan en el navegador del dispositivo. Use **Respaldo (.json)** para pasarlos a otro equipo.
- Un repositorio público de GitHub deja descargables los archivos de la app, incluidas las plantillas (su hoja *INFORMACION AC* tiene nombres y correos de quienes elaboraron los formatos). Si eso no es aceptable para su empresa, publique en un sitio con acceso restringido, por ejemplo Cloudflare Pages con Cloudflare Access (tiene plan gratuito para equipos pequeños), o en el servidor interno de la empresa.
- Los datos de los incidentes nunca se suben a GitHub: solo viven en cada dispositivo.

## Formatos por periodo

- **Periodo inicial (0 a 4 h):** SCI 201, 211, 214, 221.
- **Periodo operacional (5 a 12 h):** SCI 201, 202, 206, 207, 211, 214, 221; complementarios 204 y 205.

El SCI 206 (Plan Médico) se exporta como página imprimible porque aún no hay plantilla HSES. Cuando exista, se conecta al Excel oficial igual que los demás.
