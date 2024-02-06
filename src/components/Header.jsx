import './Header.css'

function Header () {
  return (
    <header className="header" >
      <span>
        LOGO
      </span>
      <ul className='list'>
        <li>Products</li>
        <li>Categories</li>
        <li>Cart</li>
      </ul>
    </header>
  )
}

export default Header