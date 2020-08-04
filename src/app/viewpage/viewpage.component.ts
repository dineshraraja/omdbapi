import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.scss']
})
export class ViewpageComponent implements OnInit {
  snapshotParam = "";
  public results;
  public stars = [];
  public selectedValue: number = 1;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private ms: MovieService,
  ) { }

  ngOnInit() {
    this.snapshotParam = this.route.snapshot.paramMap.get("slug");
    this.getmoviedetail(this.snapshotParam);
    this.stars = [1,2,3,4,5];
  }

  getmoviedetail(query: string){
    this.ms.getmoviedetail(query)
      .subscribe(
        (resp: any) => {
          (resp.Response === "True") ? 
            (this.results = '',this.selectedValue = Math.round(resp.imdbRating/2), this.results = resp) : 
            (alert(resp.Error),console.log(resp.Error));
        },
        (error) =>{
          alert(error.error.Error);
          console.log(error);
        }
      );
  }

}