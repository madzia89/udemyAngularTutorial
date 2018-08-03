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
  //czy dobrze rozumiem, że to co jest powyżej to stan wg react??????

  constructor(){
    
  }
  changeColor(){
    this.nameColor = this.nameColor === 'blue' ? 'red' : 'blue'
    //zmiana koloru nagłówka w zależności od tego jaki kolor jest obecnie
  }
}
