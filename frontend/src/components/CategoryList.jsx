import React from 'react';

const CategoryList = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <nav className="category-nav">
            <button
                onClick={() => onSelectCategory(null)}
                className={!selectedCategory ? 'active' : ''}
            >
                All
            </button>
            {categories.map((category) => (
                <button
                    key={category._id}
                    onClick={() => onSelectCategory(category._id)}
                    className={selectedCategory === category._id ? 'active' : ''}
                >
                    {category.name}
                </button>
            ))}
        </nav>
    );
};

export default CategoryList;