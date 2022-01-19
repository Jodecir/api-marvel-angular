import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersApiService } from 'src/app/service/characters/character/shared/characters-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

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
