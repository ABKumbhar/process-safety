import React,{useState,useEffect} from 'react'
import {Input,Form,Button,Jumbotron, FormGroup,Col} from 'reactstrap'
import CardComponent from './CardComponent'
import axios from 'axios'
import { FiSearch, FiBell ,FiThermometer} from 'react-icons/fi';
import { FaThermometerHalf , FaRegBuilding ,FaRegBell} from 'react-icons/fa';

import { Grid, Container } from 'semantic-ui-react'
import Gate from './Gate'
function HomeComponent() {
    const [query,setQuery]=useState("helo")
    const [item,setItem] = useState([])
    const [queryi,setQueryi]=useState("")
    const [industry,setIndustry] = useState([])
    const [industrysearch,setIndustrysearch] = useState([])
    const [equipment,setEquipment] = useState([])
     const [count, setcount] = useState(0)
    useEffect(() => {
        axios
        .get(`https://abkumbhar.pythonanywhere.com/list?search=${query}`)
        .then((res)=> 
           {console.log(res)
        setItem(res.data)}
            
        )
        .catch((error)=>
        {console.log(error.message)
        
        }
        )

     ;
      }, [query]);

      useEffect(() => {
        axios
        .get(`https://abkumbhar.pythonanywhere.com/industry/trending`)
        .then((res)=> 
           {console.log(res)
        setIndustry(res.data)}
            
        )
        .catch((error)=>
        {console.log(error.message)
        
        }
        )

     ;
      }, []);

      useEffect(() => {
        axios
        .get(`https://abkumbhar.pythonanywhere.com/equipment/trending`)
        .then((res)=> 
           {console.log(res)
        setEquipment(res.data)}
            
        )
        .catch((error)=>
        {console.log(error.message)
        
        }
        )

     ;
      }, []);
 
      useEffect(() => {
        axios
        .get(`https://abkumbhar.pythonanywhere.com/industry`)
        .then((res)=> 
           {console.log(res)
        setIndustrysearch(res.data)}
            
        )
        .catch((error)=>
        {console.log(error.message)
        
        }
        )

     ;
      }, []);

    return (
        <div textAlign={{textAlign:"center"}}>
           <Container>
        <Form inline>
           <FormGroup>
        <Input list="searching" placeholder="search here ..." onChange={e => setQueryi(e.target.value)}/>
        <datalist id="searching">
            {query && industrysearch.map((i)=>{
            return(<option value={i.name}/>)}
            )}
        </datalist>
        <Button color="danger" onClick={e => setQuery(queryi)}>Submit <FiSearch/></Button>
        </FormGroup>
        </Form>
        </Container>
       <div>
           {item.length ?  item.map(i => 
           <li key={i.id}>Searched results ... <CardComponent ind={i}/></li>
           ) : (<div > <Container>Search box is empty or result not found</Container></div>)}
       </div>
       <Gate/>
         <Jumbotron >
             <h1>Trending Today ....  <FiBell/>  </h1>
             <br/>
             <Grid columns={2} divided padded >
                <Grid.Row>
               <Grid.Column >  
             <h4 style={{textAlign:"center"}}> <FaRegBuilding/> Updates on new information on industry safety  </h4>
             <br/>
             {industry.length ? industry.map(i =>
           <li key={i.id}><CardComponent ind={i}/></li>
           ) : (<div style={{textAlign:"center"}}>Nothing to new show today....</div>)}
           </Grid.Column>
             
         <Grid.Column  > 
            <h4 style={{textAlign:"center"}}> <FaThermometerHalf />Updates on new information on equipment safety </h4>
            <br/>
             {equipment.length ? equipment.map(i =>
           <li key={i.id}><CardComponent ind={i}/></li>
           ) : (<div style={{textAlign:"center"}}>Nothing to new show today.....</div>)}
           </Grid.Column>
           </Grid.Row>
           </Grid>
         </Jumbotron>

        </div>
        
    )
}

export default HomeComponent
