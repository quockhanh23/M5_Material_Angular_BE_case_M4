import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Home} from "../models/home";
import {HomeService} from "../services/home.service";
import {CategoryService} from "../services/category.service";
import {Category} from "../models/category";

@Component({
  selector: 'app-home-create',
  templateUrl: './home-create.component.html',
  styleUrls: ['./home-create.component.css']
})
export class HomeCreateComponent implements OnInit {
  home!: Home[]
  categogy!: Category[]

  homeForm: FormGroup = this.fb.group({
    id: new FormControl(''),
    name: new FormControl(''),
    address: new FormControl(''),
    category: new FormControl(''),
    bedroom: new FormControl(''),
    showerRoom: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    numberOfTurns: new FormControl(''),
    area: new FormControl(''),

  });

  constructor(private router: Router,
              private fb: FormBuilder,
              private homeService: HomeService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(result => {
      // @ts-ignore
      this.category = result
      console.log(result)
    }, error => {
      console.log(error)
    })
  }

  submit() {
    let newHome = {
      name: this.homeForm.value.name,
      address: this.homeForm.value.address,
      categogy: {
        id: this.homeForm.value.category
      },
      bedroom: this.homeForm.value.bedroom,
      showerRoom: this.homeForm.value.showerRoom,
      description: this.homeForm.value.description,
      price: this.homeForm.value.price,
      numberOfTurns: this.homeForm.value.numberOfTurns,
      area: this.homeForm.value.area,

    }
    this.homeService.save(newHome).subscribe(() => {
    })
  }
}
