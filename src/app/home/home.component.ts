import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  onNavigate(){
    // your logic here.... like set the url
    const url = 'https://luishuapayas.com/dashboard/index.html';
    window.location.replace(url)
  }
}
