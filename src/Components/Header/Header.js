import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="container">
                <div className='header-area'>
                    <h1 className="title">Help Poverty People</h1>
                    <p className="description">There are several definitions of poverty depending on the context of the situation it is placed in, and usually references a state or condition in which a person or community lacks the financial resources and essentials for a certain standard of living.</p>
                    <h3> Total Budget : <span className="budget-amount">5 Million</span> </h3>
                </div>
            </div>
        </div>
    );
};

export default Header;