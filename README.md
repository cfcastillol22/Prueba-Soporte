# Ajustes de la prueba

Se actualiza controlador task

-   En metodo store se valida el campo user_id para que corresponda con la relacion
-   se cargan los datos de la relacion con el usuario para mostrarlos en la vista
-   Se retorna json el lugar de hacer una redireccion
-   Se crear metodo index para retornar todas las tareas con su realción a usuario para capturar el nombre y mostrarlo en el frontend
-   Se modifica metodo destroy para eliminar, se retorna json
-   Se modifica metodo update para validar y modificar el campo completed

# Se crea controlador User

-   Se crea controlador user y metodo index para retornar los usuarios de la BD y mostrarlos en lista desplegable en formulario.

# Se modifica modelo user

-   se cambia el nombre de la variable protegida $table por user para que concuerde con el nombre de la entidad en BD

# Se modifica el store

-   se agrega estado incial para usuarios
-   se agrega las mutaciones de SET_USERS y SET_TASKS para fecthing inicial
-   se agregan las acciones fetachTasks y fetachUsers para carga de datos de tareas y usuarios
-   se agrega el getter user
-   en general se modifican todas las acciones para que retornen el error en caso de existir un error con el backend
-   se modifica el action updateTask para enviar atribute complete=true
-   TODO: refactorizar las demas actions.

# Se modifica vista TaskList vue

-   se crea div condicional para errores
-   se retorna el nombre del usuario en el assigned to
-   se crea select de usuarios con la data de la BD tabla user
-   se modifica campo user por user_id
-   se valida que user_id tenga un valor numerico valido.
-   se agrega errors para mostrar posibles errores con el backend
-   se condiciona el boton completed para que cuando este una tarea completed = true, se muestre texto completed
-   TODO: refactorizar errors y mensajes de satisfaccion

# Se crea ruta get /tasks para obtener el listado de tareas

Se ruta get api/users para obtener el listado de usuarios para el select
TODO: proteger los endpoints

# Se formatea el Código intervenido

# Prueba Técnica - Sistema de Gestión de Tareas

## Descripción del Proyecto

Este proyecto es un sistema básico de gestión de tareas desarrollado con Laravel y Vue.js. El objetivo de esta prueba técnica es identificar y corregir errores en el código tanto en el backend como en el frontend. El sistema permite a los usuarios crear, actualizar, eliminar y visualizar tareas.

## Objetivo de la Prueba

El objetivo principal de esta prueba es evaluar tus habilidades para depurar y corregir errores en un proyecto existente que utiliza Laravel, PHP, JavaScript, y Vue.js. Deberás:

-   Identificar y corregir errores en el backend relacionado con la creación, actualización, eliminación y validación de tareas.
-   Corregir problemas en el frontend que afectan la visualización y manejo de la lista de tareas.
-   Asegurarte de que las tareas se gestionen correctamente en la interfaz de usuario.

Además, deberás agregar una funcionalidad extra para filtrar las tareas completadas y pendientes.

## Instrucciones de Instalación

Sigue los siguientes pasos para configurar el proyecto en tu entorno local:

1.  **Clona el repositorio:**

    Prueba-Soporte

2.  **Instala las dependencias de PHP y Node.js:**

    .Composer: Para instalar las dependencias de PHP, ejecuta:

         composer install

    .NPM: Para instalar las dependencias de Node.js, ejecuta:

         npm install
         npm run dev

3.  **Configura el archivo de entorno .env:**

    .Copia el archivo .env.example a .env:

        cp .env.example .env

    .Genera la clave de la aplicación:

        php artisan key:generate

    .Configura la base de datos en el archivo .env. Asegúrate de tener una base de datos MySQL disponible y configurada.

4.  **Ejecuta las migraciones para crear las tablas necesarias:**

    php artisan migrate

5.  **Compilar Recursos de Frontend:**

    .Compila los archivos de frontend utilizando Laravel Mix:

        npm run dev

6.  **Iniciar el Servidor:**

    .Inicia el servidor de desarrollo de Laravel:

        php artisan serve

**Objetivo de la Prueba**

El proyecto contiene errores tanto en el backend (Laravel/PHP) como en el frontend (JavaScript). Tu objetivo es:

1.Identificar los errores en el código.
2.Corregir los errores para que la aplicación funcione correctamente.
3.Probar la aplicación después de realizar las correcciones para asegurarte de que todo funcione como se espera.

**Entrega**

Sube el código corregido a un repositorio de GitHub y envíanos el enlace. Asegúrate de describir los problemas que encontraste y cómo los solucionaste en este archivo README.md.

**Notas**

Puedes añadir cualquier comentario adicional sobre las decisiones que tomaste al corregir el código.
Recuerda que el objetivo es demostrar tu capacidad para depurar y mejorar código existente.

¡Buena suerte!
