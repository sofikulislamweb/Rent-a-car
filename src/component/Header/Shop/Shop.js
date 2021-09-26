import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ShowRoom from '../ShowRoom/ShowRoom';

const Shop = () => {
    const [vehicles, setVehicles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('vehicle.JSON')
            .then(res => res.json())
            .then(data => setVehicles(data))
    }, [])
    const handleCart = (car) => {
        const newCart = [...cart, car];
        setCart(newCart);
    }
    return (
        <div className='row mt-4'>
            <div className="col-md-9">
                <div className="row m-3">
                    {
                        vehicles.map(car => <ShowRoom
                            key={car.id}
                            car={car}
                            handleCart={handleCart}
                        ></ShowRoom>)
                    }
                </div>

            </div>
            <div className="col-md-3 mt-4">
                <Cart cart={cart}>

                </Cart>

            </div>
        </div>
    );
};

export default Shop;