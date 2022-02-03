import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  salvar (cliente?: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8081/api/clientes', cliente);
  }

  getClientes(): Cliente {
    let cliente: Cliente = new Cliente();

    cliente.nome = 'Matheus';
    cliente.cpf = '9999999999';

    return cliente;
  }
}
