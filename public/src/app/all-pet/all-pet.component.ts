import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-all-pet',
  templateUrl: './all-pet.component.html',
  styleUrls: ['./all-pet.component.css']
})
export class AllPetComponent implements OnInit {
  pets: any = [];
  url_id: string;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getallPet();
  }
  getallPet() {
    this._httpService.getAllTask()
      .subscribe(data => {
        this.pets = data;
      })
  }


  deletepet(ID: any) {
    this._httpService.deleteTask(ID)
      .subscribe(data => {
        // console.log('delete a task' + data);
      })
    this.getallPet();
  }

}
