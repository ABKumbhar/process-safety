import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { CardText,Card, CardBody } from 'reactstrap'
import {useParams} from 'react-router-dom'
function DetailComponent(props) {
    let slug = useParams()
    const [question, setquestion] = useState([])
    useEffect(() => {
        axios
        .get(`https://abkumbhar.pythonanywhere.com/industry/${slug}/question/`)
        .then((res)=> {
            setquestion(res.data)
        })
        
    }, [])

    return (
        <div>
            
            <Card>
                <CardBody>
                    <h3>
                {props.location.indi ? <div>props.location.indi             <br/>    <h4>Reference URL (click next): <a href={props.location.indi.url} target=" "> {props.location.indi.adinfo} </a></h4> </div>: <div>Industry questions</div> }
                </h3>
                <br/>

                </CardBody>

                <CardText>

                <table className="table table-hover">
                
                
               
                    <tbody>
                    <tr>
                    
                             {
                    props.location.indi.questioni.map((q) => 
                    
                    <div>
                    <li key={q.id}>
                    <td>
                    <b>Question {q.number} : {q.question}</b>
                    <br/>
                    Ans : {q.answer}
                    <br/>
                    Further info / Ref : {q.urlref}
                    </td>
                    </li>
                    </div>
                    )} 
                    {props.location.indi.questione &&
                    props.location.indi.questione.map((q) => 
                    <div>
                      <li key={q.id}>
                      <tr>
                        <td>
                    <b>Question {q.number} : {q.question}</b>
                    <br/>
                    Ans : {q.answer}
                    <br/>
                    Further info / Ref : {q.urlref}
                    </td>
                    </tr>
                    </li>
                    </div>
                    )}
                    </tr>
                    </tbody>
                    
                
                </table>
                  
                </CardText>
            </Card>
        </div>
    )
}

export default DetailComponent
