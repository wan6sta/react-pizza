import up from '../../assets/images/up.svg'
import {useState} from "react";

const MainSort = () => {

  const [active, setActive] = useState(0);
  const [sortList, setSortList] = useState([
    'Все', 'Мясные', 'Вегетаринские', 'Гриль', 'Острые', 'Закрытые'
  ]);
  const [isVisible, setIsVisible] = useState(false);
  const [list, setList] = useState(['популярности', 'цене', 'алфавиту']);
  const [thisSort, setThisSort] = useState('популярности');
  const [activeList, setActiveList] = useState(0);

  return <section className='mainSort'>
    <div className="container">
      <div className="mainSort__row">
        <div className="mainSort__sortList">
          <ul>
            {sortList.map((v, id) => <li key={id} onClick={() => setActive(id)}><a
              className={active == id ? 'link__active' : ''}>{v}</a></li>)}
          </ul>
        </div>

        <div className="mainSort__sort" onClick={() => setIsVisible(!isVisible)}>
          <img src={up} alt=""/>
          <span>Сортировка по: </span>
          <a>{thisSort}</a>
        </div>

        {isVisible && (<div className='mainSort__sortAppear'>
          {list.map((v, id) => <a
            className={(activeList == id) && 'mainSort__sortAppear_active'}

            onClick={() => {
              setThisSort(v);
              setIsVisible(!isVisible);
              setActiveList(id);
            }} key={id}>{v}</a>)}
        </div>)}

      </div>
    </div>
  </section>
};

export default MainSort;