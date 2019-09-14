import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SostenibilidadRoutingModule } from './sostenibilidad.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SostenibilidadComponent } from './sostenibilidad.component';

@NgModule({
  declarations: [SostenibilidadComponent],
  imports: [
    CommonModule,
    SostenibilidadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SostenibilidadModule { }
