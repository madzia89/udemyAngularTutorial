import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Janusz Kowal"
  photoUrl: string = "../assets/images/examplePicture.jpg"

  constructor(){
    
  }
}
