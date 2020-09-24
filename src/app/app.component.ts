import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items = [
    {food: 'Japanese Food', points: 0},
    {food: 'Pizza', points: 0},
    {food: 'Burger', points: 0},
    {food: 'Banana Leaf Rice', points: 0},
    {food: 'Chinese Food', points: 0},
    {food: 'Korean BBQ', points: 0}
  ];
  list = [];
  food = [];
  clicks = 0;

  ngOnInit() {
    this.getList();
    this.shuffle(this.list);
    this.getFood();
  }

  handlerClick = (food) => {
    this.items.filter(item => item.food === food)[0].points += 1;
    this.getFood();
    this.clicks += 1;
    this.items.sort(this.sort);
    console.log(this.items);

  }

  getFood = () => {
    this.food = this.list.splice(0, 1)[0];
  }

  getList = () => {
    this.list = this.pairs(this.items);
  }

  sort = (a, b) => {
    if ( a.points < b.points ) {
      return 1;
    }
    if ( a.points > b.points ) {
      return -1;
    }
    return 0;
  }

  pairs = (arr) => {
    return arr.map( (v, i) => arr.slice(i + 1).map(w => [v, w]) ).flat();
  }

  shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  }
}
