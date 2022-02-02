import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CommentService} from "../services/comment.service";
import {Comment} from "../models/comment";

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {

  comment!: Comment[]

  commentForm: FormGroup = this.fb.group({
    id: new FormControl(''),
    content: new FormControl(''),
  });

  constructor(private router: Router,
              private fb: FormBuilder,
              private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.commentService.getAll().subscribe(rs => {
      // @ts-ignore
      this.comment = rs
      console.log(rs)
    });
  }

  submit() {
    let newComment = {
      content: this.commentForm.value.content,
    }
    console.log(newComment)
    // @ts-ignore
    this.commentService.save(newComment).subscribe(() => {
    })
  }
}


