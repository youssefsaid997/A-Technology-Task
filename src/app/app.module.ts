import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

//angular generated components
import { AppComponent } from './app.component';
import { CostComponent } from './components/cost/cost.component';
import { CardComponent } from './components/shared/card/card.component';
import { ClientComponent } from './components/client/client.component';
import { BadgeListComponent } from './components/badge-list/badge-list.component';
import { FloatCardComponent } from './components/float-card/float-card.component';
import { ContractComponent } from './pages/contract/contract.component';
import { SliderComponent } from './components/slider/slider.component';

// primeng modules
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { AvatarModule } from 'primeng/avatar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    CostComponent,
    CardComponent,
    ClientComponent,
    BadgeListComponent,
    FloatCardComponent,
    ContractComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    ChipModule,
    CardModule,
    AvatarModule,
    FileUploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
