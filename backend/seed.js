// =================================================================
// QR-Based Ordering System - Database Seeding Script
// =================================================================
// To run: mongosh restaurantDB < seed.js
// =================================================================

// Switch to the correct database
db = db.getSiblingDB('restaurantDB');

print("--------------------------------------------------");
print("-> Clearing existing data...");
db.menuitems.deleteMany({});
db.categories.deleteMany({});
db.orders.deleteMany({}); // Optional: clear old orders too

// --------------------------------------------------
// 1. Insert Categories
// --------------------------------------------------
print("-> Inserting categories...");
db.categories.insertMany([
    { name: 'Appetizers' },
    { name: 'Main Courses' },
    { name: 'Desserts' },
    { name: 'Beverages' },
    { name: 'Salads' }
]);

print("-> Categories inserted successfully.");

// --------------------------------------------------
// 2. Fetch Category IDs to link with Menu Items
// --------------------------------------------------
const categories = db.categories.find().toArray();
const categoryMap = {};
categories.forEach(cat => {
    categoryMap[cat.name] = cat._id;
});

print("-> Category map created for linking.");

// --------------------------------------------------
// 3. Insert Menu Items
// --------------------------------------------------
print("-> Inserting menu items...");
db.menuitems.insertMany([
    // Appetizers
    {
        name: 'Bruschetta',
        description: 'Grilled bread topped with garlic, diced tomatoes, olive oil, and fresh basil.',
        price: 8.99,
        category: categoryMap['Appetizers'],
        imageUrl: 'https://images.unsplash.com/photo-1579631542720-3a83835978b4?w=500'
    },
    {
        name: 'Spinach Artichoke Dip',
        description: 'A creamy blend of spinach, artichoke hearts, and cheese, served with tortilla chips.',
        price: 10.50,
        category: categoryMap['Appetizers'],
        imageUrl: 'https://images.unsplash.com/photo-1623961202813-2901a45a3f3a?w=500'
    },
    {
        name: 'Garlic Knots',
        description: 'Soft, buttery bread knots baked with garlic, parsley, and parmesan cheese.',
        price: 6.99,
        category: categoryMap['Appetizers'],
        imageUrl: 'https://images.unsplash.com/photo-1627435343444-24584a7c067e?w=500'
    },

    // Main Courses
    {
        name: 'Margherita Pizza',
        description: 'Classic pizza with fresh mozzarella, San Marzano tomatoes, fresh basil, salt and extra-virgin olive oil.',
        price: 14.00,
        category: categoryMap['Main Courses'],
        imageUrl: 'https://images.unsplash.com/photo-1598021680133-eb3a128a4734?w=500'
    },
    {
        name: 'Spaghetti Carbonara',
        description: 'A classic Roman pasta dish with eggs, Pecorino Romano cheese, pancetta, and black pepper.',
        price: 16.50,
        category: categoryMap['Main Courses'],
        imageUrl: 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=500'
    },
    {
        name: 'Grilled Salmon',
        description: 'Perfectly grilled salmon fillet served with roasted asparagus and a lemon-dill sauce.',
        price: 22.00,
        category: categoryMap['Main Courses'],
        imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500'
    },
    {
        name: 'Beyond Burger',
        description: 'A juicy plant-based patty on a brioche bun with lettuce, tomato, onion, and our special sauce.',
        price: 15.50,
        category: categoryMap['Main Courses'],
        imageUrl: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500'
    },

    // Desserts
    {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with a gooey molten center, served with a scoop of vanilla ice cream.',
        price: 9.50,
        category: categoryMap['Desserts'],
        imageUrl: 'https://images.unsplash.com/photo-1586985289936-e3a72b5b386a?w=500'
    },
    {
        name: 'Classic Tiramisu',
        description: 'Layers of coffee-soaked ladyfingers and a rich, creamy mascarpone mixture, dusted with cocoa powder.',
        price: 8.00,
        category: categoryMap['Desserts'],
        imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'
    },
    
    // Beverages
    {
        name: 'Fresh Lemonade',
        description: 'House-made lemonade, perfectly sweet and tart.',
        price: 3.50,
        category: categoryMap['Beverages'],
        imageUrl: 'https://images.unsplash.com/photo-1595981266689-002395f133d1?w=500'
    },
    {
        name: 'Iced Tea',
        description: 'Freshly brewed black tea, served chilled over ice.',
        price: 3.00,
        category: categoryMap['Beverages'],
        imageUrl: 'https://images.unsplash.com/photo-1556679343-b7f4b827367c?w=500'
    },
    {
        name: 'Espresso',
        description: 'A single, strong shot of premium roasted coffee.',
        price: 2.75,
        category: categoryMap['Beverages'],
        imageUrl: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=500'
    },
    
    // Salads
    {
        name: 'Caesar Salad',
        description: 'Crisp romaine lettuce, parmesan cheese, and crunchy croutons tossed in a creamy Caesar dressing.',
        price: 11.00,
        category: categoryMap['Salads'],
        imageUrl: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500'
    },
    {
        name: 'Greek Salad',
        description: 'Tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese with a light vinaigrette.',
        price: 12.50,
        category: categoryMap['Salads'],
        imageUrl: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=500'
    }
]);

print("-> Menu items inserted successfully.");

// --------------------------------------------------
// 4. Final Verification
// --------------------------------------------------
const categoryCount = db.categories.countDocuments();
const menuItemCount = db.menuitems.countDocuments();

print("--------------------------------------------------");
print(`Seeding Complete!`);
print(`-> ${categoryCount} categories inserted.`);
print(`-> ${menuItemCount} menu items inserted.`);
print("--------------------------------------------------");