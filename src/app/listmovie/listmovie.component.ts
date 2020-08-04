import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-listmovie',
  templateUrl: './listmovie.component.html',
  styleUrls: ['./listmovie.component.scss']
})
export class ListmovieComponent implements OnInit {

  public results = [];
  constructor(private ms: MovieService) {}

  ngOnInit(){
    this.getmovielist('movies');
  }

  getmovielist(query: string){
    this.ms.getmovielist(query)
      .subscribe(
        (resp: any) => {
          (resp.Response === "True") ? 
              (this.results = [], this.results = resp.Search) : 
              (alert(resp.Error),console.log(resp.Error));
        },
        (error) => {
          alert(error.error.Error);
          console.log(error);
        }
      );
  }
}