import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { Post } from './models/post.models';
import { CommonModule } from '@angular/common';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [PostsService],
})
export class AppComponent {
  title = 'Angular_Learnings_App';
  isFetching = false;
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient, private postService: PostsService) {}

  ngOnInit() {
    this.postService.fetchPosts().subscribe((posts) => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe((posts) => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe((result: any) => {
      this.loadedPosts = [];
      console.log('Delete is completed', result);
    });
  }
}
