                                        Final - Sistema de Gestión de Reseñas de Restaurantes

Un proyecto completo que permite a los usuarios registrarse, iniciar sesión y gestionar reseñas de restaurantes. Desarrollado con el backend en Node.js y el frontend en Vue.js, este sistema incluye funcionalidades para crear, leer, actualizar y eliminar reseñas, con autenticación y autorización basadas en tokens JWT.

---

CREDITOS:

Yilber Velasquez/Samuel Giraldo

Descripción:

Este proyecto permite:
- A los usuarios autenticados:
  - Crear reseñas sobre restaurantes.
  - Editar y eliminar sus propias reseñas.
- A cualquier usuario:
  - Ver todas las reseñas disponibles (de otros usuarios y propias).
  
El sistema garantiza que los usuarios no puedan modificar las reseñas de otros. Es una solución ideal para gestionar opiniones de restaurantes, con una experiencia fluida y un diseño limpio.

---

Instalación:

Backend:

1. Navega a la carpeta `Backend`:
   ```bash
   cd Backend

2. Intalar las dependencias:

npm install

3.Configura las variables de entorno:

Crea un archivo .env en la raíz de Backend con el siguiente contenido:

PORT=5000
MONGO_URI=<TU_URL_DE_MONGODB>
JWT_SECRET=<TU_SECRET_JWT>

4.Iniciar el servidor:

npm run dev


Frontend

1.Navega a la carpeta FrontendRestaurante2:

cd FrontendRestaurante2


2.Instala las dependencias necesarias:

npm install

3.Inicia el servidor de desarrollo:

npm run serve



Aquí tienes un archivo README.md completo y bien estructurado para tu proyecto. Puedes adaptarlo según lo necesites:

markdown
Copiar código
# Final - Sistema de Gestión de Reseñas de Restaurantes

Un proyecto completo que permite a los usuarios registrarse, iniciar sesión y gestionar reseñas de restaurantes. Desarrollado con un **backend en Node.js** y un **frontend en Vue.js**, este sistema incluye funcionalidades para crear, leer, actualizar y eliminar reseñas, con autenticación y autorización basadas en tokens JWT.

---

## Descripción

Este proyecto permite:
- A los usuarios autenticados:
  - Crear reseñas sobre restaurantes.
  - Editar y eliminar sus propias reseñas.
- A cualquier usuario:
  - Ver todas las reseñas disponibles (de otros usuarios y propias).
  
El sistema garantiza que los usuarios no puedan modificar las reseñas de otros. Es una solución ideal para gestionar opiniones de restaurantes, con una experiencia fluida y un diseño limpio.

---

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en un entorno local:

### **Backend**

1. Navega a la carpeta `Backend`:
   ```bash
   cd Backend
Instala las dependencias necesarias:

bash
Copiar código
npm install
Configura las variables de entorno:

Crea un archivo .env en la raíz de Backend con el siguiente contenido:
plaintext
Copiar código
PORT=5000
MONGO_URI=<TU_URL_DE_MONGODB>
JWT_SECRET=<TU_SECRET_JWT>
Inicia el servidor:

bash
Copiar código
npm run dev
El servidor estará corriendo en http://localhost:5000.

Frontend
Navega a la carpeta FrontendRestaurante2:

bash
Copiar código
cd FrontendRestaurante2
Instala las dependencias necesarias:

bash
Copiar código
npm install
Inicia el servidor de desarrollo:

bash
Copiar código
npm run serve
La aplicación estará disponible en http://localhost:8080.

Uso:
*Registro de usuarios
1.Accede a la página de registro en http://localhost:8080/register.
2.Rellena los campos de Nombre, Correo Electrónico y Contraseña para crear un nuevo usuario.

*Inicio de sesión

1.Accede a la página de inicio de sesión en http://localhost:8080/login.
2.Ingresa tus credenciales para autenticarte.
3.Serás redirigido automáticamente a la página de reseñas.

*Gestión de reseñas

1.Accede a la página de reseñas en http://localhost:8080/reviews.
2.Funcionalidades disponibles:
Crear: Rellena el formulario para agregar una reseña.
Editar: Haz clic en "Editar" para modificar una reseña que tú creaste.
Eliminar: Haz clic en "Eliminar" para borrar una reseña que tú creaste.
Visualizar: Todas las reseñas de los usuarios son visibles, pero solo puedes editar o eliminar las tuyas.

Licencia
Este proyecto está distribuido bajo la licencia MIT

