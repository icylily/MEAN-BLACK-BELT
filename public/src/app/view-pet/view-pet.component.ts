import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { parseTemplate } from '@angular/compiler';
declare var $: any;
@Component({
  selector: 'app-view-pet',
  templateUrl: './view-pet.component.html',
  styleUrls: ['./view-pet.component.css']
})
export class ViewPetComponent implements OnInit {

  url_id: string;
  pet: any = {
    name: '',
    type: '',
    description: '',
    skills: [],
    likes:''
  }
  showbutton:any;
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
    this.showbutton = true;
  }
  likepet(likes:number){
    // console.log("click likepet");
    this.pet.likes = likes+1;
    // console.log("this pet is ", this.pet);
    this._httpService.updateTask(this.url_id,this.pet)
    .subscribe(data=>{
      this.showbutton = false;

    })
    
  }

  adoptpet(){
    this._httpService.deleteTask(this.url_id)
      .subscribe(data => {
        // console.log('delete a task' + data);
      })
    this._router.navigate(['/pets']);

  }
}
