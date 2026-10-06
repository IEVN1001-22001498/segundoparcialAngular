import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; 

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {}
