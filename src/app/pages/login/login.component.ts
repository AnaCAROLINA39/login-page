import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from "../../components/default-login-layout/default-login-layout.component";


@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [DefaultLoginLayoutComponent]
})
export class LoginComponent {

}
