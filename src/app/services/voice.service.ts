import { Injectable } from '@angular/core';
import data from '../../assets/voices.json';

@Injectable({
  providedIn: 'root'
})
export class VoiceService {


  private voices: Voice[] = data;

  constructor() { }

  getVoice(): Voice[] {
    return this.voices;
  }
  getVoiceId(idx: string) {
    return this.voices[idx];
  }

  searchVoice(param: string): Voice[] {

    const voiceSearch: Voice[] = [];

    param = param.toLocaleLowerCase();

    for (let i = 0; i < this.voices.length; i++) {

      const voice = this.voices[i];

      const name = voice.name.toLocaleLowerCase();

      if (name.indexOf(param) >= 0) {
        voice.idx = i;
        voiceSearch.push(voice);
      }
    }

    return voiceSearch;

  }


  sortJSON(voices, key, orden) {
    return voices.sort(function (a, b) {
      let x = a[key],
        y = b[key];

      if (orden === 'asc') {
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      }

      if (orden === 'desc') {
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
      }
    });
  }

  getRandomElement() {
    return this.voices[Math.floor(Math.random() * this.voices.length)];
  }

}


export interface Voice {
  id: string;
  name: string;
  icon: string;
  tags: string[];
  idx?: number;
}
