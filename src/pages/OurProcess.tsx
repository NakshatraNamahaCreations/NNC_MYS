import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './OurProcess.module.css';
import {
   
    FaClock,
  
    FaPencilRuler,
    FaLayerGroup,
    FaLightbulb,
    FaTools,
    FaShieldAlt,
    FaUserFriends,
    FaUsersCog,
    FaLifeRing,
    FaSmile
} from "react-icons/fa";
import {
    faLaptop,
    faEnvelope,
    faClock,
    faMobileAlt,
    faMagnifyingGlass,
    faCircleInfo
  } from '@fortawesome/free-solid-svg-icons';

const processData = [
    {
        key: "whyChoose",
        label: "Why Choose Us",
        content: (
            <div className="content-box">
                <h4>
                    Experience unparalleled Mobile App and Website Development Services that combine both Creativity and Technical expertise or making your vision a reality.
                </h4>
                <div></div>
                <div className="split-container">
                <div className="left-div">
                    <h4>Mission</h4>
                    <p>
                        To Deliver Business Focused IT Solutions, with a strong digital transformation focus for SMBs & Enterprises across the globe, offering Cloud, Software, Mobile App Development, PHP Development, Cloud Consulting services & Web Presence Solutions</p>
                </div>
                <div className="right-div">
                    <h4>Vision</h4>
                    <p>
                    We aspire to be the world’s best IT Solutions Partner, through technology leadership, innovation and a world class work force.</p>
                </div>
                </div>
            </div>
        )
    },
    {
        key: "webExcellence",
        label: "Web Excellence",
        content: (
            <div className="content-box">
                <h2>Best Website Development Company in Mysore</h2>
                <p>
                Nakshatra Namaha Creations is a leader in delivering innovative and dynamic web solutions, 
                offering services such as Website Development, Mobile App Development, Graphic Design, Animation, 
  orporate Video Production, Digital Marketing, and B2B Marketing Services. As the best website design company in Mysore, we create visually stunning and functional websites tailored to engage your target audience effectively. Known for being the best website development company in Mysore, we provide high-performance corporate websites, e-commerce platforms, and custom web solutions designed to deliver a seamless user experience. Moreover, as the best mobile app development company in Mysore, we craft cutting-edge mobile applications that are scalable, user-friendly, and aligned with your business goals.
                </p>
             
            </div>
        )
    },

    {
        key: "whybuissness",
        label: "Why your buissness need a website in  2025?",
        content: (
           
            <ul className="stats-list">
            <li className="stat-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faLaptop} />
              </div>
              <div>
                <strong>92%</strong>
                <p>Consider easy navigation as crucial for a good website experience.</p>
              </div>
            </li>
          
            <li className="stat-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <div>
                <strong>72%</strong>
                <p>Prefer researching businesses online before making contact.</p>
              </div>
            </li>
          
            <li className="stat-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div>
                <strong>66%</strong>
                <p>Will leave a website if it takes more than 3 seconds to load.</p>
              </div>
            </li>
          
            <li className="stat-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faCircleInfo} />
              </div>
              <div>
                <strong>80%</strong>
                <p>Expect businesses to have an updated and informative website.</p>
              </div>
            </li>
          
            <li className="stat-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faMobileAlt} />
              </div>
              <div>
                <strong>69%</strong>
                <p>Are more likely to engage with mobile-optimized websites.</p>
              </div>
            </li>
          
            <li className="stat-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <strong>55%</strong>
                <p>Prefer contacting businesses through their websites.</p>
              </div>
            </li>
          </ul>
          
            
        )
    },
    {
        key: "OurProcess",
        label: "Our Process",
        content: (
            <ul className="stats-grid">
                <li className="stat-card">
                    <div className="stat-icon"><FaPencilRuler /></div>
                    <h3>Custom Designs</h3>
                    <p>Unique visuals to engage audiences</p>
                </li>
                <li className="stat-card">
                    <div className="stat-icon"><FaLayerGroup /></div>
                    <h3>Scalable Framework</h3>
                    <p>Structured for future growth</p>
                </li>
                <li className="stat-card">
                    <div className="stat-icon"><FaLightbulb /></div>
                    <h3>Innovative Solutions</h3>
                    <p>Creative approaches to every project</p>
                </li>
                <li className="stat-card">
                    <div className="stat-icon"><FaTools /></div>
                    <h3>Latest Technology</h3>
                    <p>Modern tools and platforms used</p>
                </li>
                <li className="stat-card">
                    <div className="stat-icon"><FaShieldAlt /></div>
                    <h3>Advanced Protection</h3>
                    <p>Comprehensive cybersecurity measures</p>
                </li>
                <li className="stat-card">
                    <div className="stat-icon"><FaUserFriends /></div>
                    <h3>User-Centric Design</h3>
                    <p>Prioritizing ease for end-users</p>
                </li>
                <li className="stat-card">
                    <div className="stat-icon"><FaUsersCog /></div>
                    <h3>Dedicated Team</h3>
                    <p>Skilled experts for your success</p>
                </li>
                <li className="stat-card">
                    <div className="stat-icon"><FaLifeRing /></div>
                    <h3>Maintenance Support</h3>
                    <p>Ongoing reliability for performance</p>
                </li>
                <li className="stat-card">
                    <div className="stat-icon"><FaClock /></div>
                    <h3>Timely Delivery</h3>
                    <p>Meeting deadlines with precision</p>
                </li>
                <li className="stat-card">
                    <div className="stat-icon"><FaSmile /></div>
                    <h3>Client Satisfaction</h3>
                    <p>Going beyond expectations</p>
                </li>
            </ul>
        )
    }
];


function OurProcess() {
    const [selectedKey, setSelectedKey] = useState("whyChoose");
    const selected = processData.find(item => item.key === selectedKey);

    return (
        <div className="our-process-container">
            <div className="button-list">
                {processData.map(item => (
                    <button
                        key={item.key}
                        onClick={() => setSelectedKey(item.key)}
                        className={item.key === selectedKey ? "active" : ""}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            <div className="description-box">
                {selected?.content}
            </div>
        </div>
    );
}

export default OurProcess;
