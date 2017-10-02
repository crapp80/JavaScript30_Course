# Playing with CSS and JS Variables  

## Things to remember  

```css  
    :root {  
        --base: #ffc600; /* create Variable in CSS using --Name and assign any value */  
        --spacing: 10px; /* initial value */  
        --blur: 10px; /* initial value */  
      }  

    img {  
      padding: var(--spacing); /* Variable inserted for padding */   
      filter: blur(var(--blur));  
      background: var(--base);  
    }  
```  

You can see it in action here: [https://crapp80.github.io/JavaScript30_Course/CSS_JS_Variables/](https://crapp80.github.io/JavaScript30_Course/CSS_JS_Variables/)
