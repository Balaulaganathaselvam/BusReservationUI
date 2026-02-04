import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Reservation } from '../../services/reservation';

@Component({
  selector: 'app-confirm',
  imports: [CommonModule],
  templateUrl: './confirm.html',
  styleUrl: './confirm.css',
})
export class Confirm implements OnInit {
  criteria: any;
  passenger: any;
  busId: number | null = null;

  constructor(private router: Router, private reservationService: Reservation) {}

  ngOnInit() {
    const criteriaData = sessionStorage.getItem('criteria');
    const passengerData = sessionStorage.getItem('passenger');
    const busIdData = sessionStorage.getItem('selectedBusId');
    
    if (criteriaData && passengerData && busIdData) {
      this.criteria = JSON.parse(criteriaData);
      this.passenger = JSON.parse(passengerData);
      this.busId = parseInt(busIdData);
    } else {
      this.router.navigate(['']);
    }
  }

  confirmReservation() {
    const reservation = {
      busId: this.passenger.busId,
      firstName: this.passenger.firstName,
      lastName: this.passenger.lastName,
      middleName: this.passenger.middleName,
      email: this.passenger.email,
      phoneNumber: this.passenger.phoneNumber,
      checkIn: this.passenger.checkIn,
      numberOfBags: this.passenger.numberOfBags
    };

    this.reservationService.makeReservation(reservation).subscribe(
      (response: any) => {
        alert('Reservation confirmed successfully!');
        sessionStorage.clear();
        this.router.navigate(['']);
      },
      (error: any) => {
        console.error('Error making reservation:', error);
        alert('Failed to confirm reservation. Please try again.');
      }
    );
  }

  goBack() {
    this.router.navigate(['/passenger-detail']);
  }
}
