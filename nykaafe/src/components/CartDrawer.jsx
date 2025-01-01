import React, { useState, useRef } from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import './stylecompo/cartdrawer.css';
import { MdDeleteOutline } from "react-icons/md";
import { IoCaretDownOutline } from "react-icons/io5";
import { IoCaretUpOutline } from "react-icons/io5";

function CartDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    const btnRef = useRef();
    const [totalPrice, setTotalPrice] = useState(0)
    const toggleDrawer = () => setIsOpen(!isOpen);

    const calculatePrice = (carts) => {
        const total = carts.reduce((total, product) => total + product.price * product.quantity, 0);
        setTotalPrice(Math.round(total))

    };

    const [cart, setCart] = useState(() => {
        const storedCart = JSON.parse(localStorage.getItem('cartproduct')) || [];
        const cartWithQuantity = storedCart.reduce((acc, item) => {
            const existingProduct = acc.find((product) => product._id === item._id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                acc.push({ ...item, quantity: 1 });
            }
            return acc;
        }, []);

        calculatePrice(cartWithQuantity);
        return cartWithQuantity;
    });


    // console.log("cart", cart)

    const deleteProduct = (id) => {
        console.log(id)
        const updatedCart = cart.filter((product) => id !== product._id);
        setCart(updatedCart);
        calculatePrice(updatedCart);
        localStorage.setItem('cartproduct', JSON.stringify(updatedCart));
        alert('product deleted')
    }

    const updateQuantity = (id, delta) => {
        const updatedCart = cart.map((product) => {
            if (product._id === id) {
                return { ...product, quantity: Math.max(product.quantity + delta, 1) };
            }
            return product;
        });
        setCart(updatedCart);
        calculatePrice(updatedCart);
        localStorage.setItem('cartproduct', JSON.stringify(updatedCart));
    };

    const buyAll = () => {
        // Clear the cart
        setCart([]);
        // Remove all products from localStorage
        localStorage.removeItem('cartproduct');
        // Display an alert
        alert("Thank you for your purchase! Please visit us again.");
        console.log("Cart cleared and purchase complete.");
    };

    return (
        <div className='cartdrawer' ref={btnRef}>
            <MdOutlineShoppingBag
                onClick={toggleDrawer}
                style={{ cursor: 'pointer', fontSize: '40px', fontWeight: 500 }}
            />

            {isOpen && (
                <div className='drawer'>
                    <div className='drawer_top'>
                        <button className='close-btn' onClick={toggleDrawer}> <FaArrowLeft /> </button>
                        <span style={{ fontWeight: 'bolder', fontSize: '20px', margin: "0px" }}> Bag  {cart.length} </span>
                        <span> items</span>
                    </div>

                    <div className='drawer-body'>
                        {
                            cart?.map((productH) => {
                                return (
                                    <div className="product-card_buy" key={productH._id}>

                                        <div className="product-card_detail">
                                            <span>
                                                <img src={productH.image} alt={productH.title.split('-')[0]} className="product-image_buy" />
                                            </span>
                                            <span className="product-title_buy">{productH.title.split('-')[0]}</span>
                                            <span className="product-title_buy">{productH.ml} ml</span>
                                            <span><MdDeleteOutline className='card_icon' onClick={() => deleteProduct(productH._id)} />  </span>
                                        </div>
                                        <div className="product-card_priceUpDown">
                                            <span> Quantity  <IoCaretUpOutline className='card_icon'
                                                onClick={() => updateQuantity(productH._id, 1)} />
                                                <span style={{ color: "#ea006f", fontWeight: 'bolder' }}> {productH.quantity}</span>
                                                <IoCaretDownOutline className='card_icon'
                                                    onClick={() => updateQuantity(productH._id, -1)} /></span>
                                            <span className="product-card_price">${productH.price}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='drawer-footer'>
                        <div className='cancel-btn'>Total ${totalPrice} </div>
                        <button className='btn save-btn'
                            onClick={() => buyAll()}
                        >Proceed</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartDrawer