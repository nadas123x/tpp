import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const Modulelist = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 5;
  const [query, setQuery] = useState('');


  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/search?query=${query}`);
      const data = await response.json();
      setItems(data.content);
    } catch (error) {
      console.error(error);
    }  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/items?page=${currentPage}&size=${pageSize}`, {
        headers: {
          Accept: 'application/json',
        },
      });      const data = await response.json();
      setItems(data.content);
      setTotalPages(data.totalPages);
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <div>
       <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.nom}</td>
              <td>{item.description}</td>

            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, pageSize, onPageChange }) => {
  const pages = Array.from(Array(totalPages).keys());

  return (
    <div>
      {pages.map(
        page => (
          <button
          key={page}
          disabled={page === currentPage}
          onClick={() => onPageChange(page)}
          >
          {page + 1}
          </button>
          ))}
          </div>
          );
          };
          
          export default Modulelist;
