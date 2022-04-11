import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Card, Button  } from 'react-bootstrap';

const EditData = () => {

  const [full_name, setFullName] = useState("");
  const [business_name, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const updateParticipant = async (e) => {
      e.preventDefault();
      await axios.patch(`http://localhost:5000/${id}`,{
          full_name: full_name,
          business_name: business_name,
          email: email,
          phone: phone
      });
      navigate("/");
  }

  useEffect(() => {
      getParticipantById();
  }, []);

  const getParticipantById = async () => {
      const response = await axios.get(`http://localhost:5000/${id}`);
      setFullName(response.data.full_name);
      setBusinessName(response.data.business_name);
      setEmail(response.data.email);
      setPhone(response.data.phone);
  }

  return (
    <Card className='mb-3'>
        <Card.Header className="d-grid">
        <Button variant="secondary" size="lg" disabled>
          Edit Data
        </Button>
      </Card.Header>
        <Card.Body>
            <Form onSubmit={ updateParticipant }>
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

                <Form.Group className='field d-grid gap-2' >
                    <label className='label'>Business Name</label>
                    <input 
                        clas='input' 
                        type="tesct" 
                        placeholder="Business Name"
                        value={ business_name }
                        onChange={ (e) => setBusinessName(e.target.value)} 
                        />
                </Form.Group>

                <Form.Group className='field d-grid gap-2' >
                    <label className='label'>Email</label>
                    <input 
                        clas='input' 
                        type="tesct" 
                        placeholder="Email"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value)} 
                        />
                </Form.Group>

                <Form.Group className='field d-grid gap-2' >
                    <label className='label'>Phone</label>
                    <input 
                        clas='input' 
                        type="tesct" 
                        placeholder="Phone"
                        value={ phone }
                        onChange={ (e) => setPhone(e.target.value)}
                        />
                </Form.Group>

                <div className="field d-grid gap-2">
                    <button className='button is-primary'>Update</button>
                </div>
            </Form>
        </Card.Body>
    </Card>
  )
}

export default EditData