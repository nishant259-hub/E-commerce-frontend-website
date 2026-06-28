// Products array with id, name, category, price, image, brand, about
const products = [

    // ===================== LAPTOP / COMPUTERS =====================
    {
        id: 1,
        name: "High Performance Laptop",
        brand: "Dell",
        category: "Computers",
        price: 50000,
        image: "images/laptop.webp",
        about: "Intel Core i7 processor aur 16GB RAM ke saath blazing fast performance. Students aur professionals dono ke liye perfect choice."
    },
    {
        id: 2,
        name: "Gaming Laptop RTX",
        brand: "ASUS ROG",
        category: "Laptop",
        price: 95999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
        about: "NVIDIA RTX 4060 GPU aur 144Hz display ke saath hardcore gaming ka asli maza lo. RGB backlit keyboard included."
    },
    {
        id: 3,
        name: "Slim Ultrabook 14 inch",
        brand: "HP",
        category: "Laptop",
        price: 58999,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
        about: "Sirf 1.3kg wajan aur 12 ghante battery life ke saath travel ke liye best companion. Metal body aur FHD display."
    },
    {
        id: 4,
        name: "Business Pro Laptop",
        brand: "Lenovo ThinkPad",
        category: "Laptop",
        price: 72999,
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80",
        about: "MIL-SPEC tested durability aur enterprise-grade security ke saath office work ke liye unbeatable. Fingerprint sensor included."
    },
    {
        id: 5,
        name: "Budget Student Laptop",
        brand: "Acer",
        category: "Laptop",
        price: 29999,
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&q=80",
        about: "Padhai aur assignments ke liye perfect affordable laptop. 8GB RAM aur fast SSD ke saath smooth multitasking."
    },
    {
        id: 6,
        name: "2-in-1 Convertible Laptop",
        brand: "Lenovo Yoga",
        category: "Laptop",
        price: 66999,
        image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=400&q=80",
        about: "360 degree fold karke tablet bhi ban jata hai. Touch screen aur stylus support ke saath creativity ka naya level."
    },
    {
        id: 7,
        name: "Premium Aluminium Laptop",
        brand: "Apple MacBook",
        category: "Laptop",
        price: 112999,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&q=80",
        about: "M3 chip ke saath extraordinary performance aur 18 ghante ki battery. Retina display par sab kuch stunning lagta hai."
    },
    {
        id: 8,
        name: "Workstation Laptop 32GB RAM",
        brand: "HP ZBook",
        category: "Laptop",
        price: 149999,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80",
        about: "3D rendering, video editing aur data science ke liye built. 32GB ECC RAM aur Quadro GPU pro-level workloads handle karta hai."
    },
    {
        id: 9,
        name: "Chromebook Lightweight",
        brand: "Google",
        category: "Laptop",
        price: 19999,
        image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=400&q=80",
        about: "Chrome OS pe chalega, cloud-based kaam ke liye best. Instant boot aur virus-free experience guaranteed."
    },
    {
        id: 10,
        name: "Content Creator Laptop",
        brand: "MSI Creator",
        category: "Laptop",
        price: 84999,
        image: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=400&q=80",
        about: "100% DCI-P3 color accurate OLED display ke saath video editing aur graphic design ka naya standard. Thunderbolt 4 port included."
    },
    {
        id: 11,
        name: "Touchscreen Laptop 15.6 inch",
        brand: "HP Pavilion",
        category: "Laptop",
        price: 61999,
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&q=80",
        about: "Bade Full HD touch screen par presentations aur movies ka experience alag hi hai. AMD Ryzen 5 processor ke saath fast performance."
    },
    {
        id: 12,
        name: "Compact Mini Laptop 11 inch",
        brand: "Acer Aspire",
        category: "Laptop",
        price: 24999,
        image: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?w=400&q=80",
        about: "Chota size, bada kaam — bag me easily fit ho jaata hai. Light browsing aur notes ke liye best daily carry laptop."
    },

    // ===================== MOBILE =====================
    {
        id: 13,
        name: "iPhone 16",
        brand: "Apple",
        category: "Mobile",
        price: 80000,
        image: "images/mobile.png",
        about: "A18 Bionic chip aur Camera Control button ke saath photography aur performance ka new benchmark. iOS ecosystem ka best experience."
    },
    {
        id: 14,
        name: "Smartphone Pro Max 256GB",
        brand: "Samsung",
        category: "Mobile",
        price: 74999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
        about: "200MP camera aur S Pen support ke saath photography aur productivity ka powerhouse. 5000mAh battery, ek baar charge karo sochna chod do."
    },
    {
        id: 15,
        name: "Galaxy Ultra 5G",
        brand: "Samsung",
        category: "Mobile",
        price: 89999,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&q=80",
        about: "Snapdragon 8 Gen 3 chipset aur 12GB RAM ke saath ultra-smooth performance. 45W fast charging se 30 min me 50% charge."
    },
    {
        id: 16,
        name: "Budget Smartphone 128GB",
        brand: "Redmi",
        category: "Mobile",
        price: 14999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80",
        about: "Kam budget me zada features — 50MP camera aur 5000mAh battery. Daily use ke liye sab kuch hai isme."
    },
    {
        id: 17,
        name: "Premium Phone X",
        brand: "OnePlus",
        category: "Mobile",
        price: 99999,
        image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&q=80",
        about: "Hasselblad camera system aur 100W SUPERVOOC charging ke saath flagship experience. Curved AMOLED display par sab kuch vibrant dikhta hai."
    },
    {
        id: 18,
        name: "Mid Range Phone 5G",
        brand: "Realme",
        category: "Mobile",
        price: 22999,
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&q=80",
        about: "5G connectivity aur 6.7 inch Super AMOLED display ke saath streaming aur gaming ka maza. Reasonable price me best deal."
    },
    {
        id: 19,
        name: "Gaming Phone Edition",
        brand: "ASUS ROG Phone",
        category: "Mobile",
        price: 45999,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
        about: "165Hz display aur AirTrigger buttons ke saath console-level gaming experience. Dual cooling fans se phone kabhi garam nahi hoga."
    },
    {
        id: 20,
        name: "Compact Phone Mini",
        brand: "Google Pixel",
        category: "Mobile",
        price: 18499,
        image: "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?w=400&q=80",
        about: "Pure Android experience aur Google AI camera magic ke saath photos hamesha cinematic aati hai. Chote haath walon ke liye perfect size."
    },
    {
        id: 21,
        name: "Flagship Phone 12GB RAM",
        brand: "Vivo",
        category: "Mobile",
        price: 64999,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&q=80",
        about: "12GB RAM aur 256GB storage ke saath heavy multitasking effortless ho jaata hai. 80W flash charge se minutes me full battery."
    },
    {
        id: 22,
        name: "Foldable Smartphone",
        brand: "Samsung Galaxy Z",
        category: "Mobile",
        price: 129999,
        image: "https://images.unsplash.com/photo-1551817958-20204d6ab212?w=400&q=80",
        about: "Fold karke pocket me, unfold karke tablet jaisi screen. Future ka phone aaj tumhare haath me — premium looks, premium feel."
    },
    {
        id: 23,
        name: "Camera Pro Phone 108MP",
        brand: "Xiaomi",
        category: "Mobile",
        price: 38999,
        image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=400&q=80",
        about: "108MP main camera aur 8K video recording se professional photography ab sabke budget me. Leica optics collaboration."
    },
    {
        id: 24,
        name: "Entry Level Phone 4G",
        brand: "Tecno",
        category: "Mobile",
        price: 9999,
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&q=80",
        about: "Pehli baar smartphone lene walon ke liye best choice. Basic apps, calling aur social media ke liye sab kuch smoothly chalta hai."
    },

    // ===================== WATCH =====================
    {
        id: 25,
        name: "Smart Watch",
        brand: "Noise",
        category: "Watch",
        price: 3000,
        image: "images/smartwatch.webp",
        about: "Health tracking aur notification alerts ke saath daily life smart ban jaati hai. 7 din ki battery aur 100+ watch faces."
    },
    {
        id: 26,
        name: "Smart Watch Series 5",
        brand: "Apple Watch",
        category: "Watch",
        price: 19999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
        about: "ECG aur blood oxygen monitoring ke saath health ka real-time guardian. iPhone ke saath seamless integration."
    },
    {
        id: 27,
        name: "Classic Analog Watch",
        brand: "Titan",
        category: "Watch",
        price: 4999,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80",
        about: "Timeless design aur sapphire crystal glass ke saath har occasion pe perfect look. Water resistant aur scratch-proof build."
    },
    {
        id: 28,
        name: "Luxury Wrist Watch",
        brand: "Fossil",
        category: "Watch",
        price: 29999,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&q=80",
        about: "Stainless steel case aur genuine leather strap ke saath boardroom se dinner tak har jagah impress karo. Swiss movement."
    },
    {
        id: 29,
        name: "Sports Fitness Watch",
        brand: "Garmin",
        category: "Watch",
        price: 7499,
        image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=400&q=80",
        about: "GPS tracking aur 20+ sports modes ke saath gym se marathon tak sab track hoga. 10 din ki battery life."
    },
    {
        id: 30,
        name: "Digital Sport Watch",
        brand: "Casio",
        category: "Watch",
        price: 2499,
        image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400&q=80",
        about: "Sturdy build aur alarm, stopwatch, timer ke saath gym aur outdoor activities ke liye reliable companion. Shockproof design."
    },
    {
        id: 31,
        name: "Leather Strap Watch",
        brand: "Fastrack",
        category: "Watch",
        price: 5999,
        image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400&q=80",
        about: "Premium tan leather strap aur minimalist dial ke saath casual aur semi-formal looks ke liye perfect pairing."
    },
    {
        id: 32,
        name: "Minimalist Dial Watch",
        brand: "Daniel Wellington",
        category: "Watch",
        price: 3999,
        image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400&q=80",
        about: "Clean dial, slim profile — simplicity hi asli luxury hai. Interchangeable straps se roz naya look banao."
    },
    {
        id: 33,
        name: "Chronograph Steel Watch",
        brand: "Seiko",
        category: "Watch",
        price: 12999,
        image: "https://images.unsplash.com/photo-1495704907664-81f74a3937fe?w=400&q=80",
        about: "3 subdials aur tachymeter bezel ke saath professional racer look. Japanese movement se accuracy guaranteed."
    },
    {
        id: 34,
        name: "Smartwatch with GPS",
        brand: "Samsung Galaxy Watch",
        category: "Watch",
        price: 24999,
        image: "https://images.unsplash.com/photo-1619134778706-7015533a6150?w=400&q=80",
        about: "Built-in GPS aur sleep tracking ke saath fitness goals achieve karna ab aasaan. Android aur iOS dono ke saath compatible."
    },
    {
        id: 35,
        name: "Women's Elegant Watch",
        brand: "Sonata",
        category: "Watch",
        price: 6499,
        image: "https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?w=400&q=80",
        about: "Rose gold finish aur crystal-studded dial ke saath saree ho ya dress, sab par perfectly match karta hai."
    },
    {
        id: 36,
        name: "Kids Digital Watch",
        brand: "Timex",
        category: "Watch",
        price: 1499,
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&q=80",
        about: "Colorful aur shockproof design ke saath bacchon ke liye time sikhna fun ho jaata hai. Alarm aur night light feature."
    },

    // ===================== HEADPHONE =====================
    {
        id: 37,
        name: "Wireless Over-Ear Headphone",
        brand: "Sony",
        category: "Headphone",
        price: 6999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
        about: "30 ghante battery aur extra bass ke saath music sunna ek naya experience ban jaata hai. Foldable design for easy carry."
    },
    {
        id: 38,
        name: "ANC Noise Cancelling Headphone",
        brand: "Bose",
        category: "Headphone",
        price: 12999,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80",
        about: "Industry-leading noise cancellation se office aur travel me complete focus milta hai. Comfortable ear cushions for long sessions."
    },
    {
        id: 39,
        name: "True Wireless Earbuds",
        brand: "boAt",
        category: "Headphone",
        price: 2999,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80",
        about: "6mm drivers aur 24 ghante total playtime ke saath wire-free freedom enjoy karo. IPX5 water resistant, workout ke liye perfect."
    },
    {
        id: 40,
        name: "Studio Monitor Headphone",
        brand: "Audio-Technica",
        category: "Headphone",
        price: 8499,
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&q=80",
        about: "Flat frequency response aur 45mm drivers ke saath music production aur mixing ke liye professional-grade accuracy."
    },
    {
        id: 41,
        name: "Gaming Headset RGB",
        brand: "HyperX",
        category: "Headphone",
        price: 3499,
        image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&q=80",
        about: "7.1 surround sound aur detachable mic ke saath enemy footsteps clearly sun sakte ho. RGB lighting gaming setup complete karta hai."
    },
    {
        id: 42,
        name: "On-Ear Foldable Headphone",
        brand: "JBL",
        category: "Headphone",
        price: 2199,
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&q=80",
        about: "Pure bass technology aur foldable design ke saath commute aur gym dono ke liye best. 12 ghante playback time."
    },
    {
        id: 43,
        name: "Sports Bluetooth Earbuds",
        brand: "Jabra",
        category: "Headphone",
        price: 1999,
        image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=400&q=80",
        about: "Ear hooks se workout me kabhi nahi girenge. IP55 sweat resistance aur 6 ghante playtime, gym pe full focus."
    },
    {
        id: 44,
        name: "Premium Bass Headphone",
        brand: "Skullcandy",
        category: "Headphone",
        price: 9999,
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&q=80",
        about: "Supreme bass aur rapid charge technology ke saath 10 min charge = 4 ghante play. Hip-hop aur EDM lovers ke liye best."
    },
    {
        id: 45,
        name: "Wired Stereo Headphone",
        brand: "Sennheiser",
        category: "Headphone",
        price: 999,
        image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&q=80",
        about: "Wire ke saath reliable aur latency-free audio experience. Call center aur online classes ke liye ideal budget headphone."
    },
    {
        id: 46,
        name: "Bluetooth Neckband Earphone",
        brand: "OnePlus Bullets",
        category: "Headphone",
        price: 1499,
        image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&q=80",
        about: "Magnetic earphones aur quick switch feature ke saath office calls aur music ke beech instantly toggle karo. 20 ghante battery."
    },
    {
        id: 47,
        name: "Kids Safe Volume Headphone",
        brand: "Zebronics",
        category: "Headphone",
        price: 799,
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&q=80",
        about: "85dB volume limit se bacchon ke kaan surakshit rahenge. Colorful design aur soft ear pads for comfortable long use."
    },
    {
        id: 48,
        name: "Earbuds Pro with Case",
        brand: "Realme Buds",
        category: "Headphone",
        price: 4499,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80",
        about: "Active Noise Cancellation aur 360-degree spatial audio ke saath premium sound experience. Charging case me 28 ghante total battery."
    },

    // ===================== FOOTWEAR =====================
    {
        id: 49,
        name: "Running Sports Shoes",
        brand: "Nike",
        category: "Footwear",
        price: 2999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
        about: "Air cushion sole aur breathable mesh upper ke saath har run comfortable hoga. Lightweight design for long distance."
    },
    {
        id: 50,
        name: "Casual Canvas Sneakers",
        brand: "Converse",
        category: "Footwear",
        price: 1499,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80",
        about: "Iconic canvas design jo jeans se lekar shorts tak sab ke saath perfectly match karta hai. College aur outing ke liye timeless choice."
    },
    {
        id: 51,
        name: "Formal Leather Shoes",
        brand: "Bata",
        category: "Footwear",
        price: 3499,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=80",
        about: "Genuine leather upper aur cushioned insole ke saath office me 8 ghante bhi comfortable rahoge. Derby style, always classy."
    },
    {
        id: 52,
        name: "Comfort Sandals",
        brand: "Relaxo",
        category: "Footwear",
        price: 899,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80",
        about: "Extra soft footbed aur adjustable straps ke saath ghar ke bahar ka har casual plan comfortable ho jaata hai."
    },
    {
        id: 53,
        name: "High-Top Sneakers",
        brand: "Adidas",
        category: "Footwear",
        price: 2299,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80",
        about: "Ankle support aur street-style look ke saath basketball court se mall tak sab jagah swag. Rubber grip sole for stability."
    },
    {
        id: 54,
        name: "Slip-On Loafers",
        brand: "Hush Puppies",
        category: "Footwear",
        price: 1999,
        image: "https://images.unsplash.com/photo-1528701800489-20be9c1a3c39?w=400&q=80",
        about: "Lace-free convenience aur soft leather finish ke saath semi-formal look effortlessly achieve hota hai. All-day comfort guaranteed."
    },
    {
        id: 55,
        name: "Outdoor Trekking Shoes",
        brand: "Wildcraft",
        category: "Footwear",
        price: 3999,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&q=80",
        about: "Anti-skid grip aur waterproof membrane ke saath rocky terrain aur muddy trails pe bhi full confidence. High ankle support."
    },
    {
        id: 56,
        name: "Women's Block Heels",
        brand: "Steve Madden",
        category: "Footwear",
        price: 2499,
        image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=400&q=80",
        about: "3 inch block heel se height milti hai aur comfort bhi nahi jaata. Party, date ya office — har occasion pe stylish."
    },
    {
        id: 57,
        name: "Everyday Flip Flops",
        brand: "Paragon",
        category: "Footwear",
        price: 399,
        image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&q=80",
        about: "Ultra-lightweight aur slip-resistant sole ke saath ghar ke ander bahar ke liye best daily wear. Machine washable."
    },
    {
        id: 58,
        name: "Ankle Length Boots",
        brand: "Clarks",
        category: "Footwear",
        price: 4499,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&q=80",
        about: "Full grain leather aur side zipper ke saath winter mein sabse stylish lagoge. Chunky sole gives perfect height boost."
    },
    {
        id: 59,
        name: "Kids Sport Shoes",
        brand: "Campus",
        category: "Footwear",
        price: 1199,
        image: "https://images.unsplash.com/photo-1597248881519-db089d3744a5?w=400&q=80",
        about: "Extra cushioning aur velcro strap ke saath school aur playground dono ke liye perfect. Easy on, easy off design."
    },
    {
        id: 60,
        name: "Sports Floater Sandals",
        brand: "Sparx",
        category: "Footwear",
        price: 999,
        image: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=400&q=80",
        about: "Eva foam sole aur double strap ke saath beach, garden ya market — kahin bhi wear karo comfortably. Waterproof material."
    },

    // ===================== MEN-CLOTH =====================
    {
        id: 61,
        name: "Cotton Round Neck T-Shirt",
        brand: "Levi's",
        category: "Men-Cloth",
        price: 499,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80",
        about: "100% pure cotton fabric jo garam mausam me bhi skin ko breathe karne deta hai. Colour fade nahi hoga 50 washes ke baad bhi."
    },
    {
        id: 62,
        name: "Formal Checked Shirt",
        brand: "Arrow",
        category: "Men-Cloth",
        price: 1299,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80",
        about: "Wrinkle-resistant cotton blend se office me fresh look maintain hota hai pura din. Slim fit cut for modern professional look."
    },
    {
        id: 63,
        name: "Slim Fit Denim Jeans",
        brand: "Lee",
        category: "Men-Cloth",
        price: 1799,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80",
        about: "Stretchable denim se poori comfort ke saath slim look milta hai. Dark wash jo casual aur semi-formal dono occasions pe fit hota hai."
    },
    {
        id: 64,
        name: "Bomber Jacket",
        brand: "H&M",
        category: "Men-Cloth",
        price: 2999,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80",
        about: "Ribbed collar aur lightweight padding ke saath winter fashion game strong hoga. Sab ke saath layer kar sakte ho."
    },
    {
        id: 65,
        name: "Pullover Hoodie",
        brand: "Puma",
        category: "Men-Cloth",
        price: 1599,
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80",
        about: "Fleece lining aur kangaroo pocket ke saath lazy days aur gym sessions dono ke liye ideal. Oversized fit trending hai."
    },
    {
        id: 66,
        name: "Ethnic Cotton Kurta",
        brand: "Manyavar",
        category: "Men-Cloth",
        price: 1199,
        image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400&q=80",
        about: "Subtle embroidery aur comfortable cotton fabric se festivals aur family functions mein traditional look complete hota hai."
    },
    {
        id: 67,
        name: "Formal Blazer",
        brand: "Raymond",
        category: "Men-Cloth",
        price: 3999,
        image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=400&q=80",
        about: "Premium wool blend fabric aur tailored fit se interview aur corporate meetings mein first impression perfect rahega."
    },
    {
        id: 68,
        name: "Casual Cargo Shorts",
        brand: "Roadster",
        category: "Men-Cloth",
        price: 799,
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&q=80",
        about: "6 spacious pockets aur elastic waistband ke saath summer outings aur travel ke liye super comfortable. Multiple colours available."
    },
    {
        id: 69,
        name: "Polo Collar T-Shirt",
        brand: "Lacoste",
        category: "Men-Cloth",
        price: 699,
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80",
        about: "Pique cotton fabric aur classic polo collar se casual look instantly smart ho jaata hai. Office casual Friday ke liye perfect."
    },
    {
        id: 70,
        name: "Crew Neck Sweatshirt",
        brand: "Nike",
        category: "Men-Cloth",
        price: 1399,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80",
        about: "Soft fleece interior aur ribbed cuffs ke saath light cold weather pe best companion. Minimal logo design, evergreen style."
    },
    {
        id: 71,
        name: "Sports Track Pants",
        brand: "Adidas",
        category: "Men-Cloth",
        price: 899,
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80",
        about: "Moisture-wicking fabric aur elastic waistband ke saath gym se morning walk tak sab activities comfortable hoti hai."
    },
    {
        id: 72,
        name: "Nehru Jacket Ethnic",
        brand: "FabIndia",
        category: "Men-Cloth",
        price: 1999,
        image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=400&q=80",
        about: "Handcrafted fabric aur mandarin collar ke saath kurte ke upar pehen ke ethnic look instantly elevate ho jaata hai."
    },

    // ===================== CHILD-CLOTH =====================
    {
        id: 73,
        name: "Kids Printed T-Shirt",
        brand: "H&M Kids",
        category: "Child-Cloth",
        price: 399,
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&q=80",
        about: "Fun cartoon prints aur super-soft cotton fabric se bacche khud pehenna chahenge. Machine wash safe, roz dho sakte ho."
    },
    {
        id: 74,
        name: "Girls Party Dress",
        brand: "Chicco",
        category: "Child-Cloth",
        price: 999,
        image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&q=80",
        about: "Floral embroidery aur fluffy skirt ke saath birthday party aur functions me princess wali feeling aayegi. Comfortable elastic waist."
    },
    {
        id: 75,
        name: "Boys Denim Jeans",
        brand: "United Colors of Benetton",
        category: "Child-Cloth",
        price: 799,
        image: "https://images.unsplash.com/photo-1503944168849-8e0f3f3eb967?w=400&q=80",
        about: "Stretch denim aur reinforced knees se active bacchon ke liye durable option. School aur playground dono ke liye perfect."
    },
    {
        id: 76,
        name: "Kids Hooded Sweatshirt",
        brand: "Mothercare",
        category: "Child-Cloth",
        price: 699,
        image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&q=80",
        about: "Cozy fleece lining aur kangaroo pocket se winter mornings aur school trips pe bacche warm rahenge. Soft on sensitive skin."
    },
    {
        id: 77,
        name: "Baby Cotton Romper",
        brand: "Mee Mee",
        category: "Child-Cloth",
        price: 549,
        image: "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=400&q=80",
        about: "100% hypoallergenic cotton aur snap buttons se diaper change aasaan ho jaata hai. Newborn ki delicate skin ke liye safe."
    },
    {
        id: 78,
        name: "Kids Shorts and Tee Set",
        brand: "Zara Kids",
        category: "Child-Cloth",
        price: 649,
        image: "https://images.unsplash.com/photo-1622206151226-18ca2c9d680b?w=400&q=80",
        about: "Matching set jisme dono comfortable cotton fabric se bane hain. Summer me bacchon ko cool aur stylish rakhega."
    },
    {
        id: 79,
        name: "Kids Winter Jacket",
        brand: "Gini & Jony",
        category: "Child-Cloth",
        price: 1299,
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&q=80",
        about: "Quilted padding aur detachable hood ke saath sardi ke mausam me bacchon ko warm rakho. Bright colors for visibility."
    },
    {
        id: 80,
        name: "Kids Ethnic Kurta Set",
        brand: "Biba Kids",
        category: "Child-Cloth",
        price: 899,
        image: "https://images.unsplash.com/photo-1622445275649-3d62c34a0a2c?w=400&q=80",
        about: "Festive prints aur comfortable cotton blend se bacche Eid, Diwali aur functions me adorable lagte hain. Easy tie pyjama."
    },
    {
        id: 81,
        name: "Kids Night Pajama Set",
        brand: "Dreamz",
        category: "Child-Cloth",
        price: 449,
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80",
        about: "Ultra-soft fabric aur fun character prints se bacchon ko raat ko padna aur so jaana ek adventure lagega. Anti-pilling material."
    },
    {
        id: 82,
        name: "Kids School Uniform Set",
        brand: "Cantabil",
        category: "Child-Cloth",
        price: 749,
        image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&q=80",
        about: "Durable poly-cotton blend aur stain-release technology se uniform roz fresh dikhega. Crease-resistant fabric for neat look."
    },
    {
        id: 83,
        name: "Floral Frock Dress",
        brand: "Allen Solly Junior",
        category: "Child-Cloth",
        price: 849,
        image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&q=80",
        about: "Bright floral prints aur breathable cotton se bachi ko garm mausam mein bhi comfortable feel hoga. Back zip for easy wear."
    },
    {
        id: 84,
        name: "Kids Waterproof Raincoat",
        brand: "Wildcraft Kids",
        category: "Child-Cloth",
        price: 599,
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80",
        about: "100% waterproof shell aur taped seams se baarish me bacche bilkul dry rahenge. Reflective strips for road safety."
    },

    // ===================== WOMEN-CLOTH =====================
    {
        id: 85,
        name: "Printed Cotton Kurti",
        brand: "Jaipur Kurti",
        category: "Women-Cloth",
        price: 899,
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80",
        about: "Block print design aur breathable cotton se ghar pe aur bahar dono jagah comfortable aur stylish. Leggings ya jeans ke saath perfect."
    },
    {
        id: 86,
        name: "Silk Blend Saree",
        brand: "Nalli",
        category: "Women-Cloth",
        price: 2499,
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",
        about: "Zari border aur rich silk blend se shaadi aur functions mein sabse sundar dikhogi. Unstitched blouse piece saath included."
    },
    {
        id: 87,
        name: "A-Line Casual Dress",
        brand: "Global Desi",
        category: "Women-Cloth",
        price: 1499,
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
        about: "Flowy fabric aur flattering A-line cut se body shape naturally enhance hoti hai. Brunch, dates ya casual outing ke liye ideal."
    },
    {
        id: 88,
        name: "Casual Crop Top",
        brand: "H&M",
        category: "Women-Cloth",
        price: 599,
        image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80",
        about: "Ribbed fabric aur trendy cropped length se high-waist jeans ya skirts ke saath effortlessly chic look milta hai."
    },
    {
        id: 89,
        name: "High Waist Skinny Jeans",
        brand: "Wrangler",
        category: "Women-Cloth",
        price: 1699,
        image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80",
        about: "High rise waist aur stretch denim se figure flattering fit milta hai. Tops, kurtas ya crop tops — sab ke saath superb pairing."
    },
    {
        id: 90,
        name: "Salwar Suit Set",
        brand: "Biba",
        category: "Women-Cloth",
        price: 1899,
        image: "https://images.unsplash.com/photo-1551048632-24e444b48a3e?w=400&q=80",
        about: "Ready-to-wear 3-piece set jisme kurta, salwar aur dupatta shamil hai. Office aur casual dono occasions ke liye comfortable ethnic choice."
    },
    {
        id: 91,
        name: "Sleeveless Jumpsuit",
        brand: "Zara",
        category: "Women-Cloth",
        price: 1999,
        image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&q=80",
        about: "One-piece convenience aur modern silhouette ke saath styled karna easy hai. Belt add karo waist define karne ke liye."
    },
    {
        id: 92,
        name: "Knit Pullover Sweater",
        brand: "Marks & Spencer",
        category: "Women-Cloth",
        price: 1299,
        image: "https://images.unsplash.com/photo-1525450824786-227cbef70703?w=400&q=80",
        about: "Soft merino wool blend aur relaxed fit se winter me cozy aur stylish dono. Jeans ya trousers ke saath office-ready look."
    },
    {
        id: 93,
        name: "Pleated Midi Skirt",
        brand: "AND",
        category: "Women-Cloth",
        price: 999,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80",
        about: "Flowy pleated fabric se walk karte waqt graceful movement milti hai. Tucked-in blouse ke saath instantly polished look."
    },
    {
        id: 94,
        name: "Formal Office Blazer",
        brand: "Van Heusen Woman",
        category: "Women-Cloth",
        price: 2199,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80",
        about: "Structured shoulders aur slim lapels ke saath boardroom presence strong hoti hai. Dress, kurta ya trousers pe equally stunning."
    },
    {
        id: 95,
        name: "Stretch Fit Leggings",
        brand: "Enamor",
        category: "Women-Cloth",
        price: 449,
        image: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=400&q=80",
        about: "4-way stretch fabric aur wide waistband se yoga, gym ya ghar pe sone tak — sab kuch comfortable. Opaque material, no see-through."
    },
    {
        id: 96,
        name: "Embroidered Anarkali Suit",
        brand: "Manyavar Mohey",
        category: "Women-Cloth",
        price: 2299,
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
        about: "Heavy embroidery aur flared silhouette se shaadi functions mein sabki nazar rukegi. Includes matching dupatta aur churidar."
    }
];