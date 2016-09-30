import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { AuthGuard, UnauthGuard, AuthService } from '../auth';
// Custom
import { DashboardComponent } from './components/dashboard';
//import { ToolbarComponent } from '../layout/components/toolbar';
//import { SidenavComponent } from '../layout/components/sidenav';
import { TruncatePipe, ToolbarComponent, SidenavComponent } from '../layout';
// Routes
const routes: Routes = [
  {path: 'dashboard', canActivate: [AuthGuard], children:[
    {path: '',  component: DashboardComponent},
    {path: '', component: SidenavComponent, outlet: 'sidenav'},
    {path: '', component: ToolbarComponent, outlet: 'toolbar', data:[{title: 'Dashboard'}]}
  ]}
];

@NgModule({
  declarations: [
    DashboardComponent, 
    ToolbarComponent,
    SidenavComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule.forRoot()
  ],
  providers: [
    AuthGuard,
    UnauthGuard,
    AuthService
  ]
})

export class DashboardModule {}

export { AuthGuard };
export { UnauthGuard };