// Product Types
export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  description: string;
  image: string;
  gallery?: string[];
  category: string;
  tags?: string[];
  rating: number;
  reviews?: number;
  stock: number;
  featured?: boolean;
  new?: boolean;
  color?: string;
  size?: string;
  detailedDescription?: string;
  specifications?: Record<string, string>;
}

// Sample Products Data
export const products: Product[] = [
  {
    id: "p1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    oldPrice: 349.99,
    description: "Experience crystal-clear sound with our premium wireless headphones featuring active noise cancellation.",
    detailedDescription: "Immerse yourself in audio perfection with our latest wireless headphones. Featuring state-of-the-art active noise cancellation technology, these headphones block out external distractions allowing you to focus on what matters most—your music, podcasts, or calls. With a battery life of up to 30 hours, you can enjoy uninterrupted listening all day long. The premium memory foam ear cushions provide exceptional comfort for extended wear, while the sleek, minimalist design adds a touch of sophistication to your everyday tech accessories.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
    ],
    category: "Electronics",
    tags: ["wireless", "headphones", "audio", "noise-cancellation"],
    rating: 4.7,
    reviews: 128,
    stock: 15,
    featured: true,
    specifications: {
      "Bluetooth Version": "5.2",
      "Battery Life": "30 hours",
      "Charging Time": "2 hours",
      "Driver Size": "40mm",
      "Weight": "250g",
      "Colors Available": "Black, White, Navy"
    }
  },
  {
    id: "p2",
    name: "Smart Watch Series 5",
    price: 399.99,
    description: "Stay connected and monitor your health with this sleek smartwatch featuring advanced fitness tracking and notifications.",
    detailedDescription: "The Smart Watch Series 5 is your personal health companion and communication hub, all accessible from your wrist. Track your daily activity, monitor your heart rate continuously, and analyze your sleep patterns for improved wellness insights. The always-on Retina display ensures you can check the time and notifications without raising your wrist. Water-resistant up to 50 meters, it's perfect for swimming and intense workouts. With cellular capabilities, you can make calls and send texts even without your phone nearby.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
    ],
    category: "Electronics",
    tags: ["smartwatch", "fitness", "health", "tech"],
    rating: 4.5,
    reviews: 89,
    stock: 22,
    new: true,
    specifications: {
      "Display": "1.78-inch OLED",
      "Processor": "S5 Dual-core",
      "Water Resistance": "50 meters",
      "Battery Life": "18 hours",
      "Sensors": "Heart rate, ECG, accelerometer, gyroscope",
      "Connectivity": "Bluetooth 5.0, Wi-Fi, LTE (optional)"
    }
  },
  {
    id: "p3",
    name: "Minimalist Desk Lamp",
    price: 89.99,
    oldPrice: 119.99,
    description: "Elegant desk lamp with adjustable brightness and color temperature, perfect for your workspace.",
    detailedDescription: "Transform your workspace with our Minimalist Desk Lamp, designed to provide optimal lighting while complementing your modern aesthetic. The lamp features touch-sensitive controls that allow you to adjust brightness through five levels and color temperature from warm to cool white. The flexible, adjustable arm lets you direct light exactly where you need it. Built with energy-efficient LED technology, it saves power while providing flicker-free illumination that's gentle on your eyes during long work sessions.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    category: "Home",
    tags: ["lighting", "desk", "home office", "minimalist"],
    rating: 4.3,
    reviews: 42,
    stock: 30,
    specifications: {
      "Material": "Aluminum + ABS",
      "Light Source": "LED",
      "Power": "10W",
      "Color Temperatures": "2700K-6000K",
      "Brightness Levels": "5",
      "Dimensions": "15 x 6 x 18 inches"
    }
  },
  {
    id: "p4",
    name: "Artisanal Ceramic Mug Set",
    price: 49.99,
    description: "Set of 4 handcrafted ceramic mugs, each with a unique glaze pattern, made by local artisans.",
    detailedDescription: "Elevate your morning ritual with our Artisanal Ceramic Mug Set. Each mug in this set of four is individually handcrafted by skilled artisans, ensuring that no two pieces are exactly alike. The high-fired stoneware is finished with non-toxic, food-safe glazes in a soothing palette inspired by natural landscapes. These mugs are microwave and dishwasher safe for everyday convenience, while their substantial weight and comfortable handle make them a pleasure to use. The 12oz capacity is perfect for your morning coffee or afternoon tea.",
    image: "https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    category: "Home",
    tags: ["kitchenware", "ceramic", "artisanal", "handmade"],
    rating: 4.8,
    reviews: 36,
    stock: 25,
    specifications: {
      "Material": "Stoneware ceramic",
      "Capacity": "12 oz each",
      "Dimensions": "4 x 3 x 3.5 inches each",
      "Care": "Dishwasher and microwave safe",
      "Made In": "Local pottery studio",
      "Set Includes": "4 unique mugs"
    }
  },
  {
    id: "p5",
    name: "Leather Messenger Bag",
    price: 189.99,
    description: "Premium full-grain leather messenger bag with multiple compartments, perfect for work or travel.",
    detailedDescription: "Crafted from full-grain leather that develops a beautiful patina over time, our Leather Messenger Bag combines timeless style with practical functionality. The spacious main compartment easily accommodates a 15-inch laptop, while additional pockets keep your essentials organized. The adjustable shoulder strap and comfortable handle offer versatile carrying options. Each bag features solid brass hardware and carefully stitched details that showcase exceptional craftsmanship. This is more than just a bag—it's a companion for your daily adventures that will last for years to come.",
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
    ],
    category: "Fashion",
    tags: ["bag", "leather", "accessory", "work"],
    rating: 4.6,
    reviews: 57,
    stock: 12,
    featured: true,
    color: "#5C4033",
    specifications: {
      "Material": "Full-grain leather",
      "Dimensions": "16 x 12 x 4 inches",
      "Laptop Compartment": "Fits up to 15 inches",
      "Pockets": "3 external, 4 internal",
      "Strap": "Adjustable, padded",
      "Hardware": "Antique brass"
    }
  },
  {
    id: "p6",
    name: "Premium Yoga Mat",
    price: 78.99,
    description: "Eco-friendly, non-slip yoga mat made from natural rubber with perfect cushioning for comfort and stability.",
    detailedDescription: "Our Premium Yoga Mat provides the ideal foundation for your practice, offering exceptional grip and stability for every pose. Made from natural rubber with an eco-friendly manufacturing process, this mat is free from harmful chemicals like PVC, TPE, and phthalates. The 5mm thickness delivers optimal cushioning for joints without compromising stability. The closed-cell surface prevents sweat absorption and bacterial growth, making it hygienic and easy to clean. Whether you're a beginner or experienced yogi, this mat's superior performance will enhance your practice.",
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    category: "Fitness",
    tags: ["yoga", "fitness", "eco-friendly", "wellness"],
    rating: 4.9,
    reviews: 103,
    stock: 40,
    new: true,
    color: "#6082B6",
    specifications: {
      "Material": "Natural rubber + polyurethane",
      "Thickness": "5mm",
      "Dimensions": "72\" x 26\" (183cm x 66cm)",
      "Weight": "5.5 lbs (2.5 kg)",
      "Care": "Wipe clean with mild soap and water",
      "Features": "Non-slip, Eco-friendly, Alignment markers"
    }
  },
  {
    id: "p7",
    name: "Minimalist Wall Clock",
    price: 59.99,
    oldPrice: 79.99,
    description: "Silent, non-ticking wall clock with a clean, modern design that complements any interior style.",
    detailedDescription: "Add a touch of sophistication to any room with our Minimalist Wall Clock. The sleek, frameless design features a clean face with subtle hour markers and elegantly proportioned hands. This clock runs on a high-quality quartz movement that ensures accurate timekeeping without the distraction of ticking sounds, making it perfect for bedrooms, living spaces, and offices. The clock is crafted from premium materials, including a tempered glass cover that protects the face while adding a subtle reflective quality that catches the light beautifully.",
    image: "https://images.unsplash.com/photo-1516563791950-57c0d76f472a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516563791950-57c0d76f472a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1507647522877-608dc8fa3d96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
    ],
    category: "Home",
    tags: ["clock", "wall decor", "minimalist", "home accents"],
    rating: 4.4,
    reviews: 28,
    stock: 18,
    specifications: {
      "Diameter": "12 inches (30cm)",
      "Material": "Aluminum and glass",
      "Movement": "Quartz (silent)",
      "Battery": "1 x AA (not included)",
      "Mounting": "Keyhole hanger",
      "Weight": "1.2 lbs (0.54 kg)"
    }
  },
  {
    id: "p8",
    name: "Wireless Charging Pad",
    price: 39.99,
    description: "Fast wireless charging pad compatible with all Qi-enabled devices, featuring a sleek, minimalist design.",
    detailedDescription: "Power up your devices effortlessly with our Wireless Charging Pad. This sleek charger delivers fast charging to all Qi-enabled smartphones and accessories without the hassle of cables. The minimalist design features a premium fabric top that prevents slipping and scratches, while the aluminum base adds stability and efficient heat dissipation. Smart technology detects your device and delivers the optimal charging speed, while built-in safeguards protect against over-charging and temperature spikes. The subtle LED indicator confirms charging status without disturbing you at night.",
    image: "https://images.unsplash.com/photo-1603539444875-76e7684260a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603539444875-76e7684260a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    ],
    category: "Electronics",
    tags: ["wireless", "charging", "smartphone", "accessories"],
    rating: 4.2,
    reviews: 73,
    stock: 50,
    specifications: {
      "Input": "5V/2A, 9V/2A",
      "Output": "10W max",
      "Compatibility": "All Qi-enabled devices",
      "Dimensions": "3.5\" diameter x 0.4\" height",
      "Cable Length": "5 feet (1.5m)",
      "Features": "Over-voltage protection, temperature control"
    }
  },
  {
    id: "p9",
    name: "4K Ultra HD Smart TV",
    price: 799.99,
    oldPrice: 899.99,
    description: "Immerse yourself in stunning 4K visuals with this smart TV featuring advanced HDR technology and integrated streaming services.",
    detailedDescription: "Transform your living room into a home theater with our cutting-edge 4K Ultra HD Smart TV. Experience breathtaking clarity and vibrant colors with our advanced HDR technology that brings every scene to life. The built-in smart platform gives you instant access to your favorite streaming services, while the voice control feature allows for hands-free operation. With a slim bezel design and multiple HDMI ports for all your devices, this TV combines functionality with elegant aesthetics.",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3",
    gallery: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1539786774889-89ca7b9dc8e0?ixlib=rb-4.0.3"
    ],
    category: "Electronics",
    tags: ["tv", "4k", "smart", "entertainment"],
    rating: 4.6,
    reviews: 112,
    stock: 18,
    featured: true,
    specifications: {
      "Screen Size": "55 inches",
      "Resolution": "3840 x 2160 (4K)",
      "HDR": "Yes, HDR10+",
      "Refresh Rate": "120Hz",
      "HDMI Ports": "4",
      "Smart Platform": "SmartView OS"
    }
  },
  {
    id: "p10",
    name: "Professional DSLR Camera",
    price: 1299.99,
    description: "Capture stunning photos and videos with this professional-grade DSLR camera featuring a high-resolution sensor and interchangeable lenses.",
    detailedDescription: "Elevate your photography with our Professional DSLR Camera, designed for both enthusiasts and professionals alike. The high-resolution 24.2MP sensor captures incredible detail in every shot, while the advanced autofocus system ensures your subjects are always crystal clear. Record in 4K video resolution to bring your creative vision to life. The weather-sealed body allows you to shoot in challenging conditions, and the intuitive controls put all the power at your fingertips. Compatible with our extensive range of interchangeable lenses, this camera grows with your skills.",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3",
    gallery: [
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3"
    ],
    category: "Electronics",
    tags: ["camera", "photography", "dslr", "professional"],
    rating: 4.8,
    reviews: 86,
    stock: 12,
    new: true,
    specifications: {
      "Sensor": "24.2MP CMOS",
      "Processor": "EXPEED 6",
      "ISO Range": "100-51,200",
      "Autofocus Points": "153",
      "Video Resolution": "4K UHD",
      "Battery Life": "1200 shots"
    }
  },
  {
    id: "p11",
    name: "Compact Bluetooth Speaker",
    price: 79.99,
    oldPrice: 99.99,
    description: "Enjoy powerful, room-filling sound in a compact, portable design with 20 hours of battery life and waterproof construction.",
    detailedDescription: "Take your music anywhere with our Compact Bluetooth Speaker. Despite its small size, this speaker delivers impressive audio quality with deep bass and clear highs. The rugged, waterproof design (IPX7 rated) means you can use it at the beach, by the pool, or even in the shower without worry. Connect wirelessly via Bluetooth 5.0 for stable, high-quality streaming from up to 30 feet away. With a rechargeable battery that lasts up to 20 hours, you can enjoy your favorite tunes all day long. The built-in microphone also allows for hands-free calls when paired with your smartphone.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3",
    gallery: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1589003511680-59c3c1bc6b0a?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?ixlib=rb-4.0.3"
    ],
    category: "Electronics",
    tags: ["speaker", "bluetooth", "audio", "portable"],
    rating: 4.5,
    reviews: 203,
    stock: 45,
    specifications: {
      "Power Output": "20W",
      "Battery Life": "20 hours",
      "Waterproof Rating": "IPX7",
      "Bluetooth Version": "5.0",
      "Range": "30 feet",
      "Dimensions": "7 x 2.5 x 2.5 inches"
    }
  },
  {
    id: "p12",
    name: "Ultra-Thin Laptop",
    price: 1499.99,
    description: "Powerful performance meets elegant design in this ultra-thin laptop featuring all-day battery life and a stunning display.",
    detailedDescription: "Experience the perfect balance of power and portability with our Ultra-Thin Laptop. At just 0.6 inches thick and weighing only 2.8 pounds, it's designed to go wherever you do. The edge-to-edge 14-inch display features vibrant colors and sharp text for an immersive viewing experience. Powered by the latest 11th Gen processor and 16GB of RAM, it handles demanding tasks with ease. The backlit keyboard makes typing comfortable in any lighting condition, while the precision touchpad offers smooth, responsive control. With up to 15 hours of battery life, you can work and play all day without hunting for an outlet.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3",
    gallery: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3"
    ],
    category: "Electronics",
    tags: ["laptop", "computer", "ultrabook", "portable"],
    rating: 4.7,
    reviews: 147,
    stock: 20,
    featured: true,
    specifications: {
      "Processor": "11th Gen Intel Core i7",
      "RAM": "16GB LPDDR4X",
      "Storage": "512GB SSD",
      "Display": "14-inch 2560 x 1600",
      "Graphics": "Intel Iris Xe",
      "Battery Life": "Up to 15 hours"
    }
  }
];

