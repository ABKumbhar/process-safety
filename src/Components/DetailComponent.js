import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { CardText,Card, CardBody } from 'reactstrap'
import {useParams} from 'react-router-dom'
import MetaTags from 'react-meta-tags';

function DetailComponent(props) {
    let slug = props.match.params.slug
    const [question, setquestion] = useState([])
    const [questione, setquestione] = useState([])
    const [industry,setIndustry] = useState([])

    useEffect(() => {
        axios
        .get(`https://abkumbhar.pythonanywhere.com/industry/${slug}/`)
        .then((res)=> {
            setIndustry(res.data)
        })
        
    }, [slug])
    useEffect(() => {
        axios
        .get(`https://abkumbhar.pythonanywhere.com/industry/${slug}/question/`)
        .then((res)=> {
            setquestion(res.data)
        })
        
    }, [slug])
    useEffect(() => {
        axios
        .get(`https://abkumbhar.pythonanywhere.com/equipment/${slug}/question/`)
        .then((res)=> {
            setquestione(res.data)
        })
        
    }, [slug])


    return (
        <div>
            <MetaTags>
    <title>{industry.name}</title>
            <meta name={industry.name} content={industry.name} />

          </MetaTags>

            <Card>
                <CardBody>
                    <h1>
                        {industry.name}
                     </h1>
                 <h1>Reference URL (click next): <a href={industry.url} target=" "> {industry.adinfo} </a> </h1>
                
                <br/>

                </CardBody>

                <CardText>

                <table className="table table-hover">
                
                
               
                    <tbody>
                    <tr>
                    
                             {
                    question.map((q) => 
                    
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
                    {
                    questione.map((q) => 
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
