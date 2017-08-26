import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-explore',
  templateUrl: './home-explore.component.html',
  styleUrls: ['./home-explore.component.css']
})
export class HomeExploreComponent implements OnInit {
textWelcome = 'Welcome bes!';
textSearch : String;

onClickSearch() :  void{
console.log('test');
	alert('test');
}
  constructor() { }

  ngOnInit() {
  }

}
