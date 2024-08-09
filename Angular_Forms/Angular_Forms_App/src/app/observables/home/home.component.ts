import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  interval,
  map,
  Observable,
  Subject,
  Subscriber,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  private numberSubject = new Subject<number>();

  ngOnInit(): void {
    this.numberSubject.subscribe({
      next: (number) => console.log(number),
    });
    this.numberSubject?.next(1);
    this.numberSubject?.next(2);
    this.numberSubject?.next(3);

    // this.subscription = interval(1000).subscribe((count) => {
    //   console.log('Home component' + count);
    // });

    // const customObservable = new Observable(
    //   (subscriber: Subscriber<number>) => {
    //     let count = 0;
    //     setInterval(() => {
    //       subscriber.next(count);
    //       count = count + 5;

    //       if (count == 20) {
    //         subscriber.complete();
    //       }
    //     }, 1000);
    //   }
    // );

    // customObservable.pipe(map((data) => `Round ${data}`)).subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   error: (err) => {
    //     if (err !== null) {
    //       console.log(err);
    //     }
    //   },
    //   complete: () => {
    //     console.log('observable is completed');
    //   },
    // });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
