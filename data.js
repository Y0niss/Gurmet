const menuItems = [
    // ===== BURGERS =====
    {
        id: 1,
        name: "Cheese Burger",
        category: "food",
        subCategory: "burgers",
        price: 45,
        description: "Juicy beef patty with cheddar cheese, fresh lettuce, tomato, and our special signature sauce.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985012/cheese-burger.jpg",
        rating: 4.5,
        isPopular: true
    },
    {
        id: 2,
        name: "Beef Burger",
        category: "food",
        subCategory: "burgers",
        price: 40,
        description: "Classic beef burger with caramelized onions, smoked BBQ sauce, and crispy bacon.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985008/beef-burger.jpg",
        rating: 4.2,
        isPopular: false
    },
    {
        id: 3,
        name: "Chicken Burger",
        category: "food",
        subCategory: "burgers",
        price: 38,
        description: "Grilled chicken breast topped with avocado, garlic mayo, and fresh arugula.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985013/chicken-burger.jpg",
        rating: 4.0,
        isPopular: false
    },
    {
        id: 4,
        name: "Double Cheese Burger",
        category: "food",
        subCategory: "burgers",
        price: 55,
        description: "Two beef patties with double cheddar, pickles, onions, and mustard.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985008/double-cheese.jpg",
        rating: 4.8,
        isPopular: true
    },

    // ===== PIZZA =====
    {
        id: 5,
        name: "Margherita Pizza",
        category: "food",
        subCategory: "pizza",
        price: 55,
        description: "Classic Italian pizza with tomato sauce, fresh mozzarella, basil leaves, and olive oil.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985012/margreta.jpg",
        rating: 4.8,
        isPopular: true
    },
    {
        id: 6,
        name: "Pepperoni Pizza",
        category: "food",
        subCategory: "pizza",
        price: 60,
        description: "Loaded with pepperoni, mozzarella cheese, and spicy tomato sauce.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985013/peproni.jpg",
        rating: 4.6,
        isPopular: true
    },
    {
        id: 7,
        name: "Veggie Pizza",
        category: "food",
        subCategory: "pizza",
        price: 50,
        description: "Bell peppers, mushrooms, olives, red onions, and fresh tomatoes on a crispy crust.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985015/viggie.jpg",
        rating: 4.3,
        isPopular: false
    },
    {
        id: 8,
        name: "BBQ Chicken Pizza",
        category: "food",
        subCategory: "pizza",
        price: 62,
        description: "Grilled chicken, BBQ sauce, red onions, cilantro, and mozzarella cheese.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985013/BBQ.jpg",
        rating: 4.4,
        isPopular: false
    },

    // ===== PASTA =====
    {
        id: 9,
        name: "Carbonara Pasta",
        category: "food",
        subCategory: "pasta",
        price: 48,
        description: "Creamy pasta with crispy bacon, parmesan cheese, egg yolk, and black pepper.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985011/carbonara.jpg",
        rating: 4.7,
        isPopular: true
    },
    {
        id: 10,
        name: "Bolognese Pasta",
        category: "food",
        subCategory: "pasta",
        price: 42,
        description: "Rich beef and tomato meat sauce with herbs, served over spaghetti.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985009/bolognese.jpg",
        rating: 4.4,
        isPopular: false
    },
    {
        id: 11,
        name: "Alfredo Pasta",
        category: "food",
        subCategory: "pasta",
        price: 44,
        description: "Fettuccine in creamy parmesan and garlic sauce with fresh parsley.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985003/alfredo.jpg",
        rating: 4.1,
        isPopular: false
    },
    {
        id: 12,
        name: "Pesto Pasta",
        category: "food",
        subCategory: "pasta",
        price: 46,
        description: "Penne pasta with basil pesto, pine nuts, parmesan, and cherry tomatoes.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985014/pesto.jpg",
        rating: 4.3,
        isPopular: false
    },

    // ===== SOFT DRINKS =====
    {
        id: 13,
        name: "Cola",
        category: "drink",
        subCategory: "soft-drinks",
        price: 10,
        description: "Classic carbonated cola drink served with ice and lemon.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985007/cola.jpg",
        rating: 4.0,
        isPopular: true
    },
    {
        id: 14,
        name: "Sprite",
        category: "drink",
        subCategory: "soft-drinks",
        price: 10,
        description: "Lemon-lime carbonated soda, crisp and refreshing.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985014/sprite.jpg",
        rating: 3.8,
        isPopular: false
    },
    {
        id: 15,
        name: "Fanta",
        category: "drink",
        subCategory: "soft-drinks",
        price: 10,
        description: "Orange flavored carbonated drink with a fruity taste.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985008/fanta.jpg",
        rating: 3.9,
        isPopular: false
    },
    {
        id: 16,
        name: "Root Beer",
        category: "drink",
        subCategory: "soft-drinks",
        price: 12,
        description: "Classic root beer with vanilla and caramel notes.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985009/beer.jpg",
        rating: 4.1,
        isPopular: false
    },

    // ===== HOT DRINKS =====
    {
        id: 17,
        name: "Coffee",
        category: "drink",
        subCategory: "hot-drinks",
        price: 15,
        description: "Freshly brewed black coffee made from 100% Arabica beans.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985006/coffee.jpg",
        rating: 4.2,
        isPopular: true
    },
    {
        id: 18,
        name: "Cappuccino",
        category: "drink",
        subCategory: "hot-drinks",
        price: 18,
        description: "Espresso with steamed milk, thick foam, and a sprinkle of cocoa.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985009/cappuccino.jpg",
        rating: 4.5,
        isPopular: true
    },
    {
        id: 19,
        name: "Latte",
        category: "drink",
        subCategory: "hot-drinks",
        price: 17,
        description: "Smooth espresso with creamy steamed milk and a light layer of foam.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985010/latte.jpg",
        rating: 4.3,
        isPopular: false
    },
    {
        id: 20,
        name: "English Tea",
        category: "drink",
        subCategory: "hot-drinks",
        price: 12,
        description: "Classic English breakfast tea served with milk and sugar on the side.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985014/tea.jpg",
        rating: 4.0,
        isPopular: false
    },

    // ===== JUICES =====
    {
        id: 21,
        name: "Orange Juice",
        category: "drink",
        subCategory: "juices",
        price: 12,
        description: "Freshly squeezed orange juice, packed with vitamin C.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985013/orange-juice.jpg",
        rating: 4.3,
        isPopular: false
    },
    {
        id: 22,
        name: "Apple Juice",
        category: "drink",
        subCategory: "juices",
        price: 12,
        description: "100% pure pressed apple juice, sweet and crisp.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985004/apple-juice.jpg",
        rating: 4.1,
        isPopular: false
    },
    {
        id: 23,
        name: "Mango Juice",
        category: "drink",
        subCategory: "juices",
        price: 14,
        description: "Rich and creamy mango juice made from fresh Alphonso mangoes.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985012/mango-juice.jpg",
        rating: 4.6,
        isPopular: true
    },
    {
        id: 24,
        name: "Strawberry Juice",
        category: "drink",
        subCategory: "juices",
        price: 14,
        description: "Refreshing strawberry juice with natural sweetness.",
        image: "https://res.cloudinary.com/o4uwuwtd/image/upload/v1793985014/strawberry-juice.jpg",
        rating: 4.4,
        isPopular: false
    }
];