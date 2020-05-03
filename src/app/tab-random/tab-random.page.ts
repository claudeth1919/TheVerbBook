import { Component, OnInit } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite/ngx'
@Component({
  selector: 'app-tab-random',
  templateUrl: './tab-random.page.html',
  styleUrls: ['./tab-random.page.scss'],
  
})
export class TabRandomPage implements OnInit {

  constructor(
    public sqlite: SQLite
  ) { }

  ngOnInit() {
  }
  private createDatabase(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default' // the location field is required
    })
    .then((db) => {
      console.log(db);
    })
    .catch(error =>{
      console.error(error);
    });
  }
}
