import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { DummyComponent } from './dummy/dummy.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,

    RouterLink,
    RouterLinkActive,
    DummyComponent,
    NavbarComponent,
    // AdduserComponent,
    // ListUserComponent,
    // LoginComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AppService],
})
export class AppComponent implements OnInit {
  listItem: String[] = [];
  selectedItem: String = '';
  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.listItem = this.service.getItem();
  }
  selectItem(item: String) {
    this.selectedItem = item;
  }
}
