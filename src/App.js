import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Header main */}
        <div className="header-main">
          <div class="header-brand">
            <button className='button'>Hum</button>
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
          <button class="button search-back-button">Back</button>
          <div className="search-section">
              <input type="text" placeholder="Search" class="search-input" />
              <button class="button search-cross-button">Cross</button>
              <button class="button search-loop-button">Loop</button>
          </div>
        </div>
      </header>
    </div> 
  ); 
}

export default App;
