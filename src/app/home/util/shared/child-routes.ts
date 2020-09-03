
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
  ];
  