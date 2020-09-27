import React, { Component } from 'react'
import products from './ipadData.json'
import { AppContext } from "../Context/AppContext"

export default class Products extends Component {
    handleAddToCart =(id)=>{
        const { addToCart , cartProducts} = this.context;
        let filteredProducts = products.filter(e=>e.id === id)
        console.log(cartProducts)
        let productExist = cartProducts.filter(e=>e.id === id)
        console.log(productExist)
        if(productExist.length){
            alert('Already Added')
        }
        else{
            addToCart(filteredProducts[0])
        }
        
    }
    
    render() {
        return (
            <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 col-12">
                        <img src={this.props.img} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="row">
                            <h2>{this.props.name}</h2>
                        </div>
                        <div className="row">
                            <p className="lead">${this.props.price}</p>
                        </div>
                        <div className="row">
                            <h3>Description</h3>
                            <p>{this.props.description}</p>
                        </div>
                        <button className="btn btn-primary btn-block" onClick={()=>this.handleAddToCart(this.props.id)}>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

Products.contextType = AppContext;