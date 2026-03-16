import { NavBar } from './nav.js';
import { HeroSection } from './Hero.js';
const App = () => {
    const root = document.getElementById('app');
    root.innerHTML = `
    ${NavBar()}
    ${HeroSection()}
  `;
};
App()