System.register("workspace", ["angular2/core"], function($__export) {
  "use strict";
  var Component,
      View,
      Workspace;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }],
    execute: function() {
      Workspace = function() {
        function Workspace() {
          console.info('Workspace Component Mounted Successfully');
        }
        return ($traceurRuntime.createClass)(Workspace, {}, {});
      }();
      $__export("Workspace", Workspace);
      Object.defineProperty(Workspace, "annotations", {get: function() {
          return [new Component({selector: 'workspace'}), new View({templateUrl: 'workspace.html'})];
        }});
    }
  };
});
