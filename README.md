# CRUD de productos

## Tecnologías usadas para la parte del frontend
### `React.Js` `Redux` `Axios` `Styled Components`

## Tecnologías usadas para la parte del backend
### `NodeJs` `Express` `Mongo BD`

## BACKEND
El backend de esta aplicación se encarga de gestionar las bases de datos contruidas en mongo db y crear los endopoints necesarios para consumir desde el front y hacer un crud con sus funciones básicas

Todo fue construido desde cero y no recibe datos de ningpun otro servicio o API

## Instalación y scripts disponibles
- Forkear el respositorio y clonar en local
- Entrar en la carpeta api `cd api`
- Crear un base de datos local en Mongo DB
- En el repositorio local, crear dentro de la carpeta api, el archivo `.env` con los datos requeridos por Mongo para la conexión.
- Tener en cuenta los siguientes datos para conectar con `db.js` en la carpeta `src`: 
  - Puerto
  - Nombre de usuario de la base datos
  - Contraseña
  - Host
  - Nombre de la base de datos
  - Puerto
- Los modelos ya están configurados por defecto, pero se puede echar un vistazo en la carpeta `models` y realizar los cambios que considere convenientes
- Las rutas y peticiones ya están configuradas en la carpeta `routes`, pero se puede echar un vistazo y realizar los cambios que considere convenientes para usted
- Ejecutar el comando `npm start` para iniciar la API y dirigirse en el navegador a `http://localhost:3000/v1` para correr en local

## Deploy
El backend de esta app fue deployada en [Heroku](https://www.heroku.com/home).

## Endpoints de la API 
#### (para usar en local y de acuerdo al puerto configurado):
Todos los productos: `GET` `http://localhost:3001/v1/products` \
Obtener un productos por id: `GET` `http://localhost:3001/v1/products/:id` \
Agregar un producto: `POST` `http://localhost:3001/v1/products/` \
Editar un producto: `PUT` `http://localhost:3001/v1/products/:id` \
Eliminar un producto: `DELETE` `http://localhost:3001/v1/products/:id` \

## FRONTEND
Desarrollo de la parte del Frontend para la aplicación [**Crud Productos**](https://crudproducts-mern.web.app//) deployada en [Firebase](https://firebase.google.com/?hl=es).

El frontend de esta aplicación fue desarrollado en `React.Js` y el manejo de estados con `Redux`, además se usó `Axios` para el consumo de la api.

En esta aplicación se puede ver en primera instancia un listado de todos los productos agregados recientemente, podrá editar esos productos o eliminarlos, también encontrará un botón para agregar un producto nuevo que despliega un formulario con los datos que se necesitan ingresar.

## Instalación y scripts disponibles
- Forkear el respositorio y clonar en local
- Entrar en la carpeta client `cd client`
- Instalar todas las dependencias `npm i`
- En el repositorio local, crear dentro de la carpeta client, el archivo `.env` con los datos de sus endpoint locales descritos más arriba.
- Ejecutar el comando `npm start` para iniciar la app y dirigirse en el navegador a `http://localhost:3000/` para correr en local

Siéntase libre de explorar este proyecto o mejorarlo.

## Deploy

En el siguiente enlace podrá ver el resultado de la aplicación deployada [Crud-Products](https://crudproducts-mern.web.app/)
