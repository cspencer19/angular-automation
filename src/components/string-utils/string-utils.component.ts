import { Component } from '@angular/core';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'string-utils',
  templateUrl: './string-utils.component.html',
  styleUrls: ['./string-utils.component.css']
})
export class StringUtilsComponent {

  constructor(private util: UtilService) {}
}
