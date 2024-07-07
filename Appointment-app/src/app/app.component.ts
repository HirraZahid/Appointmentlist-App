import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppointmentListComponent } from './MyComponents/appointment-list/appointment-list.component';
import { MyformComponent } from './ReactiveForms/myform/myform.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppointmentListComponent,MyformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Appointment-app';
  
}
