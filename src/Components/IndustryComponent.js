import React, {Fragment, useEffect, useState} from 'react';
import {fetchIndustry} from '../redux'
import 'bootstrap/dist/css/bootstrap.css';
import {connect,useDispatch,useSelector} from 'react-redux';
import { Form,Row, Col, Button, Card, CardBody, CardText, CardTitle, Spinner } from 'reactstrap';
import CardComponent from './CardComponent'

function IndustryComponent({IndustryData,fetchIndustry}) {
  //const [isOpen, setisOpen] = useState(false) 
  const [search, setSearch] = useState("");
  const [filteredIndustries, setFilteredIndustries] = useState([]);

  useEffect(() => {
    fetchIndustry()
  },[])
 

  useEffect(() => {
    setFilteredIndustries(
      IndustryData.industry.filter(ind =>
        ind.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, IndustryData]);

    return IndustryData.loading ? (
 <div>
 <Spinner>
 </Spinner>
</div>
      ) : IndustryData.error ? (
      <h2>{IndustryData.error}</h2>
    ) : (
      <div>
        <h2 style = {{textAlign:"center"}}>Industry List</h2>
        <div >
        <div style={{textAlign:"center"}}>
        <input 
        type="text"
        placeholder="Search Industries"
        onChange={e => setSearch(e.target.value)}/>
        </div>
          {     
      

            filteredIndustries.map(ind => 
          //  <Row>
          //   <Col xl="4" lg="6">
          //   </Col>
          //   <Col xl="4" lg="6">
          //   <Card className="mb-5" e-card-horizontal	>
          //   <CardBody>
          //     <CardTitle className="card-title font-weight-bold font-size-lg">{ind.name}</CardTitle>
          //     <CardText>
          //       {ind.adinfo}
          //     </CardText>
          //     </CardBody>
          //     <Button onClick= {handleClick}>
          //       More ...
          //     </Button>
              
          //     <CardText>
          //       <div>
          //   {
          //     isOpen ? (
          //       <div>
          //       {
          //       ind.questioni.map((q) => 
          //       <div>
          //       <b>{q.question}</b>
          //       <br/>
          //       {q.answer}
          //       </div>
          //       )} </div>
          //       ) : (<div></div> )
                
          //   }</div>
          //      </CardText>
              
              
              
          //   </Card >
          //   </Col>
          //   <Col xl="4" lg="6">
          //   </Col>
          //   </Row>
          <li key={ind.id}>
          <CardComponent ind = {ind}/>
          </li>
            )}
        </div>
      </div>
    )
        
}

const mapStateToProps = state => {
    return {
      IndustryData: state.industries
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchIndustry: () => dispatch(fetchIndustry())
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(IndustryComponent)