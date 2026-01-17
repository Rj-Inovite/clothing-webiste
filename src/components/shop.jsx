import React, { useState, useEffect } from 'react';
import './shop.css';
import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/3.png';
import img4 from '../assets/images/4.png';
import img5 from '../assets/images/5.png';
import img6 from '../assets/images/6.png';
import img7 from '../assets/images/7.png';
import img8 from '../assets/images/8.png';
import img9 from '../assets/images/9.png';
import img10 from '../assets/images/10.png';
import img12 from '../assets/images/12.png';
import img13 from '../assets/images/13.png';
import img14 from '../assets/images/14.png';
import img15 from '../assets/images/15.png';
import img16 from '../assets/images/16.png';
import img17 from '../assets/images/17.png';
import img18 from '../assets/images/18.png';
import img19 from '../assets/images/19.png';


// --- DATA GENERATION ---
const categoryImages = {
  kurti: [img1, img2, img3, img4],
  sharara: [img5, img6, img7, img8],
  coord: [img9, img10, img12],
  plazo: [img13, img14, img15],
  skirt: [img16, img17, img18, img19]
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
        img: img,
        isNew: i < 3
      });
    });
  });
  return allProducts;
};

const fullProductList = generateProducts();

const categories = [
  { id: 'kurti', label: 'Designer Kurtis', img: categoryImages.kurti[0] },
  { id: 'sharara', label: 'Royal Shararas', img: categoryImages.sharara[0] },
  { id: 'coord', label: 'Co-Ord Sets', img: categoryImages.coord[0] },
  { id: 'plazo', label: 'Classic Plazos', img: categoryImages.plazo[0] },
  { id: 'skirt', label: 'Ethnic Skirts', img: categoryImages.skirt[0] },
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