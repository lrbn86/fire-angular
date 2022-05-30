import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: Observable<any[]>;
  
  constructor(firestore: Firestore) {
    const c = collection(firestore, 'items');
    this.items = collectionData(c);
  }

}
