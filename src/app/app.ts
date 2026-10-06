import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { OnInit } from '@angular/core';
import { Navbar } from './navbar/navbar';



@Component({
  imports: [RouterOutlet, Navbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App  implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}