import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { IGroup } from '../interfaces/igroup';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  httpClient = inject(HttpClient)
  urlBase = 'http://localhost:3030/api/group'

  getAll(): Promise<IGroup[]> {
    return firstValueFrom(
      this.httpClient.get<IGroup[]>(this.urlBase)
    )
  }

  getById(id:number) {
    return firstValueFrom(
      this.httpClient.get<IGroup>(`${this.urlBase}/${id}`)
    )
  }

  updateById({id, name}:IGroup) {
    return firstValueFrom(
      this.httpClient.patch<any>(`${this.urlBase}/${id}`,{name})
    )
  }
  
  deleteById(id:number) {
    return firstValueFrom(
      this.httpClient.delete<any>(`${this.urlBase}/${id}`)
    )
  }

  insertOne(group:IGroup) {
    // let name = group.name
    return firstValueFrom(
      this.httpClient.post<IGroup>(`${this.urlBase}/register`,group)
    )
  }
}
