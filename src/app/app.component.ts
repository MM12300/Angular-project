import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './flexboxgrid.min.css', './sidebar.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'angular-project';
}
