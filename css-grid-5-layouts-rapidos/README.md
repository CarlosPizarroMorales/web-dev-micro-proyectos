--MICROPROYECTO--
# '5 layouts con CSS Grid en 17 minutos'

Este proyecto es un tutorial muy entretenido. Está organizado por su autor como 5 "tareas" muy básicas de layout, algunas que las encontramos cotidianamente, implementadas a través de CSS Grid. El autor entrega un código base más una maqueta de Figma, además de un video en Youtube. El código base incluye 6 archivos html y una hoja de css con los estilos comunes y luego las reglas que crean el layout de cada tarea. La tarea 3 está implementada dos veces para mostrar el uso de grid con columnas/filas y con áreas.   

Algo interesante es que varios de los layouts presentados, tienen un ejemplo de aplicación práctica en otros tutoriales de Youtube del mismo autor.   

<hr>

Las propiedades de CSS Grid revisadas son:

```css
/* CONTAINER */
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: auto 1fr auto; /* ver detalles sobre 'auto', super útil */
gap: 24px;
column-gap: 12px;
grid-template-areas:
  'header'
  'nav'
  'main'
  'sidebar'
  'ads'
  'footer'; /* una sola columna */
grid-template-areas:
  'header header header header'
  'sidebar nav  nav ads'
  'sidebar main main ads'
  'footer footer footer footer'; /* multi columnas */

/* ITEMS */
grid-row: 3; /* variante 2 / 4 | 2 / span 2 */
grid-column-start: 2;
grid-column-end: 6; /* variante span 4 */
grid-column: 2 / span 4; /* shorthand preferido de ...-start ...-end */
grid-area: header; /* asigna uno o varios espacios de grid-template-areas */

/* MENCIÓN ESPECIAL AL USO DE LAS PROPIEDADES auto-fill y auto-fit con minmax */
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
```

## Recursos y referencias
- [Tutorial completo en FreecodeCamp][3]
- [Maquetas en Figma][0]
- [Código base en Github][1]
- [Video en Youtube][2]
- para clonar el repo -> `gh repo clone devchallenges/CSSGrid-Tutorial`


El estilo base simplemente consiste en un par de `background-color`'s, `border`, `border-radius` y `box-shadow`. Ha establecido un `body { max-width: 1000px; }` centrado con `margin` para los layouts.

<hr>

## Tarea 1

Es simplemente un layout responsive tipo *pancake* de 3 elementos. Su única regla es:

```css
.task-1.container {
  display: grid;
  height: 100vh;

  grid-template-rows: auto 1fr auto;
}
```
Se observa la definición del alto máximo de la vista como una regla de uso básico al crear layouts. Además en la definición de las filas (es un layout de 1 sola columna) la propiedad `auto` hace que los elementos se ajusten al alto de su contenido para dejar que `1fr` -la fila central- ocupe todo el espacio disponible. El layout final es de ancho *responsive*: 

![captura tarea 1][4]

<hr>

## Tarea 2

Es un layout simple como para un logo + login, basado en 12 columnas. El código es:

```css
.task-2.container {
  display: grid;
  height: 100vh;

  grid-template-rows: repeat(12, 1fr);
  column-gap: 12px;
  align-items: center;
}

.task-2 .item-2 {
  grid-column: 6 / span 6;
}
```

Este layout no tiene `media-queries` y no se diseño de forma *responsive*. Su finalidad es mostrar el uso de `gap` para dar espacio entre los elemntos, y de `grid-column` para definir el ancho de un elemento que hace que el otro ocupe el disponible.

![captura tarea 1][5]

<hr>

## Tarea 3 parte 1

Es un layout muy típico de tipo *responsive* con 3 vistas: móvil, de tablet y de escritorio. La estructura general está organizada en 6 elementos: header, nav, main, sidebar, ads y footer. En la parte 1 se realiza con columnas y filas. El código base para la versión móvil solo consiste en 1x6 columna/filas de alto automático al contenido excepto `main` que ocupa todo el alto disponible más un `gap` de 24px:

```css
.task-3-1.container {
  display: grid;
  height: 100vh;

  grid-template-rows: auto auto 1fr auto auto auto;
  gap: 24px;
}
```
  ![captura tarea 1][6]  

Luego, en la medias queries para el container de tamaño tablet, se crean 12 columnas y se reorganizan las filas. En la versión de escritorio se mantiene el esquema de 12x4, y solo se hacen cambios en los items (mirar imágenes):
```css
/* TABLET */
@media (min-width: 720px) {
  .task-3-1.container {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto auto 1fr auto;

    /* mirar reglas para items en la imagen más abajo */
}
```

![captura tarea 1][7]
![captura tarea 1][8]

<hr>

## Tarea 3 parte 2

