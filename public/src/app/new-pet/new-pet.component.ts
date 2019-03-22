import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {
  newPet: any = {
    name: '',
    type:'',
    description:'',
    skills:[]
  }
  errors: any = {
    name: '',
    type:'',
    description:''
  }
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }

  createPet() {
    this.newPet.type = this.newPet.type.toLowerCase();
    this._httpService.createTask(this.newPet)
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

  backToHome(){
    this._router.navigate(['/pets']);
  }

}
