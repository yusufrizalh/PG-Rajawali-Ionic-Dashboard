import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', loadChildren: './home/home.module#HomePageModule' },
//   { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
//   { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
//   { path: 'first-with-tabs', loadChildren: './pages/first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule' },
//   { path: 'second', loadChildren: './pages/second/second.module#SecondPageModule' },
//   { path: 'firebasepage', loadChildren: './pages/firebasepage/firebasepage.module#FirebasepagePageModule' },
//   { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' },
//   { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule' },
//   { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule' },
// ];

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
