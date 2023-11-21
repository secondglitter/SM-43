import React, { useState } from 'react';
import '../estilos/Spinner.css'; // Asegúrate de importar el archivo CSS donde colocarás los estilos del spinner

const Cube = () => {
  const soundFiles = ['pacman-2.mp3', 'spacman-3.mp3', 'pacman-4.mp3', 'pacman-5.mp3', 'spacman-6.mp3', 'pacman-7.mp3', 'pacman-8.mp3', 'spacman-9.mp3', 'pacman-10.mp3', 'pacman-11.mp3']; // Agrega aquí los nombres de tus archivos de sonido

  const getRandomSound = () => {
    const randomIndex = Math.floor(Math.random() * soundFiles.length);
    return `/Sounds/${soundFiles[randomIndex]}`;
  };

  const [audio] = useState(new Audio(getRandomSound()));

  const handleClick = () => {
    // Cambia el audio al hacer clic
    audio.src = getRandomSound();
    // Reproduce el sonido
    audio.play();
  };

  return (
    <div className="spinner" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Cube;
