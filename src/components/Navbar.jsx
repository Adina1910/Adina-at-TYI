import "./Navbar.css"

export default function Navbar(){
  return(
    <nav className="navbar">
      <div className="container nav-content">

        <h2 className="logo">Adina</h2>

        <ul className="nav-links">
          <li>Home</li>
          <li>Journey</li>
          <li>Blog</li>
          <li>About</li>
        </ul>

      </div>
    </nav>
  )
}