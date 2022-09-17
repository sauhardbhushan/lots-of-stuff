import React from 'react';
import './App.css';
import Clock from "./components/Clock/Clock";
import GalleryQueue from "./components/GalleryQueue/GalleryQueue";
import ImageWithContent from "./components/ImageWithContent/ImageWithContent";

function App() {
    return (
        <div className="App">
            <p>lots-of-stuff// worldwide-clock </p>
            <Clock/>
            <GalleryQueue/>
            <ImageWithContent/>
        </div>
    );
}

export default App;
