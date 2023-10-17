[![npm version](https://img.shields.io/npm/v/admin-lte/latest.svg)](https://www.npmjs.com)
[![material-ui](https://img.shields.io/badge/material--ui-https%3A%2F%2Fmui.com%2F-red)](https://mui.com/)
[![REACT](https://img.shields.io/badge/React-https%3A%2F%2Fes.reactjs.org%2F-blue)](https://es.reactjs.org/)
[![BBIMAGE](https://img.shields.io/badge/POWERED-BB%20IMAGES-lightblue)](https://es.imgbb.com/)
[![VERCEL](https://img.shields.io/badge/POWERED-Vercel-black)](https://vercel.com/)
[![FIREBASE](https://img.shields.io/badge/FIREBASE-DOCS-orange)](https://firebase.google.com/docs)
[![Discord](https://img.shields.io/badge/Discord-join%20now-green)](https://discord.gg/RXYSs4Cs)
[![FACEBOOK](https://img.shields.io/badge/FACEBOOK-JOIN%20COMUNITY-brightgreen)](https://www.facebook.com/todoshobby)
[![WHATSAPP](https://img.shields.io/badge/SOPORTE-whatsapp-green)](https://api.whatsapp.com/send?phone=+5491133299841&text=dejame%20tu%20mensaje%20de%20plantasacuaticas)




# [Plantasacuaticas.com.ar v2.0](https://nicolascaporaso-backend-51380.onrender.com/auth/login)


**plantasacuaticas.com.ar** es la reciente version actualizada del E-comerce, de un proyecto mas ambisioso, no se trata solo de una app de ventas online, sino de un sitio completo sobre plantas acuaticas, donde hay informacion detallada sobre las mismas, junto con guias y cursos para todos los amantes de la acuarofilia. podes visitar el sitio en su version 1.9 en (**https://plantasacuaticas.netlify.app/**). La migracion se realiza de forma modular, hacia el framework [REACT](https://es.reactjs.org/), logrando una programacion basada en componentes, ayudando a crear interfaces de usuario interactivas de forma sencilla. con vistas simples para cada estado en la aplicación, se encarga de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien. Ademas cuenta con la capacidad de instalar librerias y dependecias que extienden las capacidades del software y facilitan el desarrollo evitando la duplicacion de codigo y aprovechando el ya resuelto por otro programador.
La app es mobile first, mantiene los datos del carrito guardado en local storage para que el usuario no pierda los datos y pueda seguir con su compra, (a futuro se va incorporar funcionalidad para avisar por mail para que continue su compra).

**plantasacuaticas.com.ar** incluye el siguiente listado de librerias y dependencias:

        1-  node_modules:  (https://nodejs.org/es/)
                *@adobe/css-tools-"4.0.1"
                *@ampproject/remapping-"2.2.0"
                        Dependencias": @jridgewell/gen-mapping": "0.1.0", @jridgewell/trace-mapping": "0.3.9"
                *@babel/code-frame-"7.18.6"
                *@babel/compat-data-"7.19.4"
                *@babel/core-"7.19.6"
                *@babel/eslint-parser-"7.19.1"
                
                engines: 
                node: "^10.13.0 || ^12.13.0 || >=14.0.0"
                           
        2-  REACT: "18.2.0"     (https://es.reactjs.org/)
                *@emotion/react-11.10.4"
                *@emotion/styled-"11.10.4"
                *@testing-library/jest-dom-"5.16.5"
                *@testing-library/react-"13.4.0"
                *@testing-library/user-event-"13.5.0"
                *@react-router-dom-"6.4.3",
                *@react-scripts-"5.0.1",
                *@react-toastify-"9.1.1",
                *@styled-components-"5.3.6",
                *@web-vitals-"2.1.4"
                
        3-  Material-UI(https://mui.com/)
                *@mui/icons-material": "5.10.9"
                *@mui/material": "5.10.10"
                *@mui/styled-engine-sc": "5.10.6"
                
        4-  Firebase (https://firebase.google.com/docs/guides)
                @firestore-"9.14.0"
                
                
 # Pantalla principal de la App               
!["plantasacuaticas.com.ar Presentacion"](https://i.ibb.co/d6fSCLD/presentacion.png "plantasacuaticas.com.ar")
                
                
                
El sitio fue probado en los siguientes navegadores y tuvo funcionalidad correcta en las versiones actuales al 03/12/2022:

       1- edge
       2- firefox
       3- brave browser
       4- opera

## DESCRIPCION:
                El sitio cuenta con una navbar creada con componentes de material-ui, la misma presenta el logo del sitio con el respectivo nombre y todos los links de navegacion, a los diferentes tipos de plantas, tambien dispone del icono para ir al carrito de compra, mostrando la cantidad de articulos dentro del mismo. (siempre y cuando ya tenga productos, de no haber no desplegara su contenido).
                Una vez que clickeamos sobre algun item, la app nos dirige a una ventana con mayor infomacion, como la descripcion del item en cuestion, y la posibilidad de sumar o restar items, para a posterior agregarlos al carrito de compra. (Informacion que se obtiene de la base de datos de firestore "plantas"), el minimo para  agregar es 1 y el  maximo  sera la cantidad en stock disponible, de superar los  limites  minimos  o  maximos,  se  emitira una  alerta  mediante  toastify (complemento de MUI).
                Repitiendo este procedimiento indefinidamente, iremos agregando items hasta tener el carrito listo para la compra, momento en el que podremos acceder al mismo desde diferentes puntos, (link en navbar o link en "terminar compra" en el ultimo item agregado al carrito).
                Dentro de este podremos visualizar cada item a comprar, cantidades y precios de cada uno, asi como el precio total a pagar. Tambien tendremos un boton para eliminar cada articulo por separado, asi como un boton para vaciar todo el carrito de una sola vez.
                Por ultimo tambien existe el boton "CHECKOUT", que se estara habilitado a menos que se deje vacio el carrito de compras, al hacer click llevara toda la info de la compra a un formulario en el que debemos completar los datos (nombre, telefono, email, el mismo cuenta con validacion sobre sus campos, para evitar que el usuario pueda continuar con datos en blanco. tambien tiene que poner un nombre valido, asi como tambien el telefono y su email, caso contrrio recibira mensaje de error mediante toastify), ademas de eso tendremos un preview de la compra a realizar.
                Cuando clikeamos en pagar (que se habilita al completar el formulario ), saldra una notificacion, mediante toastify con los items de la compra, y totales a pagar, paso siguiente derivara a la pasarela de pago("no requrido para los fines e este curso").

 # LICENCIA  
Plantasacuaticas.com.ar es un proyecto de código abierto Desarrollado por Nicolas-Caporaso, con licencia de CaporasoGroup. 
Plantasacuaticas.com.ar se reserva el derecho de cambiar la licencia de versiones futuras.

## Creditos por las imagenes

- [Toddoshobby](https://www.facebook.com/todoshobby)
- [Graphicsfuel](https://www.graphicsfuel.com/2013/02/13-high-resolution-blur-backgrounds/)
- [Pickaface](https://pickaface.net/)
- [Unsplash](https://unsplash.com/)
- [Uifaces](http://uifaces.com/)

## CONTRIBUCIONES
Si te gusto el proyecto y estas interesado en contribuir podes hacer donaciones en mercadopago.

[![donate](https://img.shields.io/badge/Donate-Mercadopago-white)](https://mpago.la/2345NKC)

