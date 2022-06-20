import pizza1 from "../../../assets/images/pizza1.png";
import {useState} from "react";

const MainCard = ({id, imageUrl, title, types, sizes, price, category, rating}) => {
  const [count, setCount] = useState(0)

  const [activeTypes, setActiveTypes] = useState(0)
  const [activeSizes, setActiveSizes] = useState(0)

  return <div className="main__card">
    <img src={imageUrl} alt="pizza)"/>
    <p className='main__cardName'>{title}</p>

    <div className="main__cardSort">
      <div className="main__cardSortUp">
        {types.map((v, id) => <a
          onClick={() => setActiveTypes(id)}
          key={id}
          className={id == activeTypes
            ? 'linkSort__active'
            : ''}>{v == 1 ? 'традиционное' : 'тонкое'}</a>)}
      </div>

      <div className="main__cardSortDown">
        {sizes.map((v, id) => <a key={id} onClick={() => setActiveSizes(id)}
                                 className={id == activeSizes ? 'linkSort__active' : ''}>{v} см.</a>)}
      </div>
    </div>

    <div className="main__cardTotal">
      <span>от {price} ₽</span>

      <a className='main__cardTotalWrapper' onClick={() => setCount(count + 1)}>
        <span className='main__cardTotalPlus'>+</span>
        <span className='main__cardTotalAdd'>Добавить</span>
        <span className='main__cardTotalNumber'>{count}</span>
      </a>
    </div>
  </div>
};

export default MainCard;