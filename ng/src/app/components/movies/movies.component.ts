import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: any

  constructor(private moviesServices: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.moviesServices.getAll().subscribe( (res:any )=>{
     // console.dir(res)
      this.movies = res.data
    })
  }

  details(id: number){
    this.router.navigate([`/details/${id}`]);
  }

}
