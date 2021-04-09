import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CadastroAlunosComponent } from './cadastro-alunos/cadastro-alunos.component';
import { MaterialModule } from '../../shared/material/material.module';
import { CamposModule } from '../../shared/components/campos/campos.module';
import { ListagemAlunosComponent } from './listagem-alunos/listagem-alunos.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        CamposModule,
    ],
    declarations: [CadastroAlunosComponent, ListagemAlunosComponent]
})
export class AlunosModule { }
