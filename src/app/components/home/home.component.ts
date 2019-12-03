import { Component, OnInit, OnChanges } from '@angular/core';
import { VoiceService, Voice } from '../../services/voice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public voice: any = {};
  public favourites: Voice[] = [];
  active: boolean;

  constructor(private voiceService: VoiceService,
    private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.voice = this.voiceService.getVoice();
      // this.voice = this.voiceService.getRandomElement();
    });

  }

  ngOnInit() {
  }

  addFavourites(element: any) {
    if (this.favourites.includes(element) === false) {
      this.favourites.push(element);
    }
    this.active = this.favourites.includes(element);
    element.active = true;
    console.log('creo');
  }

  deleteFavourites(element: any) {
    if (this.favourites.includes(element) === true) {
      this.favourites.splice(element);
      element.active = false;
    }
  }

  deleteHTML() {
    this.activatedRoute.params.subscribe(params => {
      this.voice = [];
      // this.voice = this.voiceService.getRandomElement();

    });
  }


}
