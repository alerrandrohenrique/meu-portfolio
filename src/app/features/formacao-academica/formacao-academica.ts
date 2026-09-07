import { Component } from '@angular/core';

@Component({
  selector: 'app-formacao-academica',
  standalone: true,
  imports: [],
  templateUrl: './formacao-academica.html',
  styleUrl: './formacao-academica.css'
})
export class FormacaoAcademica {
  // Curso em andamento
  cursoPrincipal = {
    nome: 'Programador Full Stack',
    instituicao: 'SENAI do Amapá — Macapá',
    status: 'Em andamento'
  };

  // Ensino Fundamental e Médio
  ensinoEscolar = [
    {
      nome: 'Ensino Fundamental I',
      instituicao: 'Escola Pequeno Laranja Lima',
      status: 'Concluído'
    },
    {
      nome: 'Ensino Fundamental II',
      instituicao: 'Escola Benigna (1ª parte) / Escola Reinaldo Dasmaceno (Conclusão)',
      status: 'Concluído'
    },
    {
      nome: 'Ensino Médio',
      instituicao: 'EEPGAC — Escola Estadual Professor Gabriel Almeida Café',
      status: 'Concluído'
    }
  ];

  // Cursos concluídos no SENAI
  cursosSENAI = [
    {
      nome: 'Instalador e Reparador de Redes de Computadores',
      instituicao: 'SENAI do Amapá — Macapá',
      status: 'Concluído'
    },
    {
      nome: 'Montador e Reparador de Computadores',
      instituicao: 'SENAI do Amapá — Macapá',
      status: 'Concluído'
    },
    {
      nome: 'Programação de Microcontroladores para Internet das Coisas',
      instituicao: 'SENAI do Amapá — Macapá',
      status: 'Concluído'
    }
  ];
}
