import React from 'react';
import "./Header.css";
import user from "../../images/user/elon-user.jpg";

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <h2>Developer Cafe</h2>
                </div>
                <div>
                    <img src={user} alt="" />
                </div>
            </nav>
            <hr />
        </header>
    );
};

export default Header;