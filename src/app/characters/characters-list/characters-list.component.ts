import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersApiService } from 'src/app/services/characters/character/shared/characters-api.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  constructor(private characterSvc: CharactersApiService) { }
  public allCharacters: any;
  ngOnInit(): void {
    this.getCharacters();
    
    console.log(this.allCharacters);
  }

  async getCharacters() {
    await this.characterSvc.getAllCharacters().subscribe({
      next:res => 
      { 
        this.allCharacters = res
        console.log(this.allCharacters);
      },
      error:e => console.log(e)
    });
  }
}
