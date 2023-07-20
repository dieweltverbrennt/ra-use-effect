import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const List = ({ onSelectUser, selected }) => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_USERS_URL}users.json`);
            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const json = await response.json();
            setUserList(json);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <ul className="list-group">
          {userList.map((item) => (
            <li
              className={ selected !== item.id ? "list-group-item" : "list-group-item active" }
              key={item.id}
              onClick={() => onSelectUser(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      );
};

List.propTypes = {
    onSelectUser: PropTypes.func,
    select: PropTypes.number,
};

export default List;