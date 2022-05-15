--MICROPROYECTO--
# 5 layouts con CSS Grid en 17 minutos

Este proyecto es un tutorial muy entretenido. Está organizado por su autor como 5 "tareas" muy básicas de layout que encontramos cotidianamente, implementadas a través de CSS Grid. El autor entrega un código base más una maqueta de Figma, además de un video en Youtube. El código base incluye 6 archivos html y una hoja de estilos con estilos comunes y luego las reglas que crean el layout de cada tarea. La tarea está implementada dos veces para mostrar el uso de grid con columnas/filas y con áreas.   

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

/* MENCIÓN ESPECIAL AL USO DE LAS PROPIEDADES auto-fill y auto-fit */
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
```

## Recursos y referencias
- [Tutorial completo en FreecodeCamp][3]
- [Maquetas en Figma][0]
- [Código base en Github][1]
- [Video en Youtube][2]

## Notas: 

- Se puede clonar directamente en el directorio local: 
  - `gh repo clone devchallenges/CSSGrid-Tutorial`
- bla bla...


[3]:https://www.freecodecamp.org/news/learn-css-grid-by-building-5-layouts/
[2]:https://youtu.be/CC2HkBZuReY
[1]:https://github.com/devchallenges/CSSGrid-Tutorial
[0]:https://www.figma.com/proto/gPibJxL1JLvL3qKOwQfxok/CSS-Grid?node-id=1%3A2&viewport=551%2C-133%2C1.2567064762115479&scaling=min-zoom