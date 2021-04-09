import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from 'src/app/shared/models/aluno';

const url = 'http://localhost:3000/alunos/';

@Injectable({
    providedIn: 'root'
})
export class AlunosService {

    constructor(private http: HttpClient) { }

    salvar(aluno: Aluno): Observable<Aluno> {
        return this.http.post<Aluno>(url, aluno);
    }

    listar(): Observable<Aluno[]> {
        return this.http.get<Aluno[]>(url);
    }

    editar(aluno: Aluno): Observable<Aluno> {
        return this.http.put<Aluno>(url + aluno.id, aluno);
    }

    visualizar(id: number): Observable<Aluno> {
        return this.http.get<Aluno>(url + id);
    }

    excluir(id: number): Observable<void> {
        return this.http.delete<void>(url + id);
    }
}
