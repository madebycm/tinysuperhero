# TinySuperhero Framework
#### v0.2.0

This is a small no-dependency framework to abstract away DOM events.

## Install with Bower

```bower install TinySuperhero```

## Example usage

The ```TinySuperhero``` object is exposed on the window. Use ```run()``` to set up all required bindings.

```
TinySuperhero.run({
  actions: [
    'click header toggleMenu'
  ],
  functions: {
      toggleMenu: function(){
          document.querySelector('#menu').classList.toggle('menu');
      }
  }
});
```

When you click on ```<header>```the function ```toggleMenu``` will fire.

It is possible to make events bubble by supplying ```[delegate]``` as the last parameter when declaring actions.

```
actions: [
    'click #someElementThatDoesNotYetExist doSomething [delegate]'
]
````