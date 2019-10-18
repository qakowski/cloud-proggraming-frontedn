import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building-form',
  templateUrl: './building-form.component.html',
  styleUrls: ['./building-form.component.scss']
})
export class BuildingFormComponent implements OnInit {
  imageSrc: string;

  constructor() { }

  ngOnInit() {

  }

  readUrl(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e: any) => this.imageSrc = e.target.result;

      reader.readAsDataURL(file);
    }
  }

  send() {
    
  }

}
