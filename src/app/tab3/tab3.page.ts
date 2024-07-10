import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, ViewDidEnter {

  constructor() {}

  ngOnInit(): void {
    console.log("Tab 3 built")
  }

  ionViewDidEnter(): void {
    console.info("Navegou Tab 3")
  }

  

}
