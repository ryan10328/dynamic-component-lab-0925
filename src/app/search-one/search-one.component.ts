import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-one',
  templateUrl: './search-one.component.html',
  styleUrls: ['./search-one.component.css']
})
export class SearchOneComponent implements OnInit {
  @Output() onFormSubmit = new EventEmitter();
  frmSearch: FormGroup;

  constructor(public builder: FormBuilder) {
  }

  ngOnInit() {
    this.frmSearch = this.builder.group({
      name: ['']
    });
  }

  submit() {
    this.onFormSubmit.emit(this.frmSearch);
  }

}
