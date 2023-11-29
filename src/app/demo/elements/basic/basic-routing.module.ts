import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'alert',
        // component: AlertComponent,
        loadComponent: () => import('../basic/alert/alert.component').then(m => m.AlertComponent)
      },
      {
        path: 'button',
        // component: ButtonComponent,
        loadComponent: () => import('../basic/button/button.component').then(m => m.ButtonComponent)
      },
      {
        path: 'badges',
        // component: BadgesComponent,
        loadComponent: () => import('../basic/badges/badges.component').then(m => m.BadgesComponent)
      },
      {
        path: 'breadcrumb',
        // component: BreadcrumbComponent
        loadComponent: () => import('../basic/breadcrumb/breadcrumb.component').then(m => m.BreadcrumbComponent)
      },
      {
        path: 'pagination',
        // component: PaginationComponent
        loadComponent: () => import('../basic/pagination/pagination.component').then(m => m.PaginationComponent)
      },
      {
        path: 'card',
        // component: CardComponent
        loadComponent: () => import('../basic/card/card.component').then(m => m.CardComponent)
      },
      {
        path: 'collapse',
        // component: CollapseComponent,
        loadComponent: () => import('../basic/collapse/collapse.component').then(m => m.CollapseComponent)
      },
      {
        path: 'accordion',
        // component: AccordionComponent,
        loadComponent: () => import('../basic/accordion/accordion.component').then(m => m.AccordionComponent)
      },
      {
        path: 'carousel',
        // component: CarouselComponent,
        loadComponent: () => import('../basic/carousel/carousel.component').then(m => m.CarouselComponent)
      },
      {
        path: 'dropdown',
        // component: DropdownComponent,
        loadComponent: () => import('../basic/dropdown/dropdown.component').then(m => m.DropdownComponent)
      },
      {
        path: 'offcanvas',
        // component: OffcanvasComponent
        loadComponent: () => import('../basic/offcanvas/offcanvas.component').then(m => m.OffcanvasComponent)
      },
      {
        path: 'progress',
        loadComponent: () => import('../basic/progress/progress.component').then(m => m.ProgressComponent)
      },
      {
        path: 'list-group',
        loadComponent: () => import('../basic/list-group/list-group.component').then(m => m.ListGroupComponent)
      },
      {
        path: 'modal',
        loadComponent: () => import('../basic/modal/modal.component').then(m => m.ModalComponent)
      },
      {
        path: 'spinner',
        loadComponent: () => import('../basic/spinner/spinner.component').then(m => m.SpinnerComponent)
      },
      {
        path: 'tabs-pills',
        loadComponent: () => import('../basic/tabs-pills/tabs-pills.component').then(m => m.TabsPillsComponent)
      },
      {
        path: 'toast',
        loadComponent: () => import('../basic/toast/toast.component').then(m => m.ToastComponent)
      },
      {
        path: 'other',
        loadComponent: () => import('../basic/other/other.component').then(m => m.OtherComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
