import { Component,OnInit } from '@angular/core';
import { Appointment } from '../../model/appointment';
import { FormsModule } from '@angular/forms';
import { NgFor, DatePipe } from '@angular/common';


@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [FormsModule, NgFor, DatePipe],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent implements OnInit{
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  // Add ngOnInit method to load appointments from local storage
  ngOnInit() {
    const storedAppointments = localStorage.getItem('appointments');
    if (storedAppointments) {
      this.appointments = JSON.parse(storedAppointments);
    }
    else{
      this.appointments = [];;
     
    }
  }

  addAppointment() {
    // alert(this.newAppointmentTitle + ' ' + this.newAppointmentDate);
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newappointment: Appointment = {
        id: 123,
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      };
      this.appointments.push(newappointment);
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();

      //how to store data in local storage 
      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }
  }


  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));

  }
}
