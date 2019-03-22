import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  pet: any = {
    name: '',
    type: '',
    description: '',
    skills: []
  }
  errors: any = {
    name: '',
    type: '',
    description: ''
  }
  url_id:string;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.url_id = params['id'];
      this._httpService.getTaskById(this.url_id)
        .subscribe(data => {
          this.pet = data;
        })
    });
  }
  editPet() {
    this.pet.type = this.pet.type.toLowerCase();
    this._httpService.updateTask(this.url_id,this.pet)
      .subscribe(data => {
        console.log("i am here", data);
        console.log("date[errors]", data['errors'])
        if (data['errors']) {
          console.log("get err")
          this.errors = data['errors'];
        }
        else {
          this._router.navigate(['/pets']);
        }
      })
  }

  backToHome() {
    this._router.navigate(['/pets']);
  }
}
