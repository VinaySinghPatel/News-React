import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Mode's",
      isDarkMode: true
    };
  }

  modeChange = () => {
    this.setState(prevState => {
      const newMode = !prevState.isDarkMode;
      document.body.style.backgroundColor = newMode ? "black" : "white";
      document.body.style.color = newMode ? "white" : "black";
      return {
        text: newMode ? "Dark Mode" : "Light Mode",
        isDarkMode: newMode
      };
    });
  };

  render() {
    return (
      <div className='my-3' >
        <nav className="navbar fixed-top navbar-expand-lg nav-light " style={{ color: "grey", backgroundColor: "grey" }}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <h3>VINAY</h3>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Home">
                    Home
                  </Link>
                </li>
                <Link className="nav-link" to="/business">business</Link>
                <Link className="nav-link" to="/entertainment">entertainment</Link>
                <Link className="nav-link" to="/health">health</Link>
                <Link className="nav-link" to="/science">science</Link>
                <Link className="nav-link" to="/sports">sports</Link>
                <Link className="nav-link" to="/technology">technology</Link>
                <Link className="nav-link" to="/Home"><b>(Currently The Categeory System Are Not Working)</b></Link>
              </div>
            </div>
            <button onClick={this.modeChange} type="button" className="btn btn-light">
              {this.state.text}
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
