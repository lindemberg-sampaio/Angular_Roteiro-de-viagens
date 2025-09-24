import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Layout "container"
    children: [
      {
        path: 'categorias',
        loadChildren: () => import('../categorias/categorias.module').then(m => m.CategoriasModule),
        pathMatch: 'full',
        data: { titulo: 'Categorias', subTitulo: 'Cadastro de novas categorias' }
      },
      {
        path: 'lugares',
        loadChildren: () => import('../lugares/lugares.module').then(m => m.LugaresModule),
        pathMatch: 'full',
        data: { titulo: 'Lugares', subTitulo: 'Cadastro de novos lugares' }
      },
      {
        path: 'galeria',
        loadChildren: () => import('../galeria/galeria.module').then(m => m.GaleriaModule),
        pathMatch: 'full',
        data: { titulo: 'Galeria', subTitulo: 'Lista de lugares para explorar' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
