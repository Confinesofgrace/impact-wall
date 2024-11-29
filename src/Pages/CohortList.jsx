import CohortGroup from '../Components/CohortGroup';
import './CohortList.css'

function CohortList () {
    return (
        <div id="cohort-pageLayout">
            <div id="sidebar">for the sidebar</div>
            <div id="content">
                <div id="content-top">
                    <p style={{
                        fontSize:'24px',
                        fontWeight:'600',
                    }}>Cohort List</p>
                    <input placeholder='Search cohort/participants' 
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
                <div id="content-body">
                    <div 
                    style={{
                    
                        margin:'10px 0px',
                        
                    }}>
                        <p>Autumn Cohorts</p>
                        <CohortGroup/>

                    </div>
                    <div>
                        <p>Spring Cohorts</p>
                        <CohortGroup/>

                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default CohortList;