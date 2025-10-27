import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMenu } from '../services/api';
import Header from '../components/Header';
import CategoryList from '../components/CategoryList';
import MenuItem from '../components/MenuItem';
import Cart from '../components/Cart';

const MenuPage = () => {
    const { tableNumber } = useParams();
    const [menu, setMenu] = useState({ categories: [], menuItems: [] });
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMenu = async () => {
            try {
                const response = await fetchMenu();
                setMenu(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch menu:", error);
                setLoading(false);
            }
        };
        loadMenu();
    }, []);

    const filteredMenuItems = selectedCategory
        ? menu.menuItems.filter(item => item.category._id === selected_category)
        : menu.menuItems;

        if (loading) return <div className="d-flex justify-content-center align-items-center vh-100"><h2>Loading Menu...</h2></div>;

    return (
        <div style={{ backgroundColor: '#fdf6f2', minHeight: '100vh' }}>
            <Header tableNumber={tableNumber} />
            <div className="container-fluid p-4">
                <div className="row">
                    {/* Menu Section */}
                    <div className="col-lg-8">
                        <CategoryList
                            categories={menu.categories}
                            selectedCategory={selectedCategory}
                            onSelectCategory={setSelectedCategory}
                        />
                        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                            {filteredMenuItems.map(item => (
                                <MenuItem key={item._id} item={item} />
                            ))}
                        </div>
                    </div>

                    {/* Cart Section */}
                    <div className="col-lg-4">
                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuPage;