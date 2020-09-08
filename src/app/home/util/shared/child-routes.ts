import { Routes, CanActivate } from '@angular/router';
import { AuthGuardService } from 'src/app/service/auth-guard.service';
export const childRoutes = [
    {
      path: 'dashboard',
      loadChildren: () => import('src/app/home').then(m => m.DashboardModule),
      data: { icon: 'fas fa-home fa-fw m-r-10 ', text: 'Dashboard' }
    },
    {
        path: 'wijmo',
        loadChildren: () =>
          import('src/app/home').then(m => m.WijmoLearnModule),
        data: { icon: 'fas fa-home fa-fw m-r-10 ', text: 'Wijmo' }
    },
    {
      path: 'authguard',
      canActivate: [AuthGuardService] , //To Implement Role Based Authorization.
      loadChildren: () =>
        import('src/app/home').then(m => m.AuthGuardModule),
      data: { icon: 'fas fa-home fa-fw m-r-10 ', text: 'Auth Guard' }
    },
    {
      path: 'forms',
      loadChildren: () =>
        import('src/app/home').then(m => m.FormsExModule),
      data: { icon: 'fas fa-home fa-fw m-r-10 ', text: 'Forms' }
    },
    {
      path: 'material',
      loadChildren: () =>
        import('src/app/home').then(m => m.MaterialExModule),
      data: { icon: 'fas fa-home fa-fw m-r-10 ', text: 'Material' }
    },
    {
      path: 'adv-search',
      loadChildren: () =>
        import('src/app/home').then(m => m.AdvancedSearchModule),
      data: { icon: 'fas fa-home fa-fw m-r-10 ', text: 'Advanced Search' }
    },
  ];