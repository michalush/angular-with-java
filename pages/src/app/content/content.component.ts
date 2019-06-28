import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  text$: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.text$ = this.dataService.getContent();
  }

}
