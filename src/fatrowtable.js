import './index.css'
import React, { useState } from 'react';
import { servicesData } from './data';

const FatRowTable = () => {
    const [filterText, setFilterText] = useState('');
    const [sideFilter, setSideFilter] = useState('');
    const [sortConfig, setSortConfig] = useState(null);

    const filteredData = servicesData
    .filter((service) =>
      service.service.toLowerCase().includes(filterText.toLowerCase())
    )
    .filter((service) =>
      sideFilter ? !!service[sideFilter] : true
    )
    .sort((a, b) => {
      if (sortConfig !== null) {
        const aValue = a[sortConfig.side][sortConfig.key];
        const bValue = b[sortConfig.side][sortConfig.key];
        if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    const requestSort = (side, key) => {
        let direction = 'ascending';
        if (
          sortConfig &&
          sortConfig.key === key &&
          sortConfig.side === side &&
          sortConfig.direction === 'ascending'
        ) {
          direction = 'descending';
        }
        setSortConfig({ side, key, direction });
      };


    return (
        <div className="table-container">
            <div className="controls">
                <input
                    type="text"
                    placeholder="Filter by service name"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                />
                <select onChange={(e) => setSideFilter(e.target.value)} value={sideFilter}>
                    <option value="">Both</option>
                    <option value="client">Client</option>
                    <option value="server">Server</option>
                </select>
            </div>
        </div>
    );
};

export default FatRowTable;