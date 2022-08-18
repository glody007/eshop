import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Header main */}
        <div className="header-main">
          <div class="header-brand">
            <button></button>
            <a>Logo</a>
          </div>
          <div class="header-links">
            <a>Sign in</a>
            <a>User</a>
            <a>Card</a>
          </div>
        </div>

        {/* Header search */}
        <div className="header-search">
          <button class="search-back-button">Back</button>
          <div className="search-section">
              <input type="text" placeholder="Search" class="search-input" />
              <button class="search-cross-button">Cross</button>
              <button class="search-loop-button">Loop</button>
          </div>
        </div>
      </header>
    </div> 
  ); 
}

export default App;
