import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faMedium,
  faStackOverflow,
  faTwitter,
  faLinkedin,
  faAngular,
  faBattleNet,
  faDiscord,
  faJs,
  faNodeJs,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private library: FaIconLibrary) {
    library.addIcons(
      faStackOverflow,
      faGithub,
      faMedium,
      faTwitter,
      faLinkedin,
      faAngular,
      faBattleNet,
      faDiscord,
      faJs,
      faNodeJs,
      faYoutube,
    );
  }
}
