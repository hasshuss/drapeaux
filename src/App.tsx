import React, { useEffect } from 'react';
import './App.css';
import Data from './data/pays.json';

const Pays = Data;

const App = () => {
  useEffect(() => {
  }, []);

  const Random1 = Math.floor(Math.random() * 217);
  let Random2 = Math.floor(Math.random() * 217);
  let Random3 = Math.floor(Math.random() * 217);
  let Random4 = Math.floor(Math.random() * 217);

  while (Random2 === Random1) {
    Random2 = Math.floor(Math.random() * 217);
  }
  while (Random3 === Random1 || Random3 === Random2) {
    Random3 = Math.floor(Math.random() * 217);
  }
  while (Random4 === Random1 || Random4 === Random2 || Random4 === Random3) {
    Random4 = Math.floor(Math.random() * 217);
  }


  const Random5 = Math.floor(Math.random() * 4);
  const Drapeau = Pays[Random1].flag;

  console.log(Random5)
if (Random5===0) {
  return (
    <div className="Container">
      <img className='drapeau' src={Drapeau} alt={Pays[Random1].name_fr}/>
      <div className='btncontainer'>
      <button>{Pays[Random1].name_fr}</button>
      <button>{Pays[Random2].name_fr}</button>
      <button>{Pays[Random3].name_fr}</button>
      <button>{Pays[Random4].name_fr}</button>
      </div>
    </div>)
}
if (Random5===1) {
  return (
    <div className="Container">
      <img className='drapeau' src={Drapeau} alt={Pays[Random1].name_fr}/>
      <div className='btncontainer'>
      <button>{Pays[Random2].name_fr}</button>
      <button>{Pays[Random1].name_fr}</button>
      <button>{Pays[Random3].name_fr}</button>
      <button>{Pays[Random4].name_fr}</button>
      </div>
    </div>)
}
if (Random5===2) {
  return (
    <div className="Container">
      <img className='drapeau' src={Drapeau} alt={Pays[Random1].name_fr}/>
      <div className='btncontainer'>
      <button>{Pays[Random3].name_fr}</button>
      <button>{Pays[Random2].name_fr}</button>
      <button>{Pays[Random1].name_fr}</button>
      <button>{Pays[Random4].name_fr}</button>
      </div>
    </div>)
}
if (Random5===3) {
  return (
    <div className="Container">
      <img className='drapeau' src={Drapeau} alt={Pays[Random1].name_fr}/>
      <div className='btncontainer'>
      <button>{Pays[Random3].name_fr}</button>
      <button>{Pays[Random2].name_fr}</button>
      <button>{Pays[Random4].name_fr}</button>
      <button>{Pays[Random1].name_fr}</button>
      </div>
    </div>)
}
return null;
};

export default App;