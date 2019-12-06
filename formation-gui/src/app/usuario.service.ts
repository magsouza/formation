import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Usuario } from '../../../formation-common/usuario';

@Injectable()
export class UsuarioService {

    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private taURL = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    criar(usuario: Usuario): Observable<Usuario> {
        return this.http.post<any>(this.taURL + "/usuario", usuario, { headers: this.headers })
            .pipe(
                retry(2),
                map(res => { if (res.success) { return usuario; } else { return null; } })
            );
    }

    atualizar(usuario: Usuario): Observable<Usuario> {
        return this.http.put<any>(this.taURL + "/usuario", JSON.stringify(usuario), { headers: this.headers }).pipe(
            retry(2),
            map(res => { if (res.success) { return usuario; } else { return null; } })
        );
    }

    getUsuarios(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.taURL + "/usuarios")
            .pipe(
                retry(2)
            );
    }

}