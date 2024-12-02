import { Link } from 'react-router-dom';
import './CohortParticipants.css';

function CohortParticipants() {
    // Simulated data for participants

    //<div id="profile-info"><p>{participant.name}</p></div>

    const participants = [
        { id: 1, name: 'Alice', image: '../assets/close-up-beautiful-african-woman-portrait.png' },
        { id: 2, name: 'Bob', image: '../assets/smiley-african-woman-with-golden-earrings.png' },
        { id: 3, name: 'Charlie', image: '../assets/headshot-attractive-young-dark-skinned-bearded-student-stylish-jeans-shirt-smiling-cheerfully-showing-his-perfect-white-teeth-looking-sideways-with-inspired-happy-smile-horizontal.png' },
        { id: 4, name: 'Diana', image: '../assets/woman-home.png' },
        { id: 5, name: 'Edward', image: '../assets/happy-black-woman-posing.png' },
        { id: 6, name: 'Fiona', image: '../assets/portrait-father-his-backyard.png' },
        { id: 7, name: 'George', image: '../assets/7-young-african-american-woman-with-headband-posing.jpg' },
        { id: 8, name: 'Hannah', image: '../assets/8-profile.jpg' },
        { id: 9, name: 'Ian', image: '../assets/9-portrait-afro-business-woman-standing-outdoors-street.jpg' },
        { id: 10, name: 'Jane', image: '../assets/10-portrait-serious-man.jpg' },
    ];

    return (
        <div id="cohort-pageLayout">
            <div id="sidebar">for the sidebar</div>

            <div id="cohort-album">
                <div id="content-top">
                    <p style={{ fontSize: '24px', fontWeight: '600', marginBottom: '10px' }}>
                        2024 Autumn Cohort
                    </p>
                </div>

                <div id="participant-list">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
                        {participants.map((participant) => (
                            <Link
                            key={participant.id}
                            to={`/participants/${participant.id}`}
                            state={participant} // Pass the participant data as state
                        >
                            <div
                                className="profile"
                                style={{
                                    backgroundImage: `url(${participant.image})`,
                                }}
                            ></div>
                        </Link>
                        
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CohortParticipants;
