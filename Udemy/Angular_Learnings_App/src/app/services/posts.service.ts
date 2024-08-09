import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    // Send Http request
    // Angular HTTP Client automatically converts javascript object to JSON object
    const postData: Post = { title: title, content: content };
    this.http
      .post(
        'https://ng-complete-guide-d4d7d-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-d4d7d-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((responseData: { [key: string]: Post }) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        })
      );
  }

  deletePosts(): any {
    return this.http.delete(
      'https://ng-complete-guide-d4d7d-default-rtdb.firebaseio.com/posts.json'
    );
  }
}
