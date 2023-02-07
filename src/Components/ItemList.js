import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import Spinner  from './Spinner';
import Table from './Table';
import axios from 'axios';


const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            const res = await axios.get(`/items?page=${currentPage - 1}&size=${itemsPerPage}`);
            setItems(res.data.content);
            setLoading(false);
        };
        fetchItems();
    }, [currentPage, itemsPerPage]);

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                <React.Fragment>
                    <Table items={currentItems} />
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={items.length}
                        paginate={paginate}
                    />
                </React.Fragment>
            )}
        </div>
    );
};

export default ItemList;
