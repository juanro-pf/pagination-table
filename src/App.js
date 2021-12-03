import React, { useState } from 'react';
import { useFetchNames } from './hooks/useFetchNames';

const App = () => {

  const [page, setPage] = useState(1);

  const [names, loading]= useFetchNames(page);
  
  const handleFirst = () => {
    setPage(1);
  };

  const handlePrev = () => {
    if(page>1) setPage(page - 1);
  };

  const handleNext = () => {
    if(page<10) setPage(page + 1);
  };

  const handleLast = () => {
    setPage(10);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {
            !loading &&
            names.results.map((name, i) => 
              <tr >
                <td>{(page-1)*10 + parseInt(i)}</td>
                <td>{name.name.first}</td>
                <td>{name.name.last}</td>
              </tr>
            )
          }
        </tbody>
      </table>
      <section className="pagination">
        <button className="first-page-btn" onClick={handleFirst} disabled={loading|page===1}>first</button>
        <button className="previous-page-btn" onClick={handlePrev} disabled={loading|page===1}>previous</button>
        <button className="next-page-btn" onClick={handleNext} disabled={loading|page===10}>next</button>
        <button className="last-page-btn" onClick={handleLast} disabled={loading|page===10}>last</button>
      </section>
    </div>

  )
}

export default App
