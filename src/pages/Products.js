import React from 'react';
import "./products.css"


function importAll(r)
{
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../image', false, /\.(png|jpe?g|svg)$/));


function Products()
{
    
    
        return(
            <div className="productsPage">
                 <header className="head">
                    <nav className="menu">
                        <ul>
                            <li>Sofa</li>
                            <li>Table</li>
                            <li>Bed</li>
                            <li>Chair</li>
                            <li>Decore</li>
                            <li>Lightning</li> 
                            <hr/>        
                        </ul>
                    </nav> 
                 </header>

                 <div className="all_products">
                    <div className="item">
                        <img className="img" src={images['img1.jpg']}></img>
                        <div className="pop_info">
                            <button className="open">open</button>
                            <h2>price</h2>
                        </div>
                    </div>
                    <div className="item">
                        <img className="img" src={images['img2.jpg']}></img>
                        <div className="pop_info">
                            <button className="open">open</button>
                            <h2>price</h2>
                        </div>
                        
                    </div>
                    <div className="item">
                        <img className="img" src={images['img3.jpg']}></img>
                        <div className="pop_info">
                            <button className="open">open</button>
                            <h2>price</h2>
                        </div>
                    </div>
                    <div className="item">
                        <img className="img" src={images['img4.jpg']}></img>
                        <div className="pop_info">
                            <button className="open">open</button>
                            <h2>price</h2>
                        </div>
                    </div>
                    <div className="item">
                        <img className="img" src={images['img5.jpg']}></img>
                        <div className="pop_info">
                            <button className="open">open</button>
                            <h2>price</h2>
                        </div>
                    </div>
                    <div className="item">
                        <img className="img" src={images['img6.jpg']}></img>
                        <div className="pop_info">
                            <button className="open">open</button>
                            <h2>price</h2>
                        </div>
                    </div>
                    <div className="item">
                        <img className="img" src={images['img7.jpg']}></img>
                        <div className="pop_info">
                            <button className="open">open</button>
                            <h2>price</h2>
                        </div>
                    </div>
                    <div className="item">
                        <img className="img" src={images['img8.jpg']}></img>
                        <div className="pop_info">
                            <button className="open">open</button>
                            <h2>price</h2>
                        </div>
                    </div>
                    <div className="item">
                        <img className="img" src={images['img9.jpg']}></img>
                        <div className="pop_info">
                            <button className="open">open</button>
                            <h2>price</h2>
                        </div>
                    </div>
                    <div className="item">
                        <img className="img" src={images['img9.jpg']}></img>
                        <div className="pop_info">
                            <button className="open">open</button>
                            <h2>price</h2>
                        </div>
                    </div>
                    <div className="item">
                        <img className="img" src={images['img10.jpg']}></img>
                        <div className="pop_info">
                            <button className="open">open</button>
                            <h2>price</h2>
                        </div>
                    </div>
                    <div className="item">
                        <img className="img" src={images['img10.jpg']}></img>
                        <div className="pop_info">
                            <button className="open">open</button>
                            <h2>price</h2>
                        </div>
                    </div>
                    <div className="item">
                        <img className="img" src={images['img4.jpg']}></img>
                        <div className="pop_info">
                            <button className="open">open</button>
                            <h2>price</h2>
                        </div>
                    </div>
                    <div className="item">
                        <img className="img" src={images['img4.jpg']}></img>
                        <div className="pop_info">
                            <button className="open">open</button>
                            <h2>price</h2>
                        </div>
                    </div>
                    
                    
                 </div>
            </div>
        );
    
    
         
    

}

export default Products;