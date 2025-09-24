import { Component, OnInit } from '@angular/core';
import { LayoutPropriedades } from './layoutpropriedades';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'] //originalmente estava no singular. Constei no plurar (chatgpt)
})

export class LayoutComponent implements OnInit {

  propriedades: LayoutPropriedades = { titulo: '', subTitulo: '' };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events
        .pipe(
          filter( () => this.activatedRoute.firstChild !== null ),
          map( () => this.obterPropriedadesDaRota() )
        ).subscribe((propriedades: LayoutPropriedades) => this.propriedades = propriedades);
  }


  obterPropriedadesDaRota(): LayoutPropriedades {
    let rotaFilha = this.activatedRoute.firstChild;

    while (rotaFilha?.firstChild) {
      rotaFilha = rotaFilha.firstChild;
    }

    return rotaFilha?.snapshot.data as LayoutPropriedades;
  }
}
