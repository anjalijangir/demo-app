import { Component, OnInit } from '@angular/core';
import { Storage } from  '@ionic/storage';
import { User } from '../auth/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  userName: String;

  constructor(private  storage:  Storage) { }

  ngOnInit(): void {
    this.storage.get("USER_NAME").then(data => {
      this.userName = data;
    });
  }


}
