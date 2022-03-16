# Tienda de Smartphones
## Proyecto basado en React

[![N|Solid](https://madewithreactjs.com/images/powered-madewithreactjs--white.png?1)](https://nodesource.com/products/nsolid)


Tienda de Smartphones es un ecommerce de smartphones,
utilizando React para el front y Firebase para el backend.

## Scripts disponibles

### `npm start` 
Script utilizado para inicializar el proyecto

### Recorrido feliz del proceso de compra

- 1: Navegar por los productos desde el Home o desde las categorías clickeando el NavBar
- 2: Entrar al detalle del producto y seleccionar la cantidad deseada
- 3: Una vez agregado el/los producto/s, clickear en "Ir al carrito" dentro del detalle del producto o clickear el logo de Carrito en el NavBar
- 4: Clickear el botón de "Confirmar compra" para dirigirse al formulario donde se ingresarán los datos del comprador
- 5: Acceder al link de wa.me para confirmar la compra por WhatsApp con el vendedor

Ejemplo de recorrido en GIF:

[![N|Solid](https://media.giphy.com/media/OWohtIv6hKpguvJpcx/giphy.gif)](https://nodesource.com/products/nsolid)
## Tecnologías utilizadas


- ReactJs 
- MUI - Material UI
- NPM
- react-router-dom
- Firebase - Firestore


## Instalación y uso

Para instalar todas las dependencias deberás utilizar el comando "npm install"
Luego, deberás configurar tus credenciales de Firebase en el archivo "src\services\firebase\firebaseConfig.js"
Deberás crear la colección "items" con sus ítems adentro. Los campos principales son:
| Campo | Ttipo de campo
| ----- | -----
| brand | string
| ram | number
| img | string (url de la imagen)
| name | string
| price | number
|stock | number

El resto de campos son opcionales.

También deberás crear la colección "orders" para que se guarden tus órdenes.

## Rutas y renderizado de componentes por ruta


| Ruta | Componente | Parámetros? 
| ------ | ------ | ------ |
| / | ItemListContainer | No
| /category | ItemListContainer | Sí, se envía un categoryName que es el campo "brand" de los item
| /detail | ItemDetailContainer | Sí, se envía el id del ítem a detallar
| /cart | CartList | No
| Checkout | CheckoutForm | No
| Siempre se muestra | NavBar | No

