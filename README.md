# Perfil3_EugenioReyes

Aplicación para la actividad evaluada del Módulo 5. Está desarrollada con React Native, Expo SDK 57 y Expo Router, que utiliza React Navigation internamente.

## Datos del estudiante

| Campo | Valor |
|---|---|
| Nombre | Eugenio Reyes |
| Carnet | 202402053 |
| Sección y grupo | Actualizar en `src/config/student.js` antes de entregar |
| Video demostrativo | Pendiente de agregar enlace público |
| APK | Pendiente de agregar enlace de EAS Build al finalizar el build |

## Funcionalidades

- Pantalla inicial con nombre, carnet, sección y grupo.
- Navegación a un catálogo de personajes de Rick and Morty API.
- Tarjetas reutilizables que muestran nombre, imagen y descripción.
- `useCharacters` concentra `fetch`, `async/await`, carga, error, cancelación y reintento.
- Icono y splash personalizados.
- Perfil `apk` de EAS configurado para crear un APK instalable.

## Ejecutar

```bash
npm install
npx expo start
```

## Crear y publicar el APK

Inicia sesión con tu cuenta de Expo y ejecuta:

```bash
npx eas-cli@latest login
npx eas-cli@latest build:configure
npx eas-cli@latest build --platform android --profile apk
```

Cuando el build termine, Expo mostrará el enlace de descarga. Copia ese enlace en la fila **APK** de este README y comprueba la instalación en un emulador o teléfono Android. EAS usa `android.buildType: "apk"`; el perfil de producción normal genera AAB, que no es instalable directamente.

## Entrega

El repositorio público debe llamarse `Perfil3_NombreApellido`. Antes de entregar, reemplaza la sección y grupo, agrega el enlace público del video, agrega el enlace real del APK y prueba el APK instalado.
