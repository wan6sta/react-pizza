import pizza1 from '../../assets/images/pizza1.png'
import plus from '../../assets/images/plus.svg'

const Main = () => {
  return <main className='main'>
    <div className="container">
      <h1 className='main__title'>Все пиццы</h1>

      <div className="main__row">

        <div className="main__card">
          <img src={pizza1} alt="pizza)"/>
          <p className='main__cardName'>Пепперони</p>

          <div className="main__cardSort">
            <div className="main__cardSortUp">
              <a className='linkSort__active'>тонкое</a>
              <a>традиционное</a>
            </div>
            <div className="main__cardSortDown">
              <a className='linkSort__active'>26 см.</a>
              <a>30 см.</a>
              <a>40 см.</a>
            </div>
          </div>

          <div className="main__cardTotal">
            <span>от 395 ₽</span>

            <a className='main__cardTotalWrapper'>
              <span className='main__cardTotalPlus'>+</span>
              <span className='main__cardTotalAdd'>Добавить</span>
              <span className='main__cardTotalNumber'>2</span>
            </a>
          </div>
        </div>
        <div className="main__card">
          <img src={pizza1} alt="pizza)"/>
          <p className='main__cardName'>Пепперони</p>

          <div className="main__cardSort">
            <div className="main__cardSortUp">
              <a className='linkSort__active'>тонкое</a>
              <a>традиционное</a>
            </div>
            <div className="main__cardSortDown">
              <a className='linkSort__active'>26 см.</a>
              <a>30 см.</a>
              <a>40 см.</a>
            </div>
          </div>

          <div className="main__cardTotal">
            <span>от 395 ₽</span>

            <a className='main__cardTotalWrapper'>
              <span className='main__cardTotalPlus'>+</span>
              <span className='main__cardTotalAdd'>Добавить</span>
              <span className='main__cardTotalNumber'>2</span>
            </a>
          </div>
        </div>
        <div className="main__card">
          <img src={pizza1} alt="pizza)"/>
          <p className='main__cardName'>Пепперони</p>

          <div className="main__cardSort">
            <div className="main__cardSortUp">
              <a className='linkSort__active'>тонкое</a>
              <a>традиционное</a>
            </div>
            <div className="main__cardSortDown">
              <a className='linkSort__active'>26 см.</a>
              <a>30 см.</a>
              <a>40 см.</a>
            </div>
          </div>

          <div className="main__cardTotal">
            <span>от 395 ₽</span>

            <a className='main__cardTotalWrapper'>
              <span className='main__cardTotalPlus'>+</span>
              <span className='main__cardTotalAdd'>Добавить</span>
              <span className='main__cardTotalNumber'>2</span>
            </a>
          </div>
        </div>
        <div className="main__card">
          <img src={pizza1} alt="pizza)"/>
          <p className='main__cardName'>Пепперони</p>

          <div className="main__cardSort">
            <div className="main__cardSortUp">
              <a className='linkSort__active'>тонкое</a>
              <a>традиционное</a>
            </div>
            <div className="main__cardSortDown">
              <a className='linkSort__active'>26 см.</a>
              <a>30 см.</a>
              <a>40 см.</a>
            </div>
          </div>

          <div className="main__cardTotal">
            <span>от 395 ₽</span>

            <a className='main__cardTotalWrapper'>
              <span className='main__cardTotalPlus'>+</span>
              <span className='main__cardTotalAdd'>Добавить</span>
              <span className='main__cardTotalNumber'>2</span>
            </a>
          </div>
        </div>
        <div className="main__card">
          <img src={pizza1} alt="pizza)"/>
          <p className='main__cardName'>Пепперони</p>

          <div className="main__cardSort">
            <div className="main__cardSortUp">
              <a className='linkSort__active'>тонкое</a>
              <a>традиционное</a>
            </div>
            <div className="main__cardSortDown">
              <a className='linkSort__active'>26 см.</a>
              <a>30 см.</a>
              <a>40 см.</a>
            </div>
          </div>

          <div className="main__cardTotal">
            <span>от 395 ₽</span>

            <a className='main__cardTotalWrapper'>
              <span className='main__cardTotalPlus'>+</span>
              <span className='main__cardTotalAdd'>Добавить</span>
              <span className='main__cardTotalNumber'>2</span>
            </a>
          </div>
        </div>
        <div className="main__card">
          <img src={pizza1} alt="pizza)"/>
          <p className='main__cardName'>Пепперони</p>

          <div className="main__cardSort">
            <div className="main__cardSortUp">
              <a className='linkSort__active'>тонкое</a>
              <a>традиционное</a>
            </div>
            <div className="main__cardSortDown">
              <a className='linkSort__active'>26 см.</a>
              <a>30 см.</a>
              <a>40 см.</a>
            </div>
          </div>

          <div className="main__cardTotal">
            <span>от 395 ₽</span>

            <a className='main__cardTotalWrapper'>
              <span className='main__cardTotalPlus'>+</span>
              <span className='main__cardTotalAdd'>Добавить</span>
              <span className='main__cardTotalNumber'>2</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </main>
};

export default Main;