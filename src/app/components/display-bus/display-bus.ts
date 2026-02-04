import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Reservation } from '../../services/reservation';

@Component({
  selector: 'app-display-bus',
  imports: [CommonModule],
  templateUrl: './display-bus.html',
  styleUrl: './display-bus.css',
})
export class DisplayBus implements OnInit {
  buses: any[] = [];

  constructor(private router: Router, private reservationService: Reservation) {}

  ngOnInit() {
    const busesData = sessionStorage.getItem('buses');
    if (busesData) {
      this.buses = JSON.parse(busesData);
    } else {
      this.router.navigate(['']);
    }
  }

  selectBus(busId: number) {
    sessionStorage.setItem('selectedBusId', busId.toString());
    this.router.navigate(['/passenger-detail']);
  }

  goBack() {
    this.router.navigate(['']);
  }
}
