import axios from 'axios';
import {useEffect,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DisplayCards(){
     
let [stateMaintance,tochange]=useState([]);

useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/users').then(function(response){
      // console.log(response.data)
      tochange(response.data)
      console.log(stateMaintance)
  })
},[])


return(<>

  {stateMaintance.map((data)=>{
    return(<>
    <Card style={{ width: '18rem', border:'1px solid black',display:'inline-block' }}>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{data.website}</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">{data.phone}</Card.Link>
        <Card.Link href="#">{data.email}</Card.Link>
      </Card.Body>
    </Card>
    </>)
   
  })}


</>)








   

}
export default DisplayCards;