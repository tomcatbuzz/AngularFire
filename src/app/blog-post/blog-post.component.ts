import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  lesson$: Observable<any>;

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    this.contentful.logContent('');

    this.lesson$ = this.contentful.getContent('');
  }

}
