import React, {useEffect, useState} from "react";
import axios from 'axios';
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'
import './css/About.css'

const About = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=12');
        setUsers(response.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])

  const handleEmailClick = (email) => {
    window.open(`mailto:${email}`)
  }

  const handlePhoneClick = (phone) => {
    window.open(`tel:${phone}`)
  }
  return (
    <div className="content">
      <h1 className="about-heading">Our Team</h1>
      <div className="user-list">
        {users.map(user => {
          return (
            <div className="user-card" key={user.login.uuid}>
              <img className="user-image" src={user.picture.large} alt="user Thumbnail" />
              <h2 className="user-name">{`${user.name.title} ${user.name.first} ${user.name.list}`}</h2>
              <div className="user-info">
                <div className="user-info-item">
                  <p className="info-text" onClick={() => handleEmailClick(user.email)}>
                    <AiOutlineMail className="info-icon" />
                    {user.email}
                  </p>
                </div>
                <div className="user-info-item">
                  <p className="info-text" onClick={() => handlePhoneClick(user.cell)}>
                    <AiOutlinePhone className="info-icon" />
                    {user.cell}
                  </p>
                </div>
                <div className="user-info-item">
                  <p className="info-text" onClick={() => handlePhoneClick(user.phone)}>
                    <AiOutlinePhone className="info-icon" />
                    {user.phone}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};
export default About;
