import React, { useEffect, useState } from "react";
import Sidebar from "../componentes/sidebar";
import '../estilos/tabla.css';

function ApiGob() {
    const [weatherData, setWeatherData] = useState([]);
    const [selectedState, setSelectedState] = useState("");
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

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = weatherData
        .filter((city) => selectedState === "" || city.state === selectedState)
        .slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(weatherData.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <Sidebar />

            <div className="p-4 sm:ml-64">
                <div className="p-4 sm:ml-50">

                    <div className="p-20 border-dashed">

                        <div className="flex items-center justify-center h-48 mb-4 rounded">
                            <div className="scroll-table">
                                <div className="relative  left-70 top-24">
                                    <select
                                        className="form-select form-select-lg mb-3"
                                        value={selectedState}
                                        onChange={(e) => setSelectedState(e.target.value)}
                                    >
                                        <option value="">Todos los estados</option>
                                        <option value="Aguascalientes">Aguascalientes</option>
                                        <option value="Baja California">Baja California</option>
                                        <option value="Baja California Sur">Baja California Sur</option>
                                        <option value="Campeche">Campeche</option>
                                        <option value="Chihuahua">Chihuahua</option>
                                        <option value="Coahuila">Coahuila</option>
                                    </select>
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    ID
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Estado
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Temperatura
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Clima
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Humedad
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Velocidad
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentItems.map((item) => (
                                                <tr key={item._id} className="border-b dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                        {item._id}
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {item.state}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {item.tempc}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {item.skydescriptionlong}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {item.relativehumidity}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {item.windspeedkm}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="flex items-center justify-center mt-4">
                                        {pageNumbers.map((number) => (
                                            <button
                                                key={number}
                                                onClick={() => handlePageChange(number)}
                                                className={`mx-1 px-3 py-1 rounded-md ${
                                                    currentPage === number ? 'bg-gray-300' : 'bg-white hover:bg-gray-100'
                                                }`}
                                            >
                                                {number}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ApiGob;
