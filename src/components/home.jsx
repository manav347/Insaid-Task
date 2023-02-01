import React from "react";

function Home() {
  return (
    <>
    <div className="intro-section">
        <div className="intro-text">
        <h1>Sneaker Store</h1>
        <p>Welcome to Sneaker Store, your one-stop shop for the latest and greatest in sneaker fashion.</p>
        <a href="#" className="cta-button">Shop Now</a>
        </div>
        <div className="intro-image">
        <img src="https://m.media-amazon.com/images/I/61JK+1eNbjL._UL1500_.jpg" alt="Sneaker"/>
        </div>
    </div>
    

    <div className="second-section">
        <h1>Featured Sneakers</h1>
        <div className="loc-con">

        <div className="loc-container">
        <img  className="loc-container-img" src="https://superkicks.in/wp-content/uploads/2022/04/APPAREL-F-850x1165.jpg" alt="Sneaker"/>
        </div>
          
        <div className="loc-container">
        <img  className="loc-container-img" src="https://superkicks.in/wp-content/uploads/2022/04/MAN-F-850x1165.jpg" alt="Sneaker"/>
        </div>
          
        <div className="loc-container">
        <img  className="loc-container-img" src="https://superkicks.in/wp-content/uploads/2022/04/WOMEN-850x1165.jpg" alt="Sneaker"/>
        </div>
        </div>
    </div>
    </>
  

  );
}

export default Home;
