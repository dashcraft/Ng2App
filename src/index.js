import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Workspace} from 'workspace';

@Component({
  selector: 'main'
})

@View({
  directives: [Workspace],
  template: `
    <workspace></workspace>
  `
})

class Main {

}

bootstrap(Main);
