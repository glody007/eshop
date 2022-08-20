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
      <body>
        <div className="prefered-categories">
          <div className="prefered-category">
            <p>Shop Laptops & Tablets</p>
            <img src="https://images.unsplash.com/photo-1660908677744-742eb1fdca49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80" />
          </div>
          <div className="prefered-category">
            <p>Shop Laptops & Tablets</p>
            <img src="https://images.unsplash.com/photo-1660908677744-742eb1fdca49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80" />
          </div>
          <div className="prefered-category">
            <p>Shop Laptops & Tablets</p>
            <img src="https://images.unsplash.com/photo-1655720035861-ba4fd21a598d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
          </div>
          <div className="prefered-category">
            <p>Shop Laptops & Tablets</p>
            <img src="https://images.unsplash.com/photo-1660908677744-742eb1fdca49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80" />
          </div>
        </div>

        <div className='popular-category'>
          <h4>Women's fashion sneakers</h4>
          <div className='popular-category-images'>
            <img src="https://images.unsplash.com/photo-1660908677744-742eb1fdca49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80" />
            <img src="https://images.unsplash.com/photo-1660908677744-742eb1fdca49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80" />
            <img src="https://images.unsplash.com/photo-1660908677744-742eb1fdca49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80" />
            <img src="https://images.unsplash.com/photo-1660908677744-742eb1fdca49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80" />
          </div>
          <a>See more</a>
        </div>
      </body>
    </div> 
  ); 
}

export default App;
