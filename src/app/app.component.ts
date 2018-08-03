import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Janusz Kowal"
  nameColor: string = 'blue'
  photoUrl: string = "../assets/images/examplePicture.jpg"
  isActive: boolean = true

  constructor(){
    
  }
  changeIsActive(){
    this.isActive = !this.isActive //przełączenie na przeciwną wartość (true/false)
  }
}
