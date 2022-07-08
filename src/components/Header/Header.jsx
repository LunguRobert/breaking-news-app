import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../assets/icons/news.svg'
import './Header.css'

class Header extends React.Component {

  constructor(props){
    super(props);
  }


  render(){
  
      return (
        <header className=''>
            <div className='header-bar d-flex align-items-center'>
                <div className='container container-min-max-width d-flex justify-content-between'>
                  <Link to="/">
                      <img src={logo}/>
                  </Link>
                  <Link id="weather" to="/weather">
                          <span>Weather</span>
                  </Link>
                </div>
            </div>
        </header>
      )
      
  }
}



export default Header