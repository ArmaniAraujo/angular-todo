import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Observable} from "rxjs";
import axios from "axios";
import {Router} from "@angular/router";

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  // @ts-ignore
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  async submitLogin(): Promise<any> {

    if (this.loginForm.valid) {

      // If values are valid, save to variables
      // @ts-ignore
      const username = this.loginForm.get("username").value;
      // @ts-ignore
      const password = this.loginForm.get("password").value;


      console.log('clicked')
      // btoa creates a Base64-encoded ASCII string from a binary string
      const creds = btoa(`${username}:${password}`)

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ${creds}'
      });

      try {
        const response = await axios.get('http://localhost:8080/api/todo/auth', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${creds}`
          }
        });

        if (response.data.hasOwnProperty("errorMessage")) {
          console.log('there has been an error')
          document.getElementById("errorMessage")!.innerHTML = response.data.errorMessage
          this.loginForm.get("password")?.reset()

        } else { // it worked and now we want to grab the todos
          // actually nvm we'll do it in fontpage
          // TODO: Store user data into sessionStorage
          console.log('you can be logged in')
          console.log(response.data.user)
          sessionStorage.setItem("user", JSON.stringify(response.data.user))
          await this.router.navigate(['/front'])

        }
        // Handle the response from the server
        return response.data;

      } catch (error) {
        // @ts-ignore - to ignore "error is of type unknown"
        console.error('Error:', error.response ? error.response.data : error.message);
        // Handle errors
        throw error;
      }
    }
    return "error";

  }
}


// const formData = this.loginForm.value
//
// // Create POST request to backend
// this.http.get('http://localhost:8080/api/todo/auth', formData)
//   .subscribe(
//     data => {
//       console.log('Success', data)
//       // TODO: do stuff with response from server
//     },
//     error => {
//       console.log('Error', error)
//       // TODO: do stuff with error idk just stay here, reset form etc
//     }
//   )
