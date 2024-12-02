import { Link } from 'react-router-dom';
import './CohortParticipants.css'

function CohortParticipants () {
    return(
        <div id="cohort-pageLayout">

            <div id="sidebar">for the sidebar</div>
            

            <div id="cohort-album">
                <div id="content-top">
                <p style={{
                        fontSize:'24px',
                        fontWeight:'600',
                        marginBottom:'10px'
                    }}>2024 Autumn Cohort</p>
                    
                </div>

                <div id="participant-list">

                    <div style={{display:'flex', gap:'10px', marginBottom:'10px',}}>

                        <Link to='/participants' >
                            <div className='profile' id="profile1"> </div>
                        </Link>

                        <Link to='/participants' >
                            <div className='profile' id="profile2"> </div>
                        </Link>

                        <Link to='/participants' >
                            <div className='profile' id="profile3"> </div>
                        </Link>

                        <Link to='/participants' >
                            <div className='profile' id="profile4"> </div>
                        </Link>

                        <Link to='/participants' >
                            <div className='profile' id="profile5"> </div>
                        </Link>

                        <Link to='/participants' >
                            <div className='profile' id="profile6"> </div>
                        </Link>

                        <Link to='/participants' >
                            <div className='profile' id="profile7"> </div>
                        </Link>

                        <Link to='/participants' >
                            <div className='profile' id="profile8"> </div>
                        </Link>

                        <Link to='/participants' >
                            <div className='profile' id="profile9"> </div>
                        </Link>

                        <Link to='/participants' >
                            <div className='profile' id="profile10"> </div>
                        </Link>
                        

                    </div>
                    
                    <div style={{display:'flex', gap:'10px', marginBottom:'10px',}}>

                        <Link to='/participants' >
                            <div className='profile' id="profile1"> </div>
                        </Link>

                        <Link to='/participants' >
                            <div className='profile' id="profile2"> </div>
                        </Link>

                        <Link to='/participants' >
                            <div className='profile' id="profile3"> </div>
                        </Link>

                        <Link to='/participants' >
                            <div className='profile' id="profile4"> </div>
                        </Link>

                        <Link to='/participants' >
                            <div className='profile' id="profile5"> </div>
                        </Link>

                        <Link to='/participants' >
                            <div className='profile' id="profile6"> </div>
                        </Link>

                        <Link to='/participants' >
                            <div className='profile' id="profile7"> </div>
                        </Link>

                        <Link to='/participants' >
                            <div className='profile' id="profile8"> </div>
                        </Link>

                        <Link to='/participants' >
                            <div className='profile' id="profile9"> </div>
                        </Link>

                        <Link to='/participants' >
                            <div className='profile' id="profile10"> </div>
                        </Link>
                        

                    </div>

                    
                </div>



            </div>
            
        </div>
    )
}

export default CohortParticipants;