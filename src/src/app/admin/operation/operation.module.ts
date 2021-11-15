import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';
import { OperationComponent } from './operation/operation.component';
import { ProductionComponent } from './production/production.component';
import { BreakdownComponent } from './breakdown/breakdown.component';


@NgModule({
  declarations: [
    OperationComponent,
    ProductionComponent,
    BreakdownComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule
  ]
})
export class OperationModule { }
