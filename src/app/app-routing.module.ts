import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClearbookingComponent } from './clearbooking/clearbooking.component';
import { ClientsComponent } from './clients/clients.component';
import { CrmComponent } from './crm/crm.component';
import { DriverComponent } from './driver/driver.component';
import { FinanceComponent } from './finance/finance.component';
import { NewbookingsComponent } from './newbookings/newbookings.component';
import { PagedetailsComponent } from './pagedetails/pagedetails.component';
import { SummaryComponent } from './summary/summary.component';
import { TflComponent } from './tfl/tfl.component';

const routes: Routes = [
  { path:'',component:SummaryComponent },
  { path:'clearedbooking',component:ClearbookingComponent },
  { path:'clients',component:ClientsComponent },
  { path:'drivers',component:DriverComponent },
  { path:'crm',component:CrmComponent },
  { path:'finance',component:FinanceComponent },
  { path:'tfl',component:TflComponent },
  { path:'newbookings',component:NewbookingsComponent },
  { path:'pagedetails',component:PagedetailsComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
