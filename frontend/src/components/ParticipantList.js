import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Table, Button, Card  } from 'react-bootstrap';

const ParticipantList = () => {
  const [participants, setParticipant] = useState([]);

  useEffect(() => {
    getParticipants();
  }, []);

  const getParticipants = async () => {
    const response = await axios.get('http://localhost:5000');
    setParticipant(response.data);
  }

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:5000/${id}`);
    getParticipants();
  }

  return (
    <Card className='mb-3' responsive>
      <Card.Header className="d-grid">
        <Button variant="secondary" size="lg" disabled>
          Data Participant
        </Button>
      </Card.Header>
      <Card.Body>
        <Table responsive striped bordered hover size="sm">
            <thead>
              <tr>
                <th>No</th>
                <th>Full Name</th>
                <th>Business Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              { participants.map((participant, index) => (
                <tr>
                  <td>{ index + 1 }</td>
                  <td>{ participant.full_name }</td>
                  <td>{ participant.business_name }</td>
                  <td>{ participant.email }</td>
                  <td>{ participant.phone }</td>
                  <td>
                    <Link to={`/edit/${participant.id}`} className="button is-smaill is-info">Edit</Link>
                    <button onClick={ () => deleteData(participant.id)} className="button is-smaill is-danger">Delete</button>
                    <Link to={`/certificate/${participant.id}`} className="button is-primary">Cerificate</Link>
                    <Link to={`/tag/${participant.id}`} className="button is-warning">Tag</Link>
                  </td>
                </tr>
              ))}
            </tbody>
        </Table>
        
        <Link to="/add" >
          <div className="d-grid gap-2"> 
            <Button variant="primary" size="lg">
               Add New Participant
            </Button>
          </div>  
        </Link>
      </Card.Body>
    </Card>
  )
}

export default ParticipantList