// Review Data
export interface Review {
  id: string;
  productId: string;
  user: {
    name: string;
    avatar?: string;
  };
  rating: number;
  date: Date;
  title: string;
  content: string;
  helpful: number;
  verified: boolean;
}

// Sample reviews
export const reviews: Review[] = [
  {
    id: "r1",
    productId: "p1",
    user: {
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/55.jpg"
    },
    rating: 5,
    date: new Date("2023-05-14"),
    title: "Outstanding sound quality!",
    content: "I've tried many headphones over the years, but these are by far the best. The noise cancellation is phenomenal, and the sound quality is crystal clear. I can wear them comfortably for hours while working. Definitely worth the investment!",
    helpful: 24,
    verified: true
  },
  {
    id: "r2",
    productId: "p1",
    user: {
      name: "Michael Chen"
    },
    rating: 4,
    date: new Date("2023-04-28"),
    title: "Great headphones, but battery could be better",
    content: "The sound quality and noise cancellation are excellent, and they're very comfortable to wear. My only complaint is that the battery doesn't quite last as long as advertised. I get about 25 hours instead of 30, but that's still pretty good. Overall, I'm very satisfied with my purchase.",
    helpful: 12,
    verified: true
  },
  {
    id: "r3",
    productId: "p1",
    user: {
      name: "Emma Rodriguez",
      avatar: "https://randomuser.me/api/portraits/women/39.jpg"
    },
    rating: 5,
    date: new Date("2023-06-02"),
    title: "Perfect for travel",
    content: "I bought these specifically for a long international flight, and they were a lifesaver! The noise cancellation blocked out the plane engines and crying babies, and I was able to sleep comfortably with them on. The case is also sturdy and compact. Highly recommend!",
    helpful: 8,
    verified: true
  },
  {
    id: "r4",
    productId: "p2",
    user: {
      name: "David Wilson"
    },
    rating: 4,
    date: new Date("2023-05-17"),
    title: "Solid smartwatch with great features",
    content: "I've been using this watch for about a month now and I'm impressed with all the features. The fitness tracking is accurate, and I love being able to check messages without taking out my phone. Battery life is reasonable - I charge it every night. The only downside is that the screen could be a bit brighter for outdoor use.",
    helpful: 15,
    verified: true
  },
  {
    id: "r5",
    productId: "p2",
    user: {
      name: "Jennifer Taylor",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    rating: 5,
    date: new Date("2023-05-30"),
    title: "Game changer for my health goals",
    content: "This watch has completely transformed how I approach my health. The heart rate monitoring and activity tracking have helped me stay consistent with my workouts, and the sleep analysis revealed patterns I never noticed before. The interface is intuitive and the watch looks sleek and professional. Couldn't be happier!",
    helpful: 19,
    verified: true
  }
];

// Cart Data Interface (for demonstration)
export interface CartItem {
  productId: string;
  quantity: number;
}

// Checkout Data Interface (for demonstration)
export interface CheckoutForm {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}
