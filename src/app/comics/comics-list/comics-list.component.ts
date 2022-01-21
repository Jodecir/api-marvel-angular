import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComicsApiService } from 'src/app/services/comics/comic/shared/comics-api.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {

  constructor(private comicSvc: ComicsApiService) { }
  public allComics: any;
  ngOnInit(): void {
    this.getComics();
    
    console.log(this.allComics);
  }

  async getComics() {
    await this.comicSvc.getAllComics().subscribe({
      next:res => 
      { 
        this.allComics = res
        console.log(this.allComics);
      },
      error:e => console.log(e)
    });
  }
}
