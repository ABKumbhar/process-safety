import React,{useState,useEffect} from 'react'
import {Input,Form,Button,Jumbotron, FormGroup} from 'reactstrap'
import CardComponent from './CardComponent'
import axios from 'axios'
import { FiSearch } from 'react-icons/fi';

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
        <div>
        <Form inline>
        <Input list="searching" placeholder="search here ..." onChange={e => setQueryi(e.target.value)}/>
        <datalist id="searching">
            {query && industrysearch.map((i)=>{
            return(<option value={i.name}/>)}
            )}
        </datalist>
        <Button color="danger" onClick={e => setQuery(queryi)}>Submit <FiSearch/></Button>
    
        </Form>
       <div>
           {item.length ?  item.map(i => 
           <li key={i.id}>Searched results ... <CardComponent ind={i}/></li>
           ) : (<div >Search box is empty or result not found</div>)}
       </div>
         <Jumbotron >
             <h1>Trending Today ....</h1>
             <br/>
             <h4>Updates on new information on industry safety</h4>
             {industry.length ? industry.map(i =>
           <li key={i.id}><CardComponent ind={i}/></li>
           ) : (<div style={{textAlign:"center"}}>Nothing to new show today</div>)}
           

         <br/>
            <h4> Updates on new information on equipment safety </h4>

             {equipment.length ? equipment.map(i =>
           <li key={i.id}><CardComponent ind={i}/></li>
           ) : (<div style={{textAlign:"center"}}>Nothing to new show today</div>)}
           
         </Jumbotron>

        </div>
        
    )
}

export default HomeComponent
