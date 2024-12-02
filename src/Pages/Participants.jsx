import { useParams, useLocation } from 'react-router-dom';
import './Participants.css';

function Participants() {
    const { id } = useParams(); // Get the participant ID from the URL
    const location = useLocation(); // Access state passed via Link
    const participant = location.state; // Participant details passed via Link

    if (!participant) {
        return <div>No participant data available</div>;
    }

    return (
        <div>
            <h2>{participant.name}'s Details</h2>

            <div id="participants-pic" style={{
                width: '200px',
                height: '200px',
                backgroundImage: `url(${participant.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat:'no-repeat',
                borderRadius: '8px',
                marginBottom: '20px'
            }}></div>

            <div>
                <strong>Name:</strong> {participant.name}
            </div>

            <div>
                <strong>Skill:</strong> (Add skill details here)
            </div>
        </div>
    );
}

export default Participants;
