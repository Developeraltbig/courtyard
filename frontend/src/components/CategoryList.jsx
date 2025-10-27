import React from 'react';

const CategoryList = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <nav className="mb-4">
            <button
                onClick={() => onSelectCategory(null)}
                className={`btn me-2 ${!selectedCategory ? 'btn-danger' : 'btn-outline-secondary'}`}
            >
                All
            </button>
            {categories.map((category) => (
                <button
                    key={category._id}
                    onClick={() => onSelectCategory(category._id)}
                    className={`btn me-2 ${selectedCategory === category._id ? 'btn-danger' : 'btn-outline-secondary'}`}
                >
                    {category.name}
                </button>
            ))}
        </nav>
    );
};

export default CategoryList;