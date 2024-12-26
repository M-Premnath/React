import React, { useState } from 'react';

const App = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 3; 

    const handleSearch = () => {
        if (search) {
            fetch(`https://pixabay.com/api/?key=47811686-888ff7389a6e9b1e8fe8c51c4&q=${search}&image_type=photo`)
                .then((res) => res.json())
                .then((d) => {
                    setData(d.hits);
                    setCurrentPage(1); 
                });
        }
    };

    const totalPages = Math.ceil(data.length / recordsPerPage);

    const getRecords = () => {
        const firstIndex = (currentPage - 1) * recordsPerPage;
        const lastIndex = firstIndex + recordsPerPage;
        return data.slice(firstIndex, lastIndex);
    };

    return (
        <div>
            <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
                placeholder='Search Images' 
            />
            <button onClick={handleSearch}>Search</button>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {getRecords().map((item) => (
                    <div key={item.id} style={{ margin: '10px' }}>
                        <img 
                            src={item.largeImageURL} 
                            height={item.webformatHeight} 
                            width={item.webformatWidth} 
                            alt={item.tags} 
                        />
                    </div>
                ))}
            </div>
            <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Prev</button>
            {currentPage}
            <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
};

export default App;