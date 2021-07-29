import {Main} from './main/Main';
import { Sidebar } from './sidebar/Sidebar';

import { Logo } from './sidebar/Logo';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header"><Logo/></header>
      <main className="main"><Main/></main>
      <aside className="sidebar"><Sidebar/></aside>
    </div>
  );
}

export default App;
