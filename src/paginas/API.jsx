import React, { useState, useEffect } from 'react';
import '../estilos/API.css';

function WeatherTable() {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch('https://api.datos.gob.mx/v1/condiciones-atmosfericas')
      .then(response => response.json())
      .then(data => {
        if (data && data.results) {
          setWeatherData(data.results);
        } else {
          console.error('La respuesta de la API no tiene el formato esperado.');
        }
      })
      .catch(error => console.error(error));
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredData = weatherData.filter(
    item => selectedState === '' || item.state === selectedState
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 sm:ml-50">
        <div className="p-20 border-dashed">
          <div className="flex items-center justify-center h-48 mb-4 rounded">
            <div className="container">
              <div className="relative left-70 top-24">
                <div className="search-container">
                  <select className="select-container"
                    value={selectedState}
                    onChange={e => setSelectedState(e.target.value)}
                  >
                    <option value="">Seleccionar estado...</option>
                    {Array.from(new Set(weatherData.map(item => item.state))).map(state => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="scroll-table">
                  <div className="table-container">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Estado</th>
                          <th>Temperatura (°C)</th>
                          <th>Cielo</th>
                          <th>Humedad (%)</th>
                          <th>Velocidad del Viento (km/h)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {displayedData.map(item => (
                          <tr key={item._id} className="border-b dark:border-gray-700">
                            <td>{item._id}</td>
                            <td>{item.state}</td>
                            <td>{item.tempc}</td>
                            <td>{item.skydescriptionlong}</td>
                            <td>{item.relativehumidity}</td>
                            <td>{item.windspeedkm}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="pagination">
                  {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherTable;
