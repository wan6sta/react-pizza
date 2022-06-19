import up from '../../assets/images/up.svg'

const MainSort = () => {
  return <section className='mainSort'>
    <div className="container">
      <div className="mainSort__row">
        <div className="mainSort__sortList">
          <ul>
            <li><a className='link__active'>Все</a></li>
            <li><a>Мясные</a></li>
            <li><a>Вегетарианские</a></li>
            <li><a>Гриль</a></li>
            <li><a>Острые</a></li>
            <li><a>Закрытые</a></li>
          </ul>
        </div>

        <div className="mainSort__sort">
          <img src={up} alt=""/>
          <span>Сортировка по: </span>
          <a>популярности</a>
        </div>

        <div className="mainSort__sortAppear">
          <a>популярности</a>
          <a>цене</a>
          <a>алфавиту</a>
        </div>
      </div>
    </div>
  </section>
};

export default MainSort;