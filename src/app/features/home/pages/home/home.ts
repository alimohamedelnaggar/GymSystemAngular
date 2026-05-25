import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Hero } from "../../components/hero/hero";
import { Features } from "../../components/features/features";

import { Footer } from "../../components/footer/footer";
import { ResultsSection } from "../../components/results-section/results-section";
import { JourneySection } from "../../components/journey-section/journey-section";
import { CommunitySection } from "../../components/community-section/community-section";
import { Cta } from "../../components/cta/cta";

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, Features, Footer, ResultsSection, JourneySection, CommunitySection, Cta],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
