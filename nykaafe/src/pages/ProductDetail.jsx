import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './stylespages/ProductDetail.css'

function ProductDetail() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartproduct')) || [])
    const [product, setProduct] = useState({})
    const token = localStorage.getItem('token');
    const location = useLocation();
    const { productH } = location.state || {};
    const productId = productH._id;

    // console.log(product)
    // console.log("cart",cart)

    const getAllProduct = async () => {
        try {
            const res = await fetch(`https://nykaa-7922.onrender.com/product/${productId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                credentials: "include"

            })
            if (res.ok) {
                const data = await res.json();
                setProduct(data.productdetail);
            } else {
                console.error(res.status);
            }
        } catch (error) {
            console.log(`error`)
        }
    }

    useEffect(() => {
        getAllProduct();
    }, [])

    const addProduct = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem('cartproduct', JSON.stringify(updatedCart));
    };

    return (
        <>
            {
                product ==''? (<div className="loader"></div>) : (
                    <div className='productdetail' key={product._id}>

                        <h1 className="product-title-detail">
                            <span>TITLE: </span> {product.title}
                        </h1>

                        <div className='productdetail-side'>

                            <img src={product.images} alt={product.title}
                                className="product-image" />

                            <div className="product-card-detail">

                                <p className="product-price-detail" style={{ textAlign: 'left' }}>
                                    <span>Price: </span> ${product.price} </p>

                                <p> <span>Discount: </span> {product.discount}%</p>

                                <p className="product-price-detail">
                                    <span>Amount: </span>
                                    {product.ml} ml</p>

                                <p> <span>Stock:</span> {product.stock}</p>

                                <p className="product-price-detail">
                                    <span>gender: </span>{product.gender}</p>

                                <p><span>Brand: </span>
                                    {product.brand_name}
                                </p>

                                <p className="product-price-detail">
                                    <span>Origin Country: </span>
                                    {product.origin_countery}
                                </p>
                                <p className="product-price-detail">
                                    <span>Category:</span>
                                    {product.category}
                                </p>
                                <p className="product-price-detail">
                                    <span>Sub Category</span>
                                    {product.subCategory}
                                </p>

                            </div>


                        </div>

                        <p className="product-price-detail">
                            <span>Description: </span>
                            {product.description}</p>

                        <button className="product-button"
                            onClick={() => addProduct(product)}
                        >Add to Cart</button>
                    </div>
                )}
        </>
    )
}

export default ProductDetail