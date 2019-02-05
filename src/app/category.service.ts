import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll(): Observable<any[]>{
    return this.db.list('/categories').snapshotChanges().pipe(
      map(actions => 
          actions.map(a => ({key: a.key, ...a.payload.val()}))
      )
  );
  }
}
