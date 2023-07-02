import React, { useState, useEffect } from "react";
import * as mdb from "mdb-ui-kit";
import { Input } from "mdb-ui-kit";
import "./App.css";
import Alldata from "../src/playlist.json";

function App() {
	console.log(Alldata);

	return (
		<>
			<div className="App">
				<header className="App-header">
					<h1>Welcome to My Music App</h1>
				</header>
				<div className="container">
					<ul>
						{Alldata.map((item) => (
							<li key={item.id}>
								<h2>{item.title}</h2>
								<p>{item.description}</p>
								<img src={item.artworkUrl} alt="Artwork" />
								<audio controls>
									<source src={item.stream_url} type="audio/mpeg" />
									Your browser does not support the audio element.
								</audio>
								<div>
									<h3>User:</h3>
									<p>Username: {item.user.username}</p>
									<p>City: {item.user.city}</p>
									<p>waveform_url: {item.user.waveform_url}</p>
									<a href="/">website: {item.user.website}</a>
									<p>
										Avatar: <img src={item.user.avatar_url} alt="Avatar" />
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
				<footer className="App-footer">
					<p>&copy; 2023 Your Company. All rights reserved.</p>
				</footer>
			</div>
		</>
	);
}

export default App;
