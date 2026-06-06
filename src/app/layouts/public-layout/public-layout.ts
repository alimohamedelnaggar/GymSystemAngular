import { Component } from '@angular/core';
import { Navbar } from "../../features/home/components/navbar/navbar";
import { RouterOutlet } from "@angular/router";
import { Footer } from "../../features/home/components/footer/footer";

@Component({
  selector: 'app-public-layout',
  imports: [Navbar, RouterOutlet, Footer],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss',
})
export class PublicLayout {}
