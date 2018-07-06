const Layout = (props) => 
  <div className="App">
    <header>
      <h1>The Brand</h1>
      <ul><li>hello</li><li>goodbye</li><li>auf wideresehen</li></ul>
      <nav></nav>
    </header>
    { props.children }
    <style jsx>{`
      h1 {
        border-bottom: 1px solid gray;
      }
      ul {
        background: green;
      }
    `}</style>
  </div>

export default Layout