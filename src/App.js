import React, { useState, useEffect } from 'react';
import * as mdb from 'mdb-ui-kit';
import { Input } from 'mdb-ui-kit';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('playlist.json')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Music App</h1>
        </header>
        {/* <div className="container">
          {loading ? (
            <div className="loader">Loading...</div>
          ) : (
            <div className="song-grid">
              {data.map((item, index) => (
                <div className="card" key={index}>
                  <img src={item.cover} alt="" />
                  <h3>{item.name}</h3>
                  <p>{item.artist}</p>
                </div>
              ))}
            </div>
          )}
        </div> */}
        <div className='all-cards'>
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" className="card-img-top" alt="Fissure in Sandstone" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#!" className="btn btn-primary">Button</a>
          </div>
        </div>
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" className="card-img-top" alt="Fissure in Sandstone" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#!" className="btn btn-primary">Button</a>
          </div>
        </div>
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" className="card-img-top" alt="Fissure in Sandstone" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#!" className="btn btn-primary">Button</a>
          </div>
        </div>
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" className="card-img-top" alt="Fissure in Sandstone" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#!" className="btn btn-primary">Button</a>
          </div>
        </div>
        </div>
        <footer className="App-footer">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </footer>
      </div>

    </>
  );
}

export default App;
