import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { SeparadorComponent } from "./componentes/separador/separador.component";
import { ContatoComponent } from './componentes/contato/contato.component';
import agenda from '../app/agenda.json'
import { FormsModule } from '@angular/forms';

interface Contato {
  id: number
  nome: string
  telefone: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvxyz'
  contatos: Contato[] = agenda

  filtroPorTexto: string = ''

  filtrarContatoPorTexto(): Contato[] {
    if (!this.filtroPorTexto) {
      return this.contatos
    }
    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase())
    })
  }

  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.filtrarContatoPorTexto().filter(contato => {
      return contato.nome.toLowerCase().startsWith(letra)
    })
  }
}
