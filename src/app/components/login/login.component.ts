import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  form = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('',[
    ])
  });

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(['/home/dashboard', {}]);
  }
}
