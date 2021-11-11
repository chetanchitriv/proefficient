import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './admin/data/data/data.component';
import { ManageComponent } from './admin/manage/manage/manage.component';
import { OperationComponent } from './admin/operation/operation/operation.component';
import { ReportComponent } from './admin/report/report/report.component';
import { ScheduleComponent } from './admin/schedule/schedule/schedule.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { ChartboardComponent } from './admin/dashboard/chartboard/chartboard.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'schedule', component: ScheduleComponent },
      { path: 'manage', component: ManageComponent },
      { path: 'operations', component: OperationComponent },
      { path: 'report', component: ReportComponent },
      { path: 'data', component: DataComponent },
      { path: '', component: ChartboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
