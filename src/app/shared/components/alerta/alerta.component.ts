import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alerta } from '../../models/alerta';

@Component({
    selector: 'spa-alerta',
    templateUrl: './alerta.component.html',
    styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

    alerta = {
        titulo: 'Sucesso!',
        descricao: 'Seu registro foi cadastrado com sucesso!',
        btnFechar: false
    } as Alerta;

    constructor(public dialogRef: MatDialogRef<AlertaComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
        this.alerta.titulo = this.data?.titulo || this.alerta.titulo;
        this.alerta.descricao = this.data?.descricao || this.alerta.descricao;
        this.alerta.btnFechar = this.data?.btnFechar || this.alerta.btnFechar;
    }

}
