import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form, Card, Button  } from 'react-bootstrap';

const AddParticipant = () => {

  const [full_name, setFullName] = useState("");
  const [business_name, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const saveParticipant = async (e) => {
      e.preventDefault();
      await axios.post('http://localhost:5000',{
          full_name: full_name,
          business_name: business_name,
          email: email,
          phone: phone
      });
      navigate("/");
  }

  return (
    <Card className='mb-3'>
      <Card.Header className="d-grid">
        <Button variant="secondary" size="lg" disabled>
          Add New Data Participant
        </Button>
      </Card.Header>
        <Card.Body>
            <Form onSubmit={ saveParticipant }>
                <Form.Group className='field d-grid gap-2' >
                    <label className='label'>Full Name</label>
                    <input 
                        clas='input' 
                        type="tesct" 
                        placeholder="Full Name" 
                        value={ full_name }
                        onChange={ (e) => setFullName(e.target.value)}
                        />
                </Form.Group>

                <div className='field d-grid gap-2'>
                    <label className='label'>Business Name</label>
                    <input 
                        clas='input' 
                        type="tesct" 
                        placeholder="Business Name"
                        value={ business_name }
                        onChange={ (e) => setBusinessName(e.target.value)} 
                        />
                </div>

                <div className="field d-grid gap-2">
                    <label className='label'>Email</label>
                    <input 
                        clas='input' 
                        type="tesct" 
                        placeholder="Email"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value)} 
                        />
                </div>

                <div className="field d-grid gap-2">
                    <label className='label'>Phone</label>
                    <input 
                        clas='input' 
                        type="tesct" 
                        placeholder="Phone"
                        value={ phone }
                        onChange={ (e) => setPhone(e.target.value)}
                        />
                </div>

                <div className="field d-grid gap-2">
                    <button className='button is-primary'>Submit</button>
                </div>
            </Form>
        </Card.Body>
    </Card>
  )
}

export default AddParticipant
