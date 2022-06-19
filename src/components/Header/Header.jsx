import '../../styles/index.scss'
import logo from '../../assets/images/pizzaLogo.png'

const Header = () => {
  return <headerMain>
    <div className="container">
      <div className="headerMain__row">
        <div className="headerMain__logoWrapper">
          <img src={logo} alt="logo"/>
          <p>GOOD PIZZA</p>
        </div>
        <div className="headerMain__buttons">
          <button>1235 ₽</button>
          <button>3</button>
        </div>
      </div>
    </div>
  </headerMain>
};

export default Header;