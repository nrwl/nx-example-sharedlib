import {NgModule, Component} from '@angular/core';

@Component({
  selector: 'shared',
  template: 'SHARED'
})
export class SharedComponent {}

@NgModule({
  declarations: [SharedComponent],
  exports: [SharedComponent]
})
export class SharedlibModule {
}