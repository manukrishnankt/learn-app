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
    canActivate: [AuthGuardService], // To Implement Role Based Authorization.
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
  {
    path: 'attr-directive',
    loadChildren: () =>
      import('src/app/home').then(m => m.AttrDirectiveModule),
    data: { icon: 'fas fa-home fa-fw m-r-10 ', text: 'Attribute Directive' }
  },
  {
    path: 'dynamic-component',
    loadChildren: () =>
      import('src/app/home').then(m => m.DynamicComponentModule),
    data: { icon: 'fas fa-home fa-fw m-r-10 ', text: 'Dynamic Component' }
  },
  {
    path: 'wijmo-footer',
    loadChildren: () =>
      import('src/app/home').then(m => m.WijmoFooterModule),
    data: { icon: 'fas fa-home fa-fw m-r-10 ', text: 'Wijmo Footer' }
  },
  {
    path: 'flex-layout',
    loadChildren: () =>
      import('src/app/home').then(m => m.FlexLayoutModule),
    data: { icon: 'fas fa-home fa-fw m-r-10 ', text: 'Flex Layout' }
  },
  {
    path: 'dynamic-callback',
    loadChildren: () =>
      import('src/app/home').then(m => m.DynamicCallbackModule),
    data: { icon: 'fas fa-home fa-fw m-r-10 ', text: 'Dynamic Callback' }
  },
  {
    path: 'mat-icon-registry',
    loadChildren: () =>
      import('src/app/home').then(m => m.MatIconRegModule),
    data: { icon: 'fas fa-home fa-fw m-r-10 ', text: 'Mat Icon Registry' }
  },
];
