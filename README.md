# Tiny Superhero Framework

This is a small no-dependency framework to abstract away DOM events.

Example usage:

```
actions: [
    'click header toggleMenu'
],
functions: {
    toggleMenu: function(){
        document.querySelector('#menu').classList.toggle('menu');
    }
}
```
When you click on ```<header>```the function ```toggleMenu``` will fire.

It is possible to make events bubble by supplying ```[delegate]``` as the last parameter when declaring actions.

```
actions: [
    'click #someElementThatDoesNotYetExist doSomething [delegate]'
]
````