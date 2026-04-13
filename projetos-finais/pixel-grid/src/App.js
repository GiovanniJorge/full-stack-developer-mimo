import React, { useEffect, useState } from "react";
import "./App.css";
import PixelGrid from "./PixelGrid";
import Toolbar from "./Toolbar";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [grid, setGrid] = useState(() => {
    const initialGrid = [];
    for (let y = 0; y < 20; y++) { // Assumindo uma grade 20x20
      for (let x = 0; x < 20; x++) {
        initialGrid.push({ x, y, color: "white" }); // Cor inicial branca
      }
    }
    return initialGrid;
  });

  const updateColor = (x, y) => {
    setGrid((prevGrid) =>
      prevGrid.map((cell) =>
        cell.x === x && cell.y === y ? { ...cell, color: selectedColor } : cell
      )
    );
  };

  return (
    <div className="content-wrapper">
      <h1>Pixel Grid</h1>
      <PixelGrid grid={grid} updateColor={updateColor} />
      <Toolbar
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
    </div>
  );
};

export default App;

/* Caso você queira usar a versão com backend, descomente o 
código abaixo e comente a versão acima. Lembre-se de configurar 
a variável de ambiente BACKEND_URL para apontar para o seu servidor 
backend. */

/* const URL = process.env.BACKEND_URL;

const App = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    fetch(`${URL}/grid`)
      .then((response) => response.json())
      .then((data) => setGrid(data.grid))
      .catch((error) => console.error("Error fetching grid data:", error));
  }, []);

  const updateColor = async (x, y) => {
    try {
      const response = await fetch(`${URL}/setGridColor`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ x, y, color: selectedColor }),
      });
      const { grid: updatedGrid } = await response.json();
      setGrid(updatedGrid);
    } catch (error) {
      console.error("Error updating grid color:", error);
    }
  };

  return (
    <div className="content-wrapper">
      <h1>Pixel Grid</h1>
      <PixelGrid grid={grid} updateColor={updateColor} />
      <Toolbar
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
    </div>
  );
}; 

export default App; */