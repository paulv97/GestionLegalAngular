import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {
publish() {
throw new Error('Method not implemented.');
}
  show(num: any) {
    console.log(num);
  }
  title: any;

  constructor() { }

  ngOnInit(): void {
  }

}
