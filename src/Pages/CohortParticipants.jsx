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

                    <div style={{display:'flex', gap:'40px',}}>

                        <div className='profile' id="profile1">
                            <div id='profile-info'>
                                
                                    <p style={{
                                        fontSize:'18px'
                                    }}>Amina Yousef</p>
                                    <p style={{
                                        fontSize:'20px'
                                    }}>Leadership Skill: 80%</p>
                                
                                
                                <button id='view-btn'>View more</button>
                            </div>

                        </div>
                        <div className='profile' id="profile2">
                            <div id='profile-info'>
                                
                                    <p style={{
                                        fontSize:'18px'
                                    }}>Amina Yousef</p>
                                    <p style={{
                                        fontSize:'20px'
                                    }}>Leadership Skill: 80%</p>
                                
                                
                                <button id='view-btn'> View more</button>
                            </div>

                        </div>

                        <div className='profile' id="profile3">
                            <div id='profile-info'>
                                
                                    <p style={{
                                        fontSize:'18px'
                                    }}>Amina Yousef</p>
                                    <p style={{
                                        fontSize:'20px'
                                    }}>Leadership Skill: 80%</p>
                                
                                
                                <button id='view-btn'>View more</button>
                            </div>

                        </div>

                        <div className='profile' id="profile4">
                            <div id='profile-info'>
                                
                                    <p style={{
                                        fontSize:'18px'
                                    }}>Amina Yousef</p>
                                    <p style={{
                                        fontSize:'20px'
                                    }}>Leadership Skill: 80%</p>
                                
                                
                                <button id='view-btn'>View more</button>
                            </div>

                        </div>

                        <div className='profile' id="profile5">
                            <div id='profile-info'>
                                
                                    <p style={{
                                        fontSize:'18px'
                                    }}>Amina Yousef</p>
                                    <p style={{
                                        fontSize:'20px'
                                    }}>Leadership Skill: 80%</p>
                                
                                
                                <button id='view-btn'>View more</button>
                            </div>

                        </div>

                    </div>
                </div>



            </div>
            
        </div>
    )
}

export default CohortParticipants;