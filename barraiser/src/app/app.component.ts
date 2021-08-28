import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'barraiser';
}


/**
 * Build a UI in HTML/CSS/JS to show list of all motor crashes
  You should show a list of cards to show fields vehicle_type_code1 as first car and vehicle_type_code2 as second car along with crash_date and crash_time.
  There should be a filter based on date
  There should be a pagination support to load large data
  On click of card, user should be able to navigate to a detail page where all the details of the crash should be show

 */