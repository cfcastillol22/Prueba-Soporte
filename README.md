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
