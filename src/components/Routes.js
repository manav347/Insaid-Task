import React from "react";
import Products from "./Products/Products"
import Home from './home';
import Cart from "./Cart/cart";
import { Route, Switch } from "react-router";

const Routes = ({productItems ,cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
    return(
        <>
        <div className="routes-con"></div>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                    <Products productItems={productItems} handleAddProduct={handleAddProduct}/>
                </Route>
                <Route path="/Cart" exact>
                    <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>
                </Route>
            </Switch>
        </>
    );
}

export default Routes;
