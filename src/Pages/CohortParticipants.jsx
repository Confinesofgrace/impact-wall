import './CohortParticipants.css'

function CohortParticipants () {
    return(
        <div id="cohort-pageLayout">
            <div id="sidebar">for the sidebar</div>

            <div id="content">
                <div id="content-top">
                <p style={{
                        fontSize:'24px',
                        fontWeight:'600',
                    }}>Participants List</p>
                    <input placeholder='Search participants' 
                    style={{
                        width:'60%',
                        height:'48px',
                        padding:'10px',
                        margin:'10px 0px',
                        borderStyle:'none',
                        border:'1px solid',
                        borderRadius:'12px'
                    }}/>
                </div>

                <div id="participant-list">
                    <p>2024 Autumn Cohort</p>

                    <div style={{display:'flex', gap:'10px', marginBottom:'10px',}}>

                        <div className='profile' id="profile1"> </div>
                        <div className='profile' id="profile2"> </div>

                        <div className='profile' id="profile3"> </div>

                        <div className='profile' id="profile4"> </div>

                        <div className='profile' id="profile5"> </div>

                    </div>
                    <div style={{display:'flex', gap:'10px', marginBottom:'10px',}}>

                        <div className='profile' id="profile6"> </div>
                        <div className='profile' id="profile7"> </div>

                        <div className='profile' id="profile8"> </div>

                        <div className='profile' id="profile9"> </div>

                        <div className='profile' id="profile10"> </div>

                    </div>
                </div>



            </div>
            
        </div>
    )
}

export default CohortParticipants;