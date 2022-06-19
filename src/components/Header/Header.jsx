import '../../styles/index.scss'
import logo from '../../assets/images/pizzaLogo.png'
import busket from '../../assets/images/busket.png'

const Header = () => {
  return <header className='headerMain'>
    <div className='container'>
      <div className='headerMain__row'>
        <div className='headerMain__logoWrapper'>
          <img src={logo} alt='logo'/>
          <p>GOOD PIZZA</p>
        </div>
        <div className='headerMain__buttons'>
          <a>
            <span>1235 ₽</span>
          </a>
          <div className='headerMain__busketButton'>
            <a>
              <img src={busket} alt='busket'/>
              <span>3</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
};

export default Header;