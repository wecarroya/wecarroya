import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  movie: any

  constructor(private route: ActivatedRoute, private moviesServices: MoviesService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.moviesServices.getMovie(id).subscribe( (res:any)=>{
      console.log('res !!!!!')
      console.dir(res)
      this.movie = res.data
    })
  }
}
