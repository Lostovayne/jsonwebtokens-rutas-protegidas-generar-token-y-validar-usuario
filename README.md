- El FBI está abriendo un departamento de informática y te ha contratado para crear el sistema online que gestione
misiones secretas, necesitarás programar un servidor con Express que utilice JWT para la autorización de agentes
que visiten las páginas restringidas.

- En este desafío contarás con un Apoyo Desafío Opcional - FBI System en donde encontrarás un documento JavaScript
que exporta un arreglo de objetos correspondiente a las credenciales de los agentes secretos, además de una
interfaz hecha con HTML y Bootstrap. Siéntete libre de crear tu propia maqueta si así lo deseas, siempre y cuando
cumplas con los requerimientos.
La siguiente imagen es una muestra de una interfaz propuesta:


Crear una ruta que autentique a un agente basado en sus credenciales y genera un token con sus datos.
2. Al autenticar un agente, devolver un HTML que:
 - Muestre el email del agente autorizado.
 - Guarde un token en SessionStorage con un tiempo de expiración de 2 minutos.
- Disponibiliza un hiperenlace para redirigir al agente a una ruta restringida.
3. Crear una ruta restringida que devuelva un mensaje de Bienvenida con el correo del agente autorizado, en caso contrario devolver un estado HTTP que indique que el usuario no está autorizado y un mensaje que
menciona la descripción del error.


<!-- PARA JUAN -->

**Usando postman o insomnia  dirigirse a la ruta sign de tipo post
pasarle los datos de registro user y password por defecto :**

*Solo se permite registrarse a usuarios que ya se encuentren en la base de datos privada del fbi , no se permite el acceso ni el registro a usuarios que no esten incluidos en la base de datos*


***Dirigirse a la ruta sign de tipo post :***

`http://localhost:3000/sign`

```json
{ user: "correo@example.com", 
password: "123456" }
```

- Esto generará el token 

Luego dirigirse a la ruta login de tipo post: 

`http://localhost:3000/login`

y usar el token generado anteriormente con un tiempo de 2 minutos , la peticion es de tipo Post
pasando el token  en la variable `authorization` de los headers

Se generará la validacion de este token , luego se redirecciona a la ruta /profile automaticamente la cual es de tipo /GET pasando por parametro el correo del usuario que accede a dicha ruta y se procede a validar nuevamente que el token anterior que viene en el header sea valido y incluya el correo electronico de la persona que fue redireccionada , para evitar que una persona con x correo use el token de otra persona.

Si todo va correcto recibirá un mensaje de bienvenida con su correo electronico ! 
