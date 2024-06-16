import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/iusuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private authUrl: string = 'http://localhost:3030/api/auth/login';
  private usersUrl: string = 'http://localhost:3030/api/user';


  private httpClient = inject(HttpClient);

   // Nuevos métodos para login y registro usando el mismo endpoint
  login(credentials: { email: string, password: string }): Observable<any> {
    return this.httpClient.post<any>(this.authUrl, credentials);
  }

  register(newUser: Usuario): Observable<any> {
    return this.httpClient.post<any>(this.authUrl, newUser);
  }
    // Nuevo método para actualizar el campo ind_baja
    updateUserIndBaja(id: number, indBaja: boolean): Observable<any> {
      return this.httpClient.patch<any>(`${this.usersUrl}/${id}`, { ind_baja: indBaja });
    }
}
