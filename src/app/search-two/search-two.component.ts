import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-two',
  templateUrl: './search-two.component.html',
  styleUrls: ['./search-two.component.css']
})
export class SearchTwoComponent implements OnInit {
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
