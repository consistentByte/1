import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageListComponent } from './image-list/image-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '1_Image_Previewer';
}
