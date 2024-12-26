import React, { useEffect, useState } from 'react';
import './Pagination/App.css'
const App = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Set to 3 items per page

    // Fetch products from the API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
               return response.json();
            })
            .then((data) => {
                setProducts(data);
            })          
    }, []);

    // Calculate the current products to display
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate total pages
    const totalPages = Math.ceil(products.length / itemsPerPage);

    return (
        <div className='main'>
            <h1>Product List with pagination</h1>
            <ol>
                {currentProducts.map(product => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <img src={product.image} alt="" />
                        <p className='price'>Price: ${product.price}</p>
                    </li>
                ))}
            </ol>
            <div className="pagination">
                <button 
                    onClick={() => handlePageChange(currentPage - 1)} 
                    disabled={currentPage === 1}>Prev </button>
                <span>{currentPage}</span>
                <button 
                    onClick={() => handlePageChange(currentPage + 1)} 
                    disabled={currentPage === totalPages}>Next </button>
            </div>
        </div>
    );
};

export default App;