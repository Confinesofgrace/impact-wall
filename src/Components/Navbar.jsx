import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar () {
    return (
        <div id='navbar'>
            <div id='for-logo'>
                <p style={{
                    fontSize:'36px',
                    fontWeight:'bold',
                    textAlign:'center'
                }}> Impact Wall </p>
                <p style={{
                    fontSize:'10px',
                    fontWeight:'medium'

                }}>Empowering Innovators and Measuring Success</p>
            </div>

            <div id='for-tabs'>
                <NavLink to='/'>
                    <div>
                        <p>Home</p>
                        <hr></hr>
                    </div>
                </NavLink>

                <NavLink to='/cohort-page' >
                    <div>
                        <p>Cohorts</p>
                        <hr></hr>
                    </div>
                </NavLink>
                
                <div>
                    <p>About</p>
                    <hr></hr>
                </div>

            </div>
            
        </div>
    )
}

export default Navbar;