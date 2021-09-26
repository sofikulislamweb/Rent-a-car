import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ShowRoom.css';
const ShowRoom = (props) => {
    const { name, madein, price, img, color, body } = props.car;
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className="col-4 single-column mt-1">
            <div className="card-group ">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="text-success">Name: {name}</h4>
                        <h5>Orgin: {madein}</h5>
                        <p >Color: {color}</p>
                        <p >Body: {body}</p>
                        <h6>Price: {price} $</h6>
                        <button onClick={() => props.handleCart(props.car)} className='btn btn-success'>{shoppingCart} Add to cart</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShowRoom;