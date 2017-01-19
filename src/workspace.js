import {Component, View} from 'angular2/core';

@Component({
  selector: 'workspace'
})

@View({
  templateUrl: 'workspace.html'
})

export class Workspace {

  constructor() {
    console.info('Workspace Component Mounted Successfully');
  }

}
