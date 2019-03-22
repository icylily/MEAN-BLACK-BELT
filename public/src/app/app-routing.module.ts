import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import component
import { AllPetComponent } from './all-pet/all-pet.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { ViewPetComponent } from './view-pet/view-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
const routes: Routes = [
  { path: '', component: AllPetComponent },
  { path: 'pets', component: AllPetComponent },
  { path: 'pets/new', component: NewPetComponent },
  { path: 'pets/:id', component: ViewPetComponent },
  { path: 'pets/:id/edit', component: EditPetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
