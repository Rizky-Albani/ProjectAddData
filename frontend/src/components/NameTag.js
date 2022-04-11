import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import './tag.css'


const NameTag = () => {

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
  
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint trigger={() => <button className='button is-primary'>Print</button>}
      content={() => componentRef.current} />
      <div ref={componentRef}>
        <body>
            <container>
                <div class="box1">
                    <div class="box2">
                        <h6>3x4</h6>
                    </div>
                    <div class="nama">
                        <h2><b>{ full_name }</b></h2>
                    </div>
                </div>
            </container>
        </body>
      </div>
    </div>
  )
}

export default NameTag