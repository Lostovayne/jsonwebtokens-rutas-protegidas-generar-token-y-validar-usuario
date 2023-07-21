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
3. Crear una ruta restringida que devuelva un mensaje de Bienvenida con el correo del agente autorizado, en
caso contrario devolver un estado HTTP que indique que el usuario no está autorizado y un mensaje que
menciona la descripción del error.