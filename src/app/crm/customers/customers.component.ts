import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  checked: boolean = false;
  indeterminate: boolean = true;
  text: string = '';

  constructor() {}

  ngOnInit(): void {}

  InputChange(event: any) {
    this.text = event.target.value;
  }
}
