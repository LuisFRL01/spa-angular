import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';
import { Alerta } from 'src/app/shared/models/alerta';
import { Aluno } from 'src/app/shared/models/aluno';
import { AlunosService } from '../../services/alunos.service';

@Component({
    selector: 'spa-listagem-alunos',
    templateUrl: './listagem-alunos.component.html',
    styleUrls: ['./listagem-alunos.component.css']
})
export class ListagemAlunosComponent implements OnInit {

    alunos: Aluno[] = [];

    constructor(public dialog: MatDialog,
        private alunoServices: AlunosService,
        private _router: Router) { }

    ngOnInit(): void {

        this.alunoServices.listar().subscribe((alunos: Aluno[]) => {
            this.alunos = alunos;
        });
    }

    editar(id: any): void {
        this._router.navigateByUrl('/alunos/cadastro/' + id);
    }

    excluir(id: any): void {
        const config = {
            data: {
                titulo: 'Você tem certeza que deseja excluir ?',
                descricao: 'Caso você tenha certeza que deseja excluir, clique no botão ok.',
                btnFechar: true
            } as Alerta
        };

        const dialogRef = this.dialog.open(AlertaComponent, config);
        dialogRef.afterClosed().subscribe((opcao: boolean) => {
            if (opcao) {
                this.alunoServices.excluir(id).subscribe(() => {
                    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
                    this._router.onSameUrlNavigation = 'reload';
                    this._router.navigate(['/alunos']);
                });
            }
        });
    }
}
