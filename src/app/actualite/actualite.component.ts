import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import * as data from '../../assets/contenu.json';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent implements OnInit {
  actualite =  { id : '' , titre: '' , datee: '', contenu : ''};
  constructor(private activatedRoute: ActivatedRoute,private dataService: DataService) {
  }

  ngOnInit() {
   let id = this.activatedRoute.snapshot.params['id'];
   console.log(id);
   this.dataService.getActualite(id).subscribe(res => {
       this.actualite = res[0];
       console.log(this.actualite);
   });
  }
}
