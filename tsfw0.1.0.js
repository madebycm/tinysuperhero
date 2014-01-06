(function(_tsh_){
/**
 * TinySuperhero Framework
 * (c) madebycm 2013-2014
 *
 * License: MIT
 * http://en.wikipedia.org/wiki/MIT_License
 */
'use strict';
console.log("TinySuperheroFWv0.1.0");
var App = {
  _$bindEvents: function(){
    var self = this;
    this.actions.forEach(function(acs){
      acs = acs.split(' ');
      // do not bubble-bind root elements
      if(acs[3]&&acs[3]=='[delegate]'){
        document.querySelector('body').addEventListener(acs[0], function(e){
         self._$eventBubbling(e, acs[1], acs[2]);
        });
      }
      else {
        var find = document.querySelector(acs[1]);
        if(!find){
          throw new Error(acs[1] + " could not be found, try delegating it.");
        }
        find.addEventListener(acs[0], function(e){
          if(!self.functions[acs[2]])
            throw new Error("Function " + acs[2] + " not found");
          self.functions[acs[2]].call(self, e);
        });
      }
    });
  },
  _$eventBubbling: function(e,target,runFunction){  
    var targetVal = target.split(/#|\./),
        targetVal = targetVal[1];
    // determine if target is #id or .class
    switch(target.charAt(0)){
      case "#":
        var searchPoint = "id";
      break;
      case ".":
        var searchPoint = "className";
      break;
    }
    // properties = array
    var properties = e.target[searchPoint].split(' ');
    if(properties.indexOf(targetVal) != -1){
      this.functions[runFunction].apply(this, [e]); // fire!
      return; // done
    }
    else return;
  },
  run: function(props){
    if(!props.actions)
      throw "Missing action definitions";
    if(!props.functions)
      throw "Missing function definitions";

    this.actions = props.actions;
    this.functions = props.functions;

    this._$bindEvents();
  }
};
_tsh_.TinySuperhero=App;
return App;
})(this);
