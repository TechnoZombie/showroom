import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";


function Sidebar() {
    return (
        <div>
<Link to="#" className="sidebar">
    <FaIcons.FaBars/>

</Link>
        </div>
    );
};

Sidebar.propTypes = {

};

export default Sidebar;