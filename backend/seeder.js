const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const MenuItem = require('./models/MenuItem');

// Load env vars
dotenv.config();

// Connect to DB
mongoose.connect(process.env.MONGO_URI);

// --- FAKE DATA ---
const categoriesData = [
    { name: 'Appetizers' },
    { name: 'Main Courses' },
    { name: 'Desserts' },
    { name: 'Beverages' },
    { name: 'Salads' }
];

const menuItemsData = [
    {
        name: 'Bruschetta',
        description: 'Grilled bread topped with garlic, diced tomatoes, olive oil, and fresh basil.',
        price: 8.99,
        category: 'Appetizers', // We'll link this by name
        imageUrl: 'https://images.unsplash.com/photo-1579631542720-3a83835978b4?w=500'
    },
    {
        name: 'Spinach Artichoke Dip',
        description: 'A creamy blend of spinach, artichoke hearts, and cheese, served with tortilla chips.',
        price: 10.50,
        category: 'Appetizers',
        imageUrl: 'https://images.unsplash.com/photo-1623961202813-2901a45a3f3a?w=500'
    },
    {
        name: 'Margherita Pizza',
        description: 'Classic pizza with fresh mozzarella, San Marzano tomatoes, and fresh basil.',
        price: 14.00,
        category: 'Main Courses',
        imageUrl: 'https://images.unsplash.com/photo-1598021680133-eb3a128a4734?w=500'
    },
    {
        name: 'Spaghetti Carbonara',
        description: 'A classic Roman pasta dish with eggs, Pecorino Romano cheese, and pancetta.',
        price: 16.50,
        category: 'Main Courses',
        imageUrl: 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=500'
    },
    {
        name: 'Grilled Salmon',
        description: 'Perfectly grilled salmon fillet served with roasted asparagus and a lemon-dill sauce.',
        price: 22.00,
        category: 'Main Courses',
        imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500'
    },
    {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.',
        price: 9.50,
        category: 'Desserts',
        imageUrl: 'https://images.unsplash.com/photo-1586985289936-e3a72b5b386a?w=500'
    },
    {
        name: 'Classic Tiramisu',
        description: 'Layers of coffee-soaked ladyfingers and a rich, creamy mascarpone mixture.',
        price: 8.00,
        category: 'Desserts',
        imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'
    },
    {
        name: 'Fresh Lemonade',
        description: 'House-made lemonade, perfectly sweet and tart.',
        price: 3.50,
        category: 'Beverages',
        imageUrl: 'https://images.unsplash.com/photo-1595981266689-002395f133d1?w=500'
    },
    {
        name: 'Caesar Salad',
        description: 'Crisp romaine lettuce, parmesan cheese, and croutons tossed in Caesar dressing.',
        price: 11.00,
        category: 'Salads',
        imageUrl: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500'
    }
];

// --- SCRIPT FUNCTIONS ---

// Import data into DB
const importData = async () => {
    try {
        // Clear existing data
        await Category.deleteMany();
        await MenuItem.deleteMany();
        
        console.log('Data destroyed...');

        // Insert categories and get them back with their new _id's
        const createdCategories = await Category.insertMany(categoriesData);
        console.log('Categories imported...');

        // Create a map of category names to their new _id's
        const categoryMap = createdCategories.reduce((map, category) => {
            map[category.name] = category._id;
            return map;
        }, {});

        // Add the correct category _id to each menu item
        const menuItemsToInsert = menuItemsData.map(item => {
            return { ...item, category: categoryMap[item.category] };
        });

        await MenuItem.insertMany(menuItemsToInsert);
        console.log('Menu Items imported...');

        console.log('\n✅ Data Imported Successfully!');
        process.exit();
    } catch (err) {
        console.error(`❌ ERROR: ${err}`);
        process.exit(1);
    }
};

// Destroy data from DB
const destroyData = async () => {
    try {
        await Category.deleteMany();
        await MenuItem.deleteMany();
        console.log('✅ Data Destroyed Successfully!');
        process.exit();
    } catch (err) {
        console.error(`❌ ERROR: ${err}`);
        process.exit(1);
    }
};

// Logic to run the correct function based on command-line arguments
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}