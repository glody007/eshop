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

        {/* Header categories */}
        <div className="header-categories">
          <a>Deals</a>
          <a>Amazon Basics</a>
          <a>Best Sellers</a>
          <a>LiveStreams</a>
          <a>Video</a>
          <a>New Releases</a>
          <a>Home</a>
        </div>

        {/* Header country */}
        <div className="header-country">
          <span>Loc</span>
          <p>Deliver to congo, The Democratic republic of</p>
        </div>
      </header>
    </div> 
  ); 
}

export default App;
