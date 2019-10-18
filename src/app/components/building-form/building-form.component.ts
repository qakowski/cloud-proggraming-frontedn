import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-building-form',
  templateUrl: './building-form.component.html',
  styleUrls: ['./building-form.component.scss']
})
export class BuildingFormComponent implements OnInit {
  imageSrc: string;
  file: any;

  constructor(private backendService: BackendService) { }

  ngOnInit() {

  }

  readUrl(event) {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e: any) => this.imageSrc = e.target.result;

      reader.readAsDataURL(this.file);
    }
  }

  send() {
    this.backendService.sendImage(this.file)
      .subscribe(() => {
        console.log('file was sent');
      });
  }

}
