import React, {useState} from 'react';
import '../App.css';
import {BrowserRouter as Router, Switch, Route, Link ,NavLink } from 'react-router-dom';


function importAll(r)
{
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../image', false, /\.(png|jpe?g|svg)$/));

let value;
let where;
if (localStorage.getItem("username") === null)
{
  value='registration';
  where='/registration'
}
else
{
  value='logined';
  where='/';
}


function Home()
{
  const  [card, setCard] = useState([])
  function addProduct(product)
  {
    setCard([...card,product]);
  }

  const [products, setproducts] = useState([
    {
        id:'1',
        price: '399',
        image: images['img1.jpg'],
    },
    {
      id:'2',
      price: '299',
      image: images['img2.jpg'],
    },
    {
      id:'3',
      price: '899',
      image: images['img3.jpg'],
    },
    {
      id:'4',
      price: '199',
      image: images['img4.jpg'],
    },
    {
      id:'5',
      price: '99',
      image: images['img5.jpg'],
    },
    {
      id:'6',
      price: '39',
      image: images['img6.jpg'],
    },
    {
      id:'7',
      price: '1099',
      image: images['img7.jpg'],
    },
    {
      id:'8',
      price: '99',
      image: images['img8.jpg'],
    },
    {
      id:'9',
      price: '99',
      image: images['img9.jpg'],
    },
    {
      id:'10',
      price: '99',
      image: images['img10.jpg'],
    },
  ])
  
    return(
    <div className="Home">
      <div className="user">
        <NavLink  to={where}><a href={where} className="registration" ><h1>{value}</h1></a></NavLink >
   
       
        
      </div>

        <div className="slider">
          <h1>Thrust and quality are our purpose </h1>
          <a href="#products"> 
              <div className="scrolldown">
                <span className="arrow" > </span>
              </div> 
          </a>
           
          <div className="learnMore-box"> <NavLink  to="./About"><a href="/about" className="learn-more" >learn more about us</a></NavLink > </div>
          <figure className="background">
              <img src={images['background.jpg']} ></img>
              <img src={images['background 1.jpg']} ></img>
              <img src={images['background 2.jpg']} ></img>
              <img src={images['background 3.jpg']} ></img>
              <img src={images['background.jpg']} ></img>
          </figure>
        </div>
        
        <h2>On Discound</h2>
        <div className="products" id="products">
          
          {products.map(product => (
               <div className="imgBox">
                  <img  className="img" src={product.image} ></img>
                  <button onClick={() => addProduct(product)} className="button">more</button>
                </div>
          ))}
         
        </div>
        
        <div className="see_more">
          <div  className="see_more_butt" > <NavLink  to="./Products"><a href="/products" className="see_more_a" >see more</a></NavLink >   </div>
          <h1>card {card.length}</h1>
        </div>
    </div>
        
        );
}
export default Home;
