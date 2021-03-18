# mercado-libre-challenge

## Quick start

1.  Asegurarse de tener instalada una version de Node.js igual o superio a 10.13
2.  Clonar el repositorio `git clone https://github.com/srodriguez20/mercado-libre-challenge`
3.  Iniciar los servicios de Back End. Desde la carpeta `cd backend-api`. Instalar las dependecias `npm i` y ejecutar la aplicacio `npm run start`
4.  Iniciar la aplicacion web. Desde la carpeta `cd server-side-front-end`. Instalar las dependecias `npm i`, construir la aplicacio `npm run build` y servir la aplicacion `npm run start`

## Decisiones tecnológicas

### Front End

Para el desarrollo de Front End se decidió utilizar el framework Next JS debido a que facilita la creación de aplicaciones server-side-render utilizando como base React JS. Se escogió esta tecnología principalmente porque ofrece un mejor performance y SEO al estar renderizando el HTML de la aplicación desde el servidor. Adicionalmente, se utilizó SASS como preprocesador de CSS para separar la declaración de estilos en archivos independientes por cada componente. También aprovechando las ventajas que ofrece como el uso de variables, mixins y composición de estilos orientando la definición de clases a la metodología BEM.
La velocidad de renderizado en este caso depende de la capacidad de procesamiento del servidor lo que mejora los tiempos de carga en algunos casos. De este modo, también se podrían crear varias instancias de la aplicación según el crecimiento de las peticiones.

### Back End

Para el Back End se utilizó Node JS junto Express lo que facilito la creación del api y las rutas de los diferentes endpoints.

### SEO

Al renderizar la aplicación desde el servidor, se obtiene como ventaja que los motores de búsqueda encontraran un HTML semánticamente estructurado con contenido, en este caso con los productos buscados. Adicionalmente, la URL del detalle de un producto puede incluir el título de este mismo. Todas las paginas tienen un titulo descriptivo y se puede acceder directamente por su URL.
