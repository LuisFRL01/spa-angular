import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';
import { Alerta } from 'src/app/shared/models/alerta';
import { Aluno } from 'src/app/shared/models/aluno';
import { AlunosService } from '../../services/alunos.service';

@Component({
    selector: 'spa-cadastro-alunos',
    templateUrl: './cadastro-alunos.component.html',
    styleUrls: ['./cadastro-alunos.component.css']
})
export class CadastroAlunosComponent implements OnInit {

    id!: number;
    cadastro!: FormGroup;
    cursos!: Array<String>;

    constructor(public dialog: MatDialog,
        private fb: FormBuilder,
        private alunosService: AlunosService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
        this.criarFormulario(this.criarAlunoEmBranco());
    }

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params['id'];
        if (this.id) {
            this.alunosService.visualizar(this.id).subscribe((aluno: Aluno) => this.criarFormulario(aluno))
        } else {
            this.criarFormulario(this.criarAlunoEmBranco());
        }
        this.cursos = ['Curso de Angular', 'Curso de React', 'Curso de C#']
    }

    submit(): void {
        this.cadastro.markAllAsTouched();

        if (this.cadastro.invalid) {
            return;
        }

        const aluno = this.cadastro.getRawValue() as Aluno;
        if (this.id) {
            aluno.id = this.id;
            this.editar(aluno);
        } else {
            this.salvar(aluno);
        }
    }

    reiniciarForm(): void {
        this.cadastro.reset();
    }

    private salvar(aluno: Aluno): void {
        this.alunosService.salvar(aluno).subscribe(() => {
            const dialogRef = this.dialog.open(AlertaComponent);
            dialogRef.afterClosed().subscribe((opcao: boolean) => {
                if (opcao) {
                    this.router.navigateByUrl('alunos');
                }
                this.reiniciarForm();
            });
        },
            () => {
                const config = {
                    data: {
                        titulo: 'Erro ao salvar o registro!',
                        descricao: 'Não conseguimos salvar seu registro, favor tentar novamente mais tarde',
                    } as Alerta
                };

                this.dialog.open(AlertaComponent, config)
            });
    }

    private editar(aluno: Aluno): void {
        this.alunosService.editar(aluno).subscribe(() => {
            const config = {
                data: {
                    descricao: 'Registro atualizado com sucesso.',
                } as Alerta
            };

            const dialogRef = this.dialog.open(AlertaComponent, config);
            dialogRef.afterClosed().subscribe(() => this.router.navigateByUrl('alunos'));
        },
            () => {
                const config = {
                    data: {
                        descricao: 'Erro ao editar registro.',
                    } as Alerta
                };

                this.dialog.open(AlertaComponent, config);
            });
    }

    private criarFormulario(aluno: Aluno): void {
        this.cadastro = this.fb.group({
            nome: [aluno.nome, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
            email: [aluno.email, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
            urlFoto: [aluno.urlFoto, [Validators.required, Validators.minLength(10)]],
            dtNascimento: [aluno.dtNascimento, [Validators.required]],
            curso: [aluno.curso, [Validators.required]]
        });
    }

    private criarAlunoEmBranco(): Aluno {
        return {
            nome: '',
            email: '',
            urlFoto: '',
            dtNascimento: '',
            curso: ''
        } as Aluno;
    }
}
