import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Details = ({ id }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        setLoading(true);
        try {
          const response = await fetch(`${process.env.REACT_APP_USERS_URL}${id}.json`);
          if (!response.ok) {
            throw new Error(response.statusText);
          }
    
          const json = await response.json();
          setUser(json);
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        getData();
      }, [id]);

      return (
        <React.Fragment>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className="list-group-info">
              <li className="list-group-info-item">
                <img src={user.avatar} />
              </li>
              <li className="list-group-info-item">{user.name}</li>
              <li className="list-group-info-item">City: {user.details.city}</li>
              <li className="list-group-info-item">Company: {user.details.company}</li>
              <li className="list-group-info-item">Position: {user.details.position}</li>
            </ul>
          )}
        </React.Fragment>
      );
};

Details.propTypes = {
    id: PropTypes.number,
  };

export default Details;