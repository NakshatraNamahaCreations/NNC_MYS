// import './App.css';
import React from 'react';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton, Stack } from 'react-bootstrap';

function Home2() {

  return (
    <div className="container mt-5">
      <h1 className="text-3xl font-bold text-center text-blue-600">
  Welcome to My Site
</h1>
<motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1>Hello, I'm fading in!</h1>
  </motion.div>


      <Stack direction="horizontal" gap={4}>
        {/* Light Themed Dropdown */}
        <DropdownButton
          id="dropdown-light"
          variant="outline-primary"
          title="Light Dropdown"
          data-bs-theme="light"
        >
          <Dropdown.Item href="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another Action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something Else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated Link</Dropdown.Item>
        </DropdownButton>

        {/* Dark Themed Dropdown */}
        <DropdownButton
          id="dropdown-dark"
          variant="dark"
          title="Dark Dropdown"
          data-bs-theme="dark"
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another Action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something Else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated Link</Dropdown.Item>
        </DropdownButton>
      </Stack>
    </div>
  );
}



export default Home2;