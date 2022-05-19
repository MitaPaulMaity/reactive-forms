import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SummaryComponent } from './summary/summary.component';
import { ClearbookingComponent } from './clearbooking/clearbooking.component';
import { ClientsComponent } from './clients/clients.component';
import { DriverComponent } from './driver/driver.component';
import { CrmComponent } from './crm/crm.component';
import { FinanceComponent } from './finance/finance.component';
import { TflComponent } from './tfl/tfl.component';
import { NewbookingsComponent } from './newbookings/newbookings.component';
import { HeaderComponent } from './header/header.component';
import { PagedetailsComponent } from './pagedetails/pagedetails.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SummaryComponent,
    ClearbookingComponent,
    ClientsComponent,
    DriverComponent,
    CrmComponent,
    FinanceComponent,
    TflComponent,
    NewbookingsComponent,
    HeaderComponent,
    PagedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
