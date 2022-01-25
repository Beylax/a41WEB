import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from "./Pagine/Home";
import ErrorPage from "./Pagine/ErrorPage";
import React from 'react';
import A41Logo from './Immagini/a41Logo.png'
import FacebookLogo from './Immagini/facebookLogo.png'
import InstagramLogo from './Immagini/instagramLogo.png'
import WhatsappLogo from './Immagini/whatsappLogo.png'
import YoutubeLogo from './Immagini/youtubeLogo.png'

class App extends React.Component {

  render() {
    return(
      <div className="App">
        <BrowserRouter>
          <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
              <div className='container-fluid'>
                <a className="navbar-brand" href="/"><img className='App-logo' src={A41Logo} alt="Logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="/Negozio">Negozio</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#Null" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Su di noi</a>
                      <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                        <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="#Chisiamo">Chi siamo</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="/DoveSiamo">Dove siamo</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="#contatti">Contatti</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="#Brand">I nostri brand</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="#orari">Orari negozio</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="/SnowboardConNoi">Vieni a snowboardare con noi</a>
                        </li>
                        <li><hr class="dropdown-divider bg-white"/></li>
                        <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="/Privacy">Privacy/Resi/Informazioni</a>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <div className='nav-item my-3'>
                      <a href='https://www.facebook.com/Area41BoardShop' target='_blank' rel="noreferrer"><img src={FacebookLogo} alt="immagine"/></a>
                      <a href='https://www.youtube.com/channel/UCO9gA4RKYskMgBAjUfgqT5Q' target='_blank' rel="noreferrer"><img src={YoutubeLogo} alt="immagine"/></a>
                      <a href='https://www.instagram.com/a41street_boardshop/' target='_blank' rel="noreferrer"><img src={InstagramLogo} alt="immagine"/></a>
                      <a href='https://web.whatsapp.com/send?phone=+393288870650' target='_blank' rel="noreferrer"><img src={WhatsappLogo} alt="immagine"/></a>
                  </div>

                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Cerca nel negozio" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Cerca</button>
                  </form>
                </div>
              </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/*" element={<ErrorPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
