import React from 'react';
import MenuItems from '../Components/MenuItems';
import Tittle from '../Components/Tittle';
import portfolios from '../Components/allprojects';
import { useState } from 'react';

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

function PortfoliosPage() {
    const [menuItems, setMenuItems] = useState(portfolios);

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Tittle title={'Projects'} span={'portfolios'} />
            </div>
            <div className="portfolios-data">
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default PortfoliosPage;
