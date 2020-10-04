import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-bookmovie',
  templateUrl: './bookmovie.component.html',
  styleUrls: ['./bookmovie.component.css']
})
export class BookmovieComponent implements OnInit {

  constructor(private movieservice: MoviesService) { }
  allMovies:any;
  ngOnInit(): void {
    this.movieservice.getmovielist().subscribe((data)=>{
     
      console.warn(data);
       this.allMovies=data;
       console.warn(data.name)
  })
  }
}
