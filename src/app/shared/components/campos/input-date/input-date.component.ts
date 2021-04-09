import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidarCamposService } from 'src/app/shared/services/validar-campos.service';

@Component({
    selector: 'spa-input-date',
    templateUrl: './input-date.component.html',
    styleUrls: ['./input-date.component.css']
})
export class InputDateComponent {

    @Input() titulo!: string;
    @Input() formGroup!: FormGroup;
    @Input() controlName!: string;

    constructor(public validacao: ValidarCamposService) { }

    get formControl(): AbstractControl {
        return this.formGroup.controls[this.controlName];
    }
}
