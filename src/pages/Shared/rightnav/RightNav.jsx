import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGofore, FaGithub,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import Qzone from "../Q-zone/Qzone";
import back from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <div className="my-3">
        <h4>Login With</h4>
        <Button className="w-100 my-2" variant="outline-primary">
          <FaGofore className="mx-3 fs-5" />
          Login With Google
        </Button>
        <Button className="w-100 my-2" variant="outline-secondary">
          <FaGithub className="mx-3 fs-5" />
          Login With Github
        </Button>
      </div>
      <div className="my-3">
        <h4>Find Us On</h4>
        <ListGroup className="w-100">
          <ListGroup.Item><FaFacebook className="mx-3 fs-5"/>Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter className="mx-3 fs-5"/>Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram className="mx-3 fs-5"/>Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone className="my-3"></Qzone>
      <div className="my-3 position-relative z-0">
        <img className="w-100 " src={back} alt="" />
        <div className="position-absolute top-0 z-1 text-light text-center">
            <h2 className="fs-1 my-5">Create an Amazing Newspaper</h2>
            <p className="fs-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
