import { Component } from '@angular/core';
import {DragDropModule, CdkDragHandle} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [DragDropModule, CdkDragHandle],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
editing = true
}
