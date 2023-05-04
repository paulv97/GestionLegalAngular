import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {
  user: { name: string; email: string; } = {
    name: 'John Doe',
    email: 'john@email.com'
  }
  date: Date
  // blogBody: any;

  show(num: any) {
    console.log(num);
  }
  // title: any;


  form: FormGroup
  isLoading: boolean = false

  constructor(
    private message: NzMessageService,
    private router: Router
  ) {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
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

    // redirect to the busqueda page
    setTimeout(() => {
      this.isLoading = false
      this.message.success('Blog creado exitosamente.')
      //this.router.navigate(['/assets/paginas-samuel/Paginas/BlogIndividual.html'])
      window.open('/assets/paginas-samuel/Paginas/BlogIndividual.html', '_blank')
    }
      , 5000)
  }

  ngOnInit(): void {
  }

}
