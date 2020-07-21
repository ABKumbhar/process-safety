import React,{useEffect,useState} from 'react'
import axios from 'axios';

function GateCard(props) {     
    let slug = props.match.params.slug;
    
    const [gate, setgate] = useState([]);
    useEffect(() => {
        axios.get(`https://abkumbhar.pythonanywhere.com/gate/${slug}`)
        .then((res)=> {
            setgate(res.data)
        })
    }, [gate])
    return (
        <div dangerouslySetInnerHTML={{__html: gate.adinfo}}/>
        
        
    )
}

export default GateCard
