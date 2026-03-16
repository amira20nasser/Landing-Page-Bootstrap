import { NavBar } from './nav.js';
import { HeroSection } from './Hero.js';
import { Footer } from './Footer.js'
const App = () => {
  const root = document.getElementById('app');
  root.innerHTML = `
    ${NavBar()}
    ${HeroSection()}
    ${Footer()}
  `;
};
App()