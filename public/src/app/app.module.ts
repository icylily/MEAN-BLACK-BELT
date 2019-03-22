import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { NewPetComponent } from './new-pet/new-pet.component';
import { ViewPetComponent } from './view-pet/view-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { AllPetComponent } from './all-pet/all-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    NewPetComponent,
    ViewPetComponent,
    EditPetComponent,
    AllPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
