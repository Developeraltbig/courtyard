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

    if (loading) return <div className="loading">Loading Menu...</div>;

    return (
        <div className="app-container">
            <Header tableNumber={tableNumber} />
            <main className="main-content">
                <div className="menu-section">
                    <CategoryList
                        categories={menu.categories}
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                    />
                    <div className="menu-grid">
                        {filteredMenuItems.map(item => (
                            <MenuItem key={item._id} item={item} />
                        ))}
                    </div>
                </div>
                <Cart />
            </main>
        </div>
    );
};

export default MenuPage;