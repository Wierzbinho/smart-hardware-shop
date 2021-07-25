import {Main} from './main/Main';
import { Sidebar } from './sidebar/Sidebar';

import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header"><h1>Smart Hardware Shop</h1></header>
      <main className="main"><Main/></main>
      <aside className="sidebar"><Sidebar/></aside>
    </div>
  );
}

export default App;
