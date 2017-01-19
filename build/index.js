System.register("index", ["angular2/core", "angular2/platform/browser", "workspace"], function($__export) {
  "use strict";
  var Component,
      View,
      bootstrap,
      Workspace,
      Main;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }, function($__m) {
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      Workspace = $__m.Workspace;
    }],
    execute: function() {
      Main = function() {
        function Main() {}
        return ($traceurRuntime.createClass)(Main, {}, {});
      }();
      Object.defineProperty(Main, "annotations", {get: function() {
          return [new Component({selector: 'main'}), new View({
            directives: [Workspace],
            template: "\n    <workspace></workspace>\n  "
          })];
        }});
      bootstrap(Main);
    }
  };
});
