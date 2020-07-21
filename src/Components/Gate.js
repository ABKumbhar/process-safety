import React, {useState,useEffect} from 'react'
import {List} from 'semantic-ui-react'
import {Card, CardHeader,CardFooter,CardBody,CardGroup,CardText, Button, Container} from 'reactstrap'
import axios from 'axios';
import {Link} from 'react-router-dom'
function Gate() {
    const [gatetrend, setgatetrend] = useState([])
    const [gate, setgate] = useState([])
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
        })
       
        
       
    }, [gate])
    return (
        <div> 
            <br/>
            <br/>
            <br/>
            <Container>
           <h3> GATE - 2020 IMPORTANT NEWS </h3>

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
            {gatetrend.map ((i) => 
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
            <List.Header> {i.name} <Link to= {"/gate/" + i.slug }> <Button>{i.carddetail}</Button> </Link>
        </List.Header>

            </List.Item>
            </>

            )
            )}
            </List>
            </Container>
        </div>
    )
            }
export default Gate;
