import "./Services.css";
import 'boxicons/css/boxicons.min.css'

const services = [
  {
    icon: "file",
    title: "Tax Preparation",
    description:
      "Accurate and timely tax filings to maximize your savings and ensure compliance.",
  },
  {
    icon: "calculator",
    title: "Financial Planning",
    description:
      "Strategic financial planning to help you achieve your long-term goals and objectives.",
  },
  {
    icon: "pie-chart",
    title: "Accounting Services",
    description:
      "Comprehensive accounting services including bookkeeping, audits, and financial reporting.",
  },
  {
    icon: "bar-chart",
    title: "Business Consulting",
    description:
      "Expert advice on business strategy, operations, and growth to drive success.",
  },
  {
    icon: "credit-card",
    title: "Payroll Management",
    description:
      "Efficient payroll processing and management to ensure accurate and timely payments.",
  },
  {
    icon: "shield",
    title: "Risk Management",
    description:
      "Identifying and mitigating financial risks to protect your assets and investments.",
  },
];

const Services = () => {
    return (
      <div className="services-container container" id="services">
        <h1 className="main-heading">Our Services</h1>
        <h2 className="brief-headingg">Explore Our Expertise and Offerings</h2>
        <div className="services-wrapper">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <box-icon
                name={service.icon}
                size="lg"
                className="service-icon"
              ></box-icon>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  
export default Services;
