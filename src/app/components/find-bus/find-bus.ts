import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Criteria } from '../../model/criteria';
import { Reservation } from '../../services/reservation';

@Component({
  selector: 'app-find-bus',
  imports: [FormsModule],
  templateUrl: './find-bus.html',
  styleUrl: './find-bus.css',
})
export class FindBus {
  criteria: Criteria = { from: '', to: '', departureDate: '' };

  constructor(private reservationService: Reservation, private router: Router) {}

  onSubmit() {
    if (this.criteria.from && this.criteria.to && this.criteria.departureDate) {
      this.reservationService.getBus(this.criteria).subscribe(
        (buses) => {
          sessionStorage.setItem('buses', JSON.stringify(buses));
          sessionStorage.setItem('criteria', JSON.stringify(this.criteria));
          this.router.navigate(['/display-bus']);
        },
        (error) => {
          console.error('Error fetching buses:', error);
          alert('Failed to fetch buses. Please try again.');
        }
      );
    } else {
      alert('Please fill in all fields');
    }
  }
}
