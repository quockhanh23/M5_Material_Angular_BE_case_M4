import {Component, OnInit} from '@angular/core';
import {HomeService} from "../services/home.service";
import {Home} from "../models/home";
import {CategoryService} from "../services/category.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../Notification/dialog/dialog.component";

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  home!: Home[]

  constructor(private homeService: HomeService,
              private categoryService: CategoryService,
              public dialog: MatDialog) {
  }
  openDialog() {
    this.dialog.open(DialogComponent);
  }

  ngOnInit(): void {
    this.homeService.getAll().subscribe(result => {
      // @ts-ignore
      this.home = result
      console.log(result)
    }, error => {
      console.log(error)
    })
    this.categoryService.getAll().subscribe(result => {
      // @ts-ignore
      this.category = result
      console.log(result)
    }, error => {
      console.log(error)
    })
  }
}
