const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const MenuItem = require('./models/MenuItem');

// Load env vars
dotenv.config();

// Connect to DB
mongoose.connect(process.env.MONGO_URI);

// --- DUMMY DATA ---
const categoriesData = [
    { name: 'Appetizers' },
    { name: 'Main Courses' },
    { name: 'Pizzas' },
    { name: 'Desserts' },
    { name: 'Beverages' }
];

const menuItemsData = [
    // --- Appetizers ---
    {
        name: 'Bruschetta',
        description: 'Grilled bread topped with garlic, diced tomatoes, olive oil, and fresh basil.',
        price: 350,
        category: 'Appetizers',
        imageUrl: 'https://images.unsplash.com/photo-1579631542720-3a83835978b4?w=500',
        estimatedPrepTime: 10
    },
    {
        name: 'Spinach Artichoke Dip',
        description: 'A creamy blend of spinach, artichoke hearts, and cheese, served with tortilla chips.',
        price: 450,
        category: 'Appetizers',
        imageUrl: 'https://images.unsplash.com/photo-1623961202813-2901a45a3f3a?w=500',
        estimatedPrepTime: 15
    },
    {
        name: 'Garlic Bread with Cheese',
        description: 'Toasted French bread with garlic butter, mozzarella, and a side of marinara sauce.',
        price: 300,
        category: 'Appetizers',
        imageUrl: 'https://images.unsplash.com/photo-1627435343444-24584a7c067e?w=500',
        estimatedPrepTime: 12
    },
    {
        name: 'Crispy Calamari',
        description: 'Lightly fried calamari rings served with a spicy aioli and lemon wedges.',
        price: 550,
        category: 'Appetizers',
        imageUrl: 'https://images.unsplash.com/photo-1549615482-18a5853c48a1?w=500',
        estimatedPrepTime: 15
    },
    // --- Main Courses ---
    {
        name: 'Grilled Salmon',
        description: 'Perfectly grilled salmon fillet served with roasted asparagus and a lemon-dill sauce.',
        price: 850,
        category: 'Main Courses',
        imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500',
        estimatedPrepTime: 20
    },
    {
        name: 'Chicken Alfredo',
        description: 'Fettuccine pasta tossed in a creamy parmesan sauce with grilled chicken breast.',
        price: 650,
        category: 'Main Courses',
        imageUrl: 'https://images.unsplash.com/photo-1621996346565-e326e20f4423?w=500',
        estimatedPrepTime: 18
    },
    {
        name: 'Spaghetti Carbonara',
        description: 'A classic Roman pasta dish with eggs, Pecorino Romano cheese, pancetta, and black pepper.',
        price: 600,
        category: 'Main Courses',
        imageUrl: 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=500',
        estimatedPrepTime: 20
    },
    {
        name: 'Vegetable Biryani',
        description: 'Aromatic basmati rice cooked with mixed vegetables and fragrant spices, served with raita.',
        price: 500,
        category: 'Main Courses',
        imageUrl: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8e2a?w=500',
        estimatedPrepTime: 25
    },
    {
        name: 'Paneer Butter Masala',
        description: 'Cottage cheese cubes in a rich, creamy tomato and cashew gravy.',
        price: 550,
        category: 'Main Courses',
        imageUrl: 'https://images.unsplash.com/photo-1565557623262-b91c2512a685?w=500',
        estimatedPrepTime: 22
    },
    // --- Pizzas ---
    {
        name: 'Margherita Pizza',
        description: 'Classic pizza with fresh mozzarella, San Marzano tomatoes, and fresh basil.',
        price: 550,
        category: 'Pizzas',
        imageUrl: 'https://images.unsplash.com/photo-1598021680133-eb3a128a4734?w=500',
        estimatedPrepTime: 20
    },
    {
        name: 'Pepperoni Pizza',
        description: 'A crowd favorite with a generous layer of spicy pepperoni and mozzarella cheese.',
        price: 650,
        category: 'Pizzas',
        imageUrl: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500',
        estimatedPrepTime: 20
    },
    {
        name: 'Veggie Supreme Pizza',
        description: 'Loaded with bell peppers, onions, olives, mushrooms, and sweet corn.',
        price: 600,
        category: 'Pizzas',
        imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500',
        estimatedPrepTime: 22
    },
    {
        name: 'BBQ Chicken Pizza',
        description: 'Tangy BBQ sauce, grilled chicken, red onions, and cilantro on a perfect crust.',
        price: 700,
        category: 'Pizzas',
        imageUrl: 'https://images.unsplash.com/photo-1566843972142-a7fcb708652d?w=500',
        estimatedPrepTime: 25
    },
    // --- Desserts ---
    {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.',
        price: 350,
        category: 'Desserts',
        imageUrl: 'https://images.unsplash.com/photo-1586985289936-e3a72b5b386a?w=500',
        estimatedPrepTime: 15
    },
    {
        name: 'Classic Tiramisu',
        description: 'Layers of coffee-soaked ladyfingers and a rich, creamy mascarpone mixture.',
        price: 320,
        category: 'Desserts',
        imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500',
        estimatedPrepTime: 10
    },
    {
        name: 'New York Cheesecake',
        description: 'A rich and creamy cheesecake with a graham cracker crust, topped with berry compote.',
        price: 380,
        category: 'Desserts',
        imageUrl: 'https://images.unsplash.com/photo-1567327683439-d476a30b7352?w=500',
        estimatedPrepTime: 8
    },
    {
        name: 'Gulab Jamun',
        description: 'Soft, melt-in-your-mouth deep-fried dough balls soaked in a sweet, sticky syrup.',
        price: 250,
        category: 'Desserts',
        imageUrl: 'https://images.unsplash.com/photo-1631206753348-db44967fd133?w=500',
        estimatedPrepTime: 5
    },
    // --- Beverages ---
    {
        name: 'Fresh Lime Soda',
        description: 'A refreshing mix of fresh lime juice, soda, and a hint of mint. Sweet or salted.',
        price: 150,
        category: 'Beverages',
        imageUrl: 'https://images.unsplash.com/photo-1595981266689-002395f133d1?w=500',
        estimatedPrepTime: 3
    },
    {
        name: 'Classic Cold Coffee',
        description: 'A thick and creamy cold coffee shake, blended to perfection.',
        price: 220,
        category: 'Beverages',
        imageUrl: 'https://images.unsplash.com/photo-1556679343-b7f4b827367c?w=500',
        estimatedPrepTime: 5
    },
    {
        name: 'Masala Chai',
        description: 'Traditional Indian tea brewed with aromatic spices and milk.',
        price: 120,
        category: 'Beverages',
        imageUrl: 'https://images.unsplash.com/photo-1594583424847-4fa973272d5f?w=500',
        estimatedPrepTime: 7
    },
    {
        name: 'Espresso',
        description: 'A single, strong shot of premium roasted coffee.',
        price: 180,
        category: 'Beverages',
        imageUrl: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=500',
        estimatedPrepTime: 2
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