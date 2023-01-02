import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public posts: Array<any>;
  public myAllPosts: Array<any>;
  constructor(private postService: PostService) {
    this.posts = this.postService.getAllPost();
    this.myAllPosts = this.postService.getAllPost();
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
