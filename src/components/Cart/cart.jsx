import React from "react";

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) => {
    console.log(cartItems)

    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price, 0
    );


    const AlertHandle = () => {
        if (cartItems.length === 0) {
            alert("Please add some sneakers!");
        } else {
            alert("Shop Again!");
        }
    }


    return (
        <div className="cart-items-con">

            <div className="cart-upper-con">
                {cartItems.length === 0 && <h3 className="cart-header flex-start">Cart is empty please select items</h3>}
                {cartItems.length != 0 && <h3 className="cart-header flex-start">Cart  </h3>}

                <div className="clear-cart flex-end">
                {cartItems.length != 0 && <button className=" trash" onClick={handleCartClearance}><i className="fas fa-trash"></i></button>}
                </div>
            </div>

            
            {/* CART CARD SECTION */}

            <div id="Main-page row">
                <div className="row main-con">
                    {cartItems.map((item) => (


                        <div key={item.id} className="">

                            <>
                                <div className="pro-card ">

                                    <div className="pro-card-top">
                                        <h3 className="pro-card-heading">
                                            <img className="shoeimage" src={item.image} alt={item.name}></img>
                                        </h3>
                                    </div>

                                    <div className="pro-card-bottom">

                                        <div className="pro-card-head-con">

                                            <div className="cart-item-name"><h4>{item.name}</h4></div>

                                            <div className="cart-function">
                                                <div className="cart-Quantity">Quantity : {item.quantity}</div>
                                                <div className="cart-card-quantity">
                                                    <button onClick={() => handleAddProduct(item)} className="add">
                                                        <i className="fas fa-plus" ></i>
                                                    </button>
                                                    <button onClick={() => handleRemoveProduct(item)} className="sub">
                                                        <i className="fas fa-minus"></i>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="pro-card-link-con row">
                                            <div style={{ padding: "0 15px 0" }} className="card-item-price">Sub total :  ${item.price}</div>
                                        </div>

                                    </div>
                                </div>
                            </>

                        </div>
                    ))}
                </div>
            </div>

            {/* TOTAL PRICE SECTION */}
            <>
                <div className="total-price-con">
                    <h3 className="total-price">
                        Total : ${totalPrice}
                    </h3>
                </div>
                <div className="total-price-con">
                    <h3 className="total-price">
                        <button onClick={AlertHandle} style={{ textDecoration: "none", border: "none", padding: "5px 30px", borderRadius: "18px" }}>Buy</button>
                    </h3>
                </div>
            </>

        </div>
    );
}

export default Cart;

