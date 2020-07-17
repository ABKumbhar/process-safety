import React,{useState,useEffect} from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle, Form, Input, Button } from 'reactstrap'
import NavbarComponent from './NavbarComponent'
import axios from 'axios'
import { Jumbotron,Media } from 'reactstrap'
import {Image} from 'react-bootstrap'
import industry from './industry.jpeg'
function HeaderComponent() {
    return (
    <div className="Header" style={{textAlign:"center"}} >

        <Jumbotron style={{backgroundColor: "Orange"}}>

            <h1 style={{fontFamily:"Impact"}}> Process safety App</h1>
            <Image src={industry} roundedCircle fluid style={{textAlign:"center"}}/>

                <br />
                <div className="form">
                </div>
            <br />
            <span className="fa fa-home fa-lg" style={{color:"white"}}> <h2 style={{fontFamily : "Comic Sans MS"}}> Information about startup, shutdown and maintenance availaible at the touch of your screen for free! </h2></span>

        <NavbarComponent/>

        </Jumbotron>
        


    </div>);
}

export default HeaderComponent