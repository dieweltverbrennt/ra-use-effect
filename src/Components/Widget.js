import React from "react";
import { useState } from "react";

import List from "./List";
import Details from "./Details";

const Widget = () => {
    const [user, setUser] = useState({});

    return (
        <div className="App-widget">
            <List onSelectUser={setUser} selected={user.id}/>
            {user.id ? <Details id={user.id} /> : null}
        </div>
    );

};

export default Widget;