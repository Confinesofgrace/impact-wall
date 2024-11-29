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

                    <div>

                        <div id="profile1">
                            <div id='profile-info'>
                                <p>Amina Yousef</p>
                                <p>Leadership Skill: 80%</p>
                                <button>View more</button>
                            </div>

                        </div>

                    </div>
                </div>



            </div>
            
        </div>
    )
}

export default CohortParticipants;