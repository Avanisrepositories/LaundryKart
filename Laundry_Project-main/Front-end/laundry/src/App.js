import React from "react";
import { Route, Routes } from 'react-router-dom';
import Login from "./routes/Login.jsx";
import Register from "./routes/Register";
import Footer from "./Footer";
import Navbar from "./Navbar.jsx";
import Order from "./routes/Order.jsx";
import TakeOrders from "./routes/TakeOrders.jsx";
import Pricing from "./routes/Pricing";  // Import the Pricing component
import Career from "./routes/Career";  // Import the Career component
import { useState, useEffect } from "react";

const App = () => {
    const [navVariable, setNavVariable] = useState("Register");
    const [path, setPath] = useState("/register");
    const [ordersList, setOrders] = useState([]);
    const [ordersLen, setOrderslen] = useState(0);

    const setOrds = (list) => {
        setOrders(list);
    }

    const addOrds = (list) => {
        setOrders(prevOrds => {
            return ([list, ...prevOrds]);
        });
    }

    useEffect(() => {
        setOrderslen(ordersList.length);
    }, [ordersList]);

    const setNav = () => {
        const loc = window.location.pathname;
        if (loc === "/" || loc === "/login") {
            setNavVariable("Register");
            setPath("/register");
        }
        else if (loc === "/orders") {
            setNavVariable(localStorage.getItem('userName'));
            setPath("/orders");
        }
        else {
            setNavVariable("Sign up");
            setPath("/login");
        }
    }

    return (
        <>
            <Navbar navVariable={navVariable} change={() => { setNav() }} path={path}></Navbar>
            <Routes>
                <Route path="/" element={<Login path={path} navVariable={navVariable} setOrd={(arr) => { setOrds(arr) }} change={() => { setNav() }} />} />
                <Route path="/login" element={<Login path={path} navVariable={navVariable} setOrd={(arr) => { setOrds(arr) }} change={() => { setNav() }} />} />
                <Route path="/register" element={<Register path={path} navVariable={navVariable} change={() => { setNav() }} />} />
                <Route path="/orders" element={<Order ordersList={ordersList} len={ordersLen} setOrd={(arr) => { setOrds(arr) }} />} />
                <Route path="/orders/placeorder" element={<TakeOrders ordersList={ordersList} len={ordersLen} setOrd={(arr) => { addOrds(arr) }} />} />
                <Route path="/pricing" element={<Pricing />} /> {/* Add Pricing route */}
                <Route path="/career" element={<Career />} /> {/* Add Career route */}
            </Routes>
            <Footer />
        </>
    );
}

export default App;
