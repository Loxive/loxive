import './App.css';
import Logo from './components/Logo';
import Linktree from './components/Linktree';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <Logo></Logo>
            <p>
                <code>Welcome to Loxive.com</code>
            </p>
        </header>
        <Linktree></Linktree>
    </div>
  );
}

export default App;
