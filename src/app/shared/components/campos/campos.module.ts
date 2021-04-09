import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputDateComponent } from './input-date/input-date.component';
import { InputSelectComponent } from './input-select/input-select.component';

@NgModule({
  declarations: [InputTextComponent, InputDateComponent, InputSelectComponent],
  imports: [
    CommonModule, MaterialModule, ReactiveFormsModule, FormsModule
  ],
  exports: [InputTextComponent, InputDateComponent, InputSelectComponent]
})
export class CamposModule { }
