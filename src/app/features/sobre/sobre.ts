import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css'
})
export class SobreComponent {
  email = 'alerrandro.h.santos@aluno.senai.br';
  githubUrl = 'https://github.com/alerrandrohenrique';
  githubTexto = 'GitHub';
  linkedinUrl = 'https://www.linkedin.com/in/alerrandro-queiroz-b617b23b5/';
  linkedinTexto = 'LinkedIn';
}