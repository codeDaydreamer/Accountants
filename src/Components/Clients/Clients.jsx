
import './Clients.css'; // Import the CSS file for styling

// Import images
import logo1 from '../../assets/google.png';
import logo2 from '../../assets/google.png';
import logo3 from '../../assets/google.png';
import logo4 from '../../assets/google.png';
import logo5 from '../../assets/google.png';
import logo6 from '../../assets/google.png';

const Clients = () => {
  const clients = [
    { logo: logo1, alt: 'Client 1' },
    { logo: logo2, alt: 'Client 2' },
    { logo: logo3, alt: 'Client 3' },
    { logo: logo4, alt: 'Client 4' },
    { logo: logo5, alt: 'Client 5' },
    { logo: logo6, alt: 'Client 6' }
  ];

  return (
    <div className="clients-container" id='clients'>
      <h1 className="clients-heading">Our Valued Clients</h1>
      <div className="clients-grid">
        {clients.map((client, index) => (
          <div key={index} className="client-logo-wrapper">
            <img src={client.logo} alt={client.alt} className="client-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
