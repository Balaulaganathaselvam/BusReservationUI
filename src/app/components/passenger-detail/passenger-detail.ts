import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-detail',
  imports: [FormsModule],
  templateUrl: './passenger-detail.html',
  styleUrl: './passenger-detail.css',
})
export class PassengerDetail implements OnInit {
  passenger = { busId: 0, firstName: '', lastName: '', middleName: '', email: '', phoneNumber: '', checkIn: false, numberOfBags: 0 };

  constructor(private router: Router) {}

  ngOnInit() {
    const selectedBusId = sessionStorage.getItem('selectedBusId');
    if (!selectedBusId) {
      this.router.navigate(['']);
    } else {
      this.passenger.busId = parseInt(selectedBusId);
    }
  }

  onSubmit() {
    if (this.passenger.firstName && this.passenger.lastName && this.passenger.email && this.passenger.phoneNumber && this.passenger.numberOfBags > 0) {
      sessionStorage.setItem('passenger', JSON.stringify(this.passenger));
      this.router.navigate(['/confirm']);
    } else {
      alert('Please fill in all required fields');
    }
  }

  goBack() {
    this.router.navigate(['/display-bus']);
  }
}
