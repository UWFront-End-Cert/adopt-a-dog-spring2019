#Rippleria

A lightweight yet customizable jQuery plugin for implementing Material Design inspired ripple click / tap effects using CSS3 animations.

##[DEMO](http://nsept.github.io/rippleria/)

##Installation

```bash
$ bower i -S rippleria
```

##Usage

1. Load the stylesheet ```jquery.rippleria.css``` in the head section and the JavaScript ```jquery.rippleria.js``` after jQuery library.
    ```html
    <link rel="stylesheet" href="/path/to/jquery.rippleria.css">
    <script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="/path/to/jquery.rippleria.js"></script>
    ```

2. Add the ```data-rippleria``` attribute to the DOM element where you want to implement the ripple click effect.
    ```html
    <button data-rippleria>Default</button>
    ```

3. Customize the ripple click effect using html5 ```data``` attributes.
    ```html
    <button data-rippleria 
      data-rippleria-color="blue" 
      data-rippleria-easing="ease-in" 
      data-rippleria-duration="5000">
      Click me
    </button>
    ```

4. You can also apply the ripple click effect to any block elements and pass in the options via JavaScript.
    ```js
    $('.selector').rippleria({
    
      // aniamtion speed
      duration: 750,
    
      // custom easing effect
      easing: 'linear',
    
      // custom color
      color: undefined
      
      // enable automatically adding .rippleria-dark class to the dark elements (appeared with 1.3)
      detectBrightness: true
    });

    $('.selector').rippleria("changeDuration", "500");
    $('.selector').rippleria("changeEasing", "ease-in-out");
    $('.selector').rippleria("changeColor", "blue");
    ```

##Browsers
Firefox, Chrome, IE10+, Opera, Safari
