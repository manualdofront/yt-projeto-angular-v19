import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextModularComponent } from './text-modular/text-modular.component';

@NgModule({
  declarations: [TextModularComponent],
  exports: [TextModularComponent],
  imports: [CommonModule],
})
export class HelloWorldModularModule {}
