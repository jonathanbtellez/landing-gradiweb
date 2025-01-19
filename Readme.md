

## **Instructiones para levantar el proyecto**

### **Instalar Dependencias**

```bash
npm install
```

### **Correr el servidor**

```bash
npm start
```

### **Crear estilos y scripts**

```bash
npm run build
```

---

## **Notas Adicionales**

Para la solucion de esta pruba tecnica se usaron diferentes enfoques que permitieron llegar al resultado presentado 

### Estilos

Los estilos se encuentran el la carpeta assets/sass la cual esta dividida en diferente folder que separan modularmente los estilos de la landing

#### Components

Los archivos aqui se encargan de manejar los estilos usados para las secciones

####  Config 

En este folder se encuentran funciones variables y el archivo base que se encarga de hacer un pequeño reset de los estilos del navegador

#### Shared

En este folder se encuentra los archivos de estilos que se comparten entre otro componentes o son globales

### Dinamismo 

Para evitar la duplicidad de codigo se uso en vario casoss funciones o sintaxis de liquid.

Se creo un archivo en la carpeta assets/js un archivo index.js el cual controla el evento "click" para dar la funcionalidad del menu mobile


### Mejoras

* Para el desarrollo aunque se uso la metodologia BEM para orientar el desarollo, se puede mejorar los estilos aplicados evitando redundancias y duplicidad

* Creacion de snippets para evidar la duplicidad de codigo html, se evidencio que los componentes con efecto marquee tienen la misma estructura por lo cual es señal de que se puede mejorar el codigo implemtado para esto

* Añadir seccion productos





