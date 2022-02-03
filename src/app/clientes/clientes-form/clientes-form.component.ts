import { ClientesService } from './../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {
  cliente?: Cliente;
  public form?: FormGroup;
  constructor(private formBuilder: FormBuilder,
    public service: ClientesService) {
      this.cliente = new Cliente();
    }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required])
    })

  }


  salvar() {
    this.service.salvar(this.cliente).subscribe(resp => {
      console.log(resp);

    })
  }
}
