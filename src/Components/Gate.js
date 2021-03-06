import React, {useState,useEffect} from 'react'
import {List,Header,Icon} from 'semantic-ui-react'
import {Card, CardHeader,CardFooter,CardBody,CardGroup,CardText, Button, Container,Spinner} from 'reactstrap'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { FaEdit , FaArrowCircleRight } from 'react-icons/fa';

function Gate() {
    const [gatetrend, setgatetrend] = useState([])
    const [gate, setgate] = useState([])
    const [loading,setloading] = useState(true)
    useEffect(() => {
        axios
        .get("https://abkumbhar.pythonanywhere.com/gate/trending/"

        )
        .then((res) => {
            setgatetrend(res.data)
        })
       
        
    }, [gatetrend])
    useEffect(() => {
        axios
        .get("https://abkumbhar.pythonanywhere.com/gate/"

        )
        .then((res) => {
            setgate(res.data)
            setloading(false)

        })
       
        
       
    }, [gate])
    return (
        <div> 
            <br/>
            <br/>
            <br/>
            <Header as='h3' >
    
    <Header.Subheader>
    <FaEdit/> GATE - 2021 IMPORTANT NEWS     </Header.Subheader>
  </Header>
<br/>
            {/* {gate.map ((i) => 
            (<>
            <Card href={"/gate" + i.slug }>

                <Card.Content>
            <Card.Header>{i.name}</Card.Header>
            <Card.Description>{i.Carddetail}</Card.Description>
                </Card.Content>
            </Card>
            </>

            )
            )} */}
            <List animated verticalAlign='middle'>
            {loading ? <Spinner/> : gatetrend.map ((i) => 
            (<>
            {/* <Card >
             <CardBody>
            <CardHeader>{i.name}</CardHeader>
            <CardText>{i.Carddetail}</CardText>
                </CardBody>
                <CardFooter>
                    <Button><Link to = {"/gate/" + i.slug }>
                     Click for more information</Link>
                    </Button>
                </CardFooter>
            </Card> */}
            <List.Item>
            <List.Header> {i.name} <Link to= {"/gate/" + i.slug }> <Button>{i.carddetail} <FaArrowCircleRight/></Button> </Link>
        </List.Header>

            </List.Item>
            <br/>
            </>

            ))
             }
            </List>
            <br/>
        </div>
    )
            }
export default Gate;
