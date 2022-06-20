import MainCard from "./MainCard/MainCard";
import pizzas from '../../assets/pizzas.json'

const Main = () => {

  return <main className='main'>
    <div className="container">
      <h1 className='main__title'>Все пиццы</h1>

      <div className="main__row">
        {pizzas.map(obj=><MainCard key={obj.id} {...obj}/>)}
      </div>
    </div>
  </main>
};

export default Main;