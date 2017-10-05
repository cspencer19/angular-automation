import { Component } from '@angular/core';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'math-utils',
  templateUrl: './math-utils.component.html',
  styleUrls: ['./math-utils.component.css']
})
export class MathUtilsComponent {

  constructor(private util: UtilService) {}
}