El cambio más importante es que el autor realiza el mismo layout pero esta vez con el uso de la propiedad `grid-template-areas` para organizar el mismo layout 1x6. Es interesante que este puede utilizar strings para organizar las 'filas' del layout, y luego simplemente es necesario asignarle a cada elemento la string correcta del template. El resultado a vista del inspector es exactamente el mismo:

```css
.task-3-1.container {
  display: grid;
  height: 100vh;

  gap: 24px;

  grid-template-rows: auto auto 1fr auto auto auto;
  
  grid-template-areas: 
  'header'
  'nav'
  'main'
  'sidebar'
  'ads'
  'footer';
}

.task-3-2 .header     { grid-area: header; }
.task-3-2 .navigation { grid-area: nav; }
.task-3-2 .ads        { grid-area: ads; }
.task-3-2 .sidebar    { grid-area: sidebar; }
.task-3-2 .main       { grid-area: main; }
.task-3-2 .footer     { grid-area: footer; }
```

![captura tarea 1][6]  
  
Luego, en la medias queries pasa al revés. Las zonas de cada item mantienen su 'string' por lo que solo es necesario ajustar los grid-templates-areas y las cantidad de filas para obtener el resultado deseado. El autor indica que intencionalmente ha hecho que los resultados no sean iguales para hacer más simple el layout (en el de columnas es de 12 columnas, pero acá utiliza 4 columnas-areas por lo que la vista generada no es igual. Lo he dejado así porque repararlo es tan simple como agregar un par de palabras a las strings que forman el template pero no se gana nada):

```css
/* TABLET */
@media (min-width: 720px) {
  .task-3-2.container {
    grid-template-areas:
      'header header header'
      'nav nav  nav'
      'sidebar main main'
      'ads footer footer';

    grid-template-rows: auto auto 1fr auto;
  }
}
```

![captura tarea 3-2 tablet][9]

```css
/* ESCRITORIO */
@media (min-width: 1020px) {
  .task-3-2.container {
    grid-template-areas:
      'header header header header'
      'sidebar nav nav ads'
      'sidebar main main ads'
      'footer footer footer footer';

      grid-template-rows: auto auto 1fr auto;
  }
}
```

![captura tarea 3-2 escritorio][10]

<hr>

## Tarea 4

Este pequeño layout tiene muchas utilidades en espacios donde se crean nubes de etiquetas y otros similares. Su mayor gracia reside en el uso de las propiedades `auto-fit/fill` y `minmax`. La primera hace que los elementos se ajusten al espacio disponible ocupándolo todo, mientras que el segundo valor `fill` hace que los elementos se ajusten a su contenido. En tanto `minmax` es simplemente una función que toma dos valores, donde el primero es el mínimo y el segundo el máximo valor posible. Con la regla siguiente se indica que se creen tantas columnas como sean necesarias para llenar el ancho de la vista, de tal manera que esas columnas nunca ocupen menos de 150px y su máximo sea la fracción completa. (el aspecto final depende también de la propiedad `auto-fill/fit`):

```css
.task-4.container {
  display: grid;
  gap: 24px;

  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}

.task-4 .item-5 {
  grid-column-end: span 2; /* solo para juguetear con los elementos */
}
```

Algunas capturas: 

![captura tarea 4 movil][13]
![captura tarea 4 tablet][12]

En esta vista, el elemento 5 no alcanza a ocupar el espacio al final porque `<body>` tiene definido un `max-width: 1000px`, pero sin esta restricción el layout se organizaría dinámicamente en 1 ó más filas:

![captura tarea 4 escritorio][11]

<hr>

## Tarea 5

Es un ejercicio simple no-responsive, y el que menos utilidad práctica tiene. Quizá lo más interesante de este es demostrar las posibilidades creativas que otorga CSS Grid. Es una grilla de 12x12, en la que 4 elementos se han posicionado libremente. En la imagen bajo el siguiente snippet de código se pueden apreciar las reglas aplicadas a cada ítem: 

```css
.task-5.container {
  display: grid;
  height: 100vh;

  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
}
```

![captura tarea 5][14]

[14]:./img/tarea5.png
[13]:./img/tarea4-3.png
[12]:./img/tarea4-2.png
[11]:./img/tarea4-1.png
[10]:./img/tarea3-2-escritorio.png
[9]:./img/tarea3-2-tablet.png
[8]:./img/tarea3-1-escritorio.png
[7]:./img/tarea3-1-tablet.png
[6]:./img/tarea3-1-movil.png
[5]:./img/tarea2.png
[4]:./img/tarea1.png
[3]:https://www.freecodecamp.org/news/learn-css-grid-by-building-5-layouts/
[2]:https://youtu.be/CC2HkBZuReY
[1]:https://github.com/devchallenges/CSSGrid-Tutorial
[0]:https://www.figma.com/proto/gPibJxL1JLvL3qKOwQfxok/CSS-Grid?node-id=1%3A2&viewport=551%2C-133%2C1.2567064762115479&scaling=min-zoom