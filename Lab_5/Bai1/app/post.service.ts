import { Injectable } from '@angular/core';
import { posts } from './mock.posts';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  public _posts: Array<any> = [];
  constructor() {}
  getAllPost() {
    return (this._posts = posts);
  }
}
