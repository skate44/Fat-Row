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

            <table className="fat-row-table">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th onClick={() => requestSort('client', 'requests')}>Client Requests</th>
                        <th onClick={() => requestSort('client', 'rate')}>Client Rate</th>
                        <th onClick={() => requestSort('client', 'p75')}>Client p75</th>
                        <th onClick={() => requestSort('client', 'p90')}>Client p90</th>
                        <th onClick={() => requestSort('client', 'p99')}>Client p99</th>
                        <th onClick={() => requestSort('client', 'error')}>Client Error</th>
                        <th onClick={() => requestSort('server', 'requests')}>Server Requests</th>
                        <th onClick={() => requestSort('server', 'rate')}>Server Rate</th>
                        <th onClick={() => requestSort('server', 'p75')}>Server p75</th>
                        <th onClick={() => requestSort('server', 'p90')}>Server p90</th>
                        <th onClick={() => requestSort('server', 'p99')}>Server p99</th>
                        <th onClick={() => requestSort('server', 'error')}>Server Error</th>
                    </tr>
                </thead>
                
                <tbody>
                    {filteredData.map((service, index) => (
                        <React.Fragment key={index}>
                            <tr>
                                <td >{service.service}</td>
                                <td>{service.client.requests}</td>
                                <td>{service.client.rate}</td>
                                <td>{service.client.p75}</td>
                                <td>{service.client.p90}</td>
                                <td>{service.client.p99}</td>
                                <td>{service.client.error}</td>
                                <td>{service.server.requests}</td>
                                <td>{service.server.rate}</td>
                                <td>{service.server.p75}</td>
                                <td>{service.server.p90}</td>
                                <td>{service.server.p99}</td>
                                <td>{service.server.error}</td>
                            </tr>
                        </React.Fragment> ))}
                </tbody>
            </table>
        </div>
    );
};

export default FatRowTable;