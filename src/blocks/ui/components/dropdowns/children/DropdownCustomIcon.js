import React from 'react';
import { Dropdown } from 'react-bootstrap';

const DropdownCustomIcon = () => {
  return (
    <div className="btn-group" id="dropdown-custom-icon">
      <Dropdown>
        <Dropdown.Toggle className="btn btn-secondary dropdown-toggle dropdown-custom-icon" id="dropdownMenuButton-3">
          Hover with custom icon
          <span className="dropdown-icon">
            <i className="fas fa-caret-down"></i>
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu renderOnMount>
          <Dropdown.Item href="#dropdowns-open-variations/action">Action</Dropdown.Item>
          <Dropdown.Item href="#dropdowns-open-variations/action">Another action</Dropdown.Item>
          <Dropdown.Item href="#dropdowns-open-variations/action">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownCustomIcon;
