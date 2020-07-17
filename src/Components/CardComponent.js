import React from 'react'
import {useState} from 'react'
import { Row, Col, Button, Card, CardBody, CardText, CardTitle, Spinner, CardFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

function CardComponent(props) {
    const [isOpen, setisOpen] = useState(false) 
    const handleClick = () => {
        setisOpen(!isOpen)

        }
      
    return (
        <div>

            <Row>
            <Col xl="4" lg="6">
            </Col>
            <Col xl="4" lg="6">

            <Card className="mb-5" outline color="info">
            <CardBody>
              <CardTitle className="card-title font-weight-bold font-size-lg">Industry/Equipment Name : {props.ind.name}</CardTitle>
              <CardText>
                <br/>
               
               Data taken from (i.e. reference) :  {props.ind.url ? <a href={props.ind.url} target=" ">  <b> {props.ind.adinfo} (Click to visit reference) </b> </a> : <div></div>}
              </CardText>
              </CardBody>
               <CardFooter>
              For more information, click on following link to know more information
              <Button color="success" onClick= {handleClick}>
                
              <Link to ={{pathname:'/industry-question/' + props.ind.slug,indi : props.ind }}>
               <div style={{color:"white"}}>Click to know more ...</div></Link>
              </Button>
              </CardFooter>

              
              
              
              

              
              
              
            </Card >
            </Col>
            <Col xl="4" lg="6">
            </Col>
            </Row>
        </div>
    )
}

export default CardComponent
