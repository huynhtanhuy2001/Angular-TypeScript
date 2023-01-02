import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent {
  title: any;
  des: any;
  content: any;
  constructor(
    private rout: ActivatedRoute,
    // private _myposts: PostService,
    private _appComponent: AppComponent
  ) {
    this.title = this.rout.snapshot.queryParamMap.get('title');
    this.des = this.rout.snapshot.queryParamMap.get('des');
    this.content = this.rout.snapshot.queryParamMap.get('content');
    _appComponent.checkLink = 3;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
