import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VoiceService, Voice } from '../../services/voice.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {



  voice: any = {};
  voiceClear: any = [];

  constructor(private voiceService: VoiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.voice = this.voiceService.getVoice();
      this.voice.forEach(element => {
        let value = element.tags.toString();
        if (this.voiceClear.includes(value) === false) {
          this.voiceClear.push(value);
        }
      });
    });
  }

  ngOnInit() {

  }

  getVoice(id: string) {
    return this.voiceService.getVoiceId(id);
  }

  filterJson(data, order) {
    return this.voiceService.sortJSON(data, name, order);
  }

  searchJosn(element) {
    this.voice = [];
    console.log(this.voiceService.searchVoice(element[0]));
    this.voiceService.searchVoice(element[0]);
    this.voice.push(this.voiceService.searchVoice(element[0]));
    return this.voice;
  }

  randomJson() {
    console.log(this.voiceService.getRandomElement());
    this.router.navigate(['/home',this.voiceService.getRandomElement()]);
    return this.voiceService.getRandomElement();
  }

}
