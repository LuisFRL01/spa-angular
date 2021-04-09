import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosModule } from './core/alunos/alunos.module';
import { CadastroAlunosComponent } from './core/alunos/cadastro-alunos/cadastro-alunos.component';
import { ListagemAlunosComponent } from './core/alunos/listagem-alunos/listagem-alunos.component';
import { Error404Component } from './core/components/error404/error404.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'alunos',
        pathMatch: 'full'
    },
    {
        path: 'alunos',
        children: [
            {
                path: '',
                component: ListagemAlunosComponent
            },
            {
                path: 'cadastro',
                children: [
                    {
                        path: '',
                        component: CadastroAlunosComponent
                    },
                    {
                        path: ':id',
                        component: CadastroAlunosComponent,
                        pathMatch: 'full'
                    }
                ]
            }
        ]
    },
    { path: '**', component: Error404Component }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        AlunosModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
