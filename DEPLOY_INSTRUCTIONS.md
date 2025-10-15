# 🚀 Instrucciones para Subir tu Portafolio a Vercel

## ✅ Preparación Completada

He preparado tu proyecto para el despliegue en Vercel. Los siguientes cambios fueron realizados:

1. ✅ **Corregido error de TypeScript**: Agregado `export default` a `FloatingNavbar.tsx`
2. ✅ **Configuración de Vercel**: Creado archivo `vercel.json`
3. ✅ **Configuración de Next.js**: Actualizado `next.config.mjs` con opciones optimizadas
4. ✅ **Build exitoso**: El proyecto compila correctamente sin errores

---

## 📋 Método 1: Despliegue desde la Web de Vercel (Recomendado)

### Paso 1: Subir cambios a GitHub
```bash
# Verifica el estado de tus cambios
git status

# Agrega todos los cambios
git add .

# Haz commit de los cambios
git commit -m "fix: preparado proyecto para deploy en Vercel"

# Sube los cambios a GitHub
git push origin main
```

### Paso 2: Conectar con Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en **"Add New Project"**
4. Selecciona tu repositorio: `Professional-Portfolio`
5. Vercel detectará automáticamente que es un proyecto Next.js

### Paso 3: Configurar el Proyecto
- **Framework Preset**: Next.js (detectado automáticamente)
- **Root Directory**: `./` (dejar por defecto)
- **Build Command**: `next build` (detectado automáticamente)
- **Output Directory**: `.next` (detectado automáticamente)

### Paso 4: Variables de Entorno (Opcional)
Si quieres subir source maps a Sentry (opcional), agrega:
- **Variable**: `SENTRY_AUTH_TOKEN`
- **Value**: (tu token de Sentry si lo tienes)

*Nota: El proyecto funciona perfectamente sin esta variable*

### Paso 5: Deploy
- Haz clic en **"Deploy"**
- Espera 2-3 minutos mientras Vercel construye tu proyecto
- ¡Listo! Recibirás una URL como: `https://tu-portfolio.vercel.app`

---

## 📋 Método 2: Despliegue desde la Terminal (Alternativo)

### Requisitos Previos
```bash
# Instalar Vercel CLI (si no lo tienes)
npm install -g vercel
```

### Pasos para Deploy
```bash
# 1. Asegúrate de estar en el directorio del proyecto
cd "C:\Users\Estudiante UCU\Desktop\prueba\Professional-Portfolio"

# 2. Login en Vercel
vercel login

# 3. Deploy a producción
vercel --prod
```

Sigue las instrucciones en la terminal:
- **Set up and deploy**: `Y`
- **Which scope**: Selecciona tu cuenta
- **Link to existing project**: `N` (primera vez)
- **What's your project's name**: `professional-portfolio` (o el nombre que prefieras)
- **In which directory is your code located**: `./`
- **Want to override the settings**: `N`

---

## 🔧 Solución de Problemas Comunes

### Problema: Build falla en Vercel
**Solución**: Verifica que el build funcione localmente primero:
```bash
npm run build
```

### Problema: "Module not found" en Vercel
**Solución**: Asegúrate de que todas las dependencias estén en `package.json`:
```bash
npm install
```

### Problema: Imágenes no se cargan
**Solución**: Las imágenes en la carpeta `public` funcionan automáticamente. Usa rutas como `/imagen.png`

### Problema: Sentry auth token warning
**Solución**: Esto es solo una advertencia. El proyecto funciona sin el token. Si quieres eliminarlo, puedes agregar la variable de entorno `SENTRY_AUTH_TOKEN` en Vercel.

---

## 🎨 Personalización Post-Deploy

### Configurar Dominio Personalizado
1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Sigue las instrucciones de DNS

### Configurar Variables de Entorno
1. Settings → Environment Variables
2. Agrega las variables necesarias
3. Redeploy para aplicar cambios

### Ver Logs y Analíticas
- **Deployments**: Historial de todos los deploys
- **Analytics**: Métricas de rendimiento
- **Logs**: Para debugging en tiempo real

---

## 📱 Verificación Post-Deploy

Después del deploy, verifica que todo funcione:

- ✅ La página carga correctamente
- ✅ El navbar flotante funciona
- ✅ Las animaciones se reproducen
- ✅ El globo 3D se renderiza
- ✅ Los botones y links funcionan
- ✅ El footer tiene tus enlaces de redes sociales
- ✅ La página es responsive en móvil

---

## 🔄 Actualizaciones Futuras

Para actualizar tu sitio:

1. Haz cambios en tu código local
2. Commit y push a GitHub:
   ```bash
   git add .
   git commit -m "tu mensaje de cambio"
   git push origin main
   ```
3. Vercel detectará automáticamente el push y redesplegará tu sitio

---

## 📞 Recursos Adicionales

- 📖 [Documentación de Vercel](https://vercel.com/docs)
- 📖 [Next.js Documentation](https://nextjs.org/docs)
- 🐛 [Vercel Support](https://vercel.com/support)

---

## ✨ Estado Actual del Proyecto

- **Build Status**: ✅ Exitoso
- **TypeScript**: ✅ Sin errores
- **ESLint**: ⚠️ Solo warnings (no bloquean el deploy)
- **Dependencias**: ✅ Todas instaladas
- **Listo para Deploy**: ✅ SÍ

---

**¡Tu portafolio está listo para brillar en Vercel! 🌟**

