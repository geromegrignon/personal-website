import { Component } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogRoutes$: Observable<ScullyRoute[]> = this.scully.available$.pipe(
    map((routes: ScullyRoute[]) => routes.filter(route => route.hasOwnProperty('published'))),
  );

  constructor(private readonly scully: ScullyRoutesService) {}
}
