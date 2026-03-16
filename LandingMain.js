import { NavBar } from './nav.js';
import { HeroSection } from './Hero.js';
import { Footer } from './Footer.js';
import { WorkSection } from './WorkSection.js';
const App = () => {
  const root = document.getElementById('app');
  root.innerHTML = `
    ${NavBar()}
    ${HeroSection()}
    ${WorkSection()}
    ${Footer()}
  `;
};
App()