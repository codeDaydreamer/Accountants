
import './Team.css'; // Import the CSS file for styling

// Import team member images
import member1 from '../../assets/member1.jpg';
import member2 from '../../assets/member1.jpg';
import member3 from '../../assets/member1.jpg';
import member4 from '../../assets/member1.jpg';

const Team = () => {
  const teamMembers = [
    { image: member1, name: 'John Doe', title: 'CEO' },
    { image: member2, name: 'Jane Smith', title: 'CTO' },
    { image: member3, name: 'Alice Johnson', title: 'CFO' },
    { image: member4, name: 'Bob Brown', title: 'COO' }
  ];

  return (
    <div className="team-container" id='team'>
      <h1 className="team-heading">Meet Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <h2 className="team-name">{member.name}</h2>
            <p className="team-title">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
