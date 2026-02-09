# POC Test Cases

## UI Smoke
- Login exitoso con usuario estandar.
- Login bloqueado muestra mensaje esperado.
- Login vacio muestra error de username requerido.
- Login sin password muestra error de password requerido.
- Login con password invalido muestra error de credenciales.

## UI Sanity
- Checkout E2E con un producto.
- Carrito agrega dos productos, elimina uno y valida cantidad final.

## UI Regression
- Checkout E2E con otro producto.
- Checkout valida error cuando falta first name.
- Checkout cancelado regresa a carrito.

## API Positive
- Login API responde token.
- Listado de usuarios pagina 2 con estructura basica.
- Creacion de usuario responde id y createdAt.

## API Negative
- Login sin password responde 400.
- Login sin email responde 400.
- Consulta de usuario inexistente responde 404.
