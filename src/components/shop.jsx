import React, { useState, useEffect } from 'react';
import './shop.css';
import  '../assets/images/1.png';
import '../assets/images/2.png';
import '../assets/images/3.png';
import '../assets/images/4.png';
import  '../assets/images/5.png';
import  '../assets/images/6.png';
import '../assets/images/7.png';
import  '../assets/images/8.png';
import '../assets/images/9.png';
import  '../assets/images/10.png';
import '../assets/images/12.png';
import '../assets/images/13.png';
import '../assets/images/14.png';
import  '../assets/images/15.png';
import '../assets/images/16.png';
import '../assets/images/17.png';
import '../assets/images/18.png';
import '../assets/images/19.png';


// --- DATA GENERATION ---
const categoryImages = {
  kurti: ['1.png', '2.png', '3.png', '4.png'],
  sharara: ['5.png', '6.png', '7.png', '8.png'],
  coord: ['9.png', '10.png', '12.png'],
  plazo: ['13.png', '14.png', '15.png'],
  skirt: ['16.png', '17.png', '18.png', '19.png']
};

const generateProducts = () => {
  const categories = ['kurti', 'sharara', 'coord', 'plazo', 'skirt'];
  let allProducts = [];
  let idCounter = 1;

  categories.forEach(cat => {
    categoryImages[cat].forEach((img, i) => {
      allProducts.push({
        id: idCounter++,
        name: `Royal ${cat.charAt(0).toUpperCase() + cat.slice(1)} Design ${i + 1}`,
        category: cat,
       
        sizes: [  'L', 'XL','XXL'],
        img: `/src/assets/images/${img}`,
        isNew: i < 3
      });
    });
  });
  return allProducts;
};

const fullProductList = generateProducts();

const categories = [
  { id: 'kurti', label: 'Designer Kurtis', img: `/src/assets/images/${categoryImages.kurti[0]}` },
  { id: 'sharara', label: 'Royal Shararas', img: `/src/assets/images/${categoryImages.sharara[0]}` },
  { id: 'coord', label: 'Co-Ord Sets', img: `/src/assets/images/${categoryImages.coord[0]}` },
  { id: 'plazo', label: 'Classic Plazos', img: `/src/assets/images/${categoryImages.plazo[0]}` },
  { id: 'skirt', label: 'Ethnic Skirts', img: `/src/assets/images/${categoryImages.skirt[0]}` },
];

const Shop = ({ addToCart }) => {
    const [products, setProducts] = useState(fullProductList);
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500); 
        return () => clearTimeout(timer);
    }, []);

    const handleFilter = (category) => {
        setFilter(category);
        if (category === 'all') {
            setProducts(fullProductList);
        } else {
            setProducts(fullProductList.filter(item => item.category === category));
        }
    };

    const handleSort = (type) => {
        const sorted = [...products].sort((a, b) => 
            type === 'low' ? a.price - b.price : b.price - a.price
        );
        setProducts(sorted);
    };

    const handleAddToCart = (item) => {
        addToCart(item);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    if (loading) {
        return (
            <div className="opening-animation">
                <div className="logo-box">
                    <h1 className="brand-name">RADHIKA</h1>
                    <div className="brand-line"></div>
                    <p className="tagline">Elegance Redefined</p>
                </div>
            </div>
        );
    }

    return (
        <div className="shop-wrapper">
            {/* --- HEADER WITH TYPING ANIMATION --- */}
            <header className="page-header">
                <div className="header-content">
                    {/* The key={filter} ensures the animation restarts when filter changes */}
                    <div className="typing-container">
                        <h1 key={filter} className="typing-text">
                            {filter === 'all' ? ' Radhika Collection' : `${filter.toUpperCase()} 
                            EXCLUSIVES`}
                        </h1>
                    </div>
                    <p>Curated fashion for the modern royalty</p>
                </div>
            </header>

            <div className="shop-container">
                {/* SIDEBAR */}
                <aside className="sidebar">
                    <div className="sidebar-sticky">
                        <div className="filter-section">
                            <h3 className="sidebar-title">Collections</h3>
                            {filter !== 'all' && (
                                <button className="reset-btn" onClick={() => handleFilter('all')}>
                                    Show All
                                </button>
                            )}
                            
                            <div className="category-list">
                                {categories.map(cat => (
                                    <div 
                                        key={cat.id} 
                                        className={`category-item ${filter === cat.id ? 'active' : ''}`}
                                        onClick={() => handleFilter(cat.id)}
                                    >
                                        <div className="cat-thumb">
                                            <img src={cat.img} alt={cat.label} />
                                        </div>
                                        <span className="cat-name">{cat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="filter-section">
                            <h3 className="sidebar-title">Sort Price</h3>
                            <div className="price-toggles">
                                <button onClick={() => handleSort('low')}>Low to High</button>
                                <button onClick={() => handleSort('high')}>High to Low</button>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* PRODUCT GRID */}
                <main className="product-area">
                    <div className="grid">
                        {products.map((item, index) => (
                            <div 
                                className="card" 
                                key={item.id}
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className="card-image">
                                    <img src={item.img} alt={item.name} />
                                    {item.isNew && <span className="tag-new">New Arrival</span>}
                                    <div className="card-actions">
                                        <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                                        <button onClick={() => handleAddToCart(item)}>Buy Now</button>
                                    </div>
                                </div>
                                <div className="card-details">
                                    <h3>{item.name}</h3>
                                    <div className="price-row">
                                        <span className="amount">₹{item.price}</span>
                                        <div className="size-list">
                                            {item.sizes.map(s => <span key={s}>{s}</span>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>

            {/* --- TOAST NOTIFICATION --- */}
            {showToast && (
                <div className="toast-notification">
                    <span className="checkmark">✔</span> 
                    Your item has been added
                </div>
            )}
        </div>
    );
};

export default Shop;