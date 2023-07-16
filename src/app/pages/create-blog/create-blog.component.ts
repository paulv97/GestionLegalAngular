import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  font: number = 1
  date: Date
  form: FormGroup
  isLoading: boolean = false

  showBlogs() {
    this.isLoading = true

    // redirect to the blogs page
    setTimeout(() => {
      this.isLoading = false
      // window.open('/assets/paginas-samuel/Paginas/BlogIndividual.html', '_blank')
      
    }
      , 5000)
  }

  setFont(font: number) {
    this.font = font
    console.log("Selected Font: " + font)
  }

  user: { name: string; email: string; } = {
    name: 'John Doe',
    email: 'john@email.com'
  }

  constructor(
    private message: NzMessageService,
    private router: Router
  ) {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      imagenB: new FormControl(null, [Validators.required]),
      blogBody: new FormControl(null, [Validators.required])
    })
    this.date = new Date()
  }


  publish() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      this.form.markAsDirty()
      return
    }

    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
      this.message.success('Blog creado exitosamente.')
    }
      , 5000)
  }

  ngOnInit(): void {
  }

}
