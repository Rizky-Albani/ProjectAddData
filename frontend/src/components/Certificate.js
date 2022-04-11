import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import './custom.css'


const Certificate = () => {

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
              <div class="box">
                <div class="header-sertifikat">
                  <h1>CERTIFICATE OF COMPLETION</h1>
                  <h4>This Certificate is presented to</h4>
                </div>
                <div class="nama-peserta">
                  <h1><b><i >{ full_name }</i></b></h1>
                </div>
                <div class="footer">
                  <footer>
                    <b>
                      For Completing the assignment in coding camp.
                    </b>
                  </footer>
                </div>

                <div class="row">
                  <div class="column">
                    <h4><b>Shaka Pratama Ichsan</b></h4>
                    <p>College Dean</p>
                  </div>
                  <div class="column">
                    <h4><b>M Rizky Albani</b></h4>
                    <p>President</p>
                  </div>
                </div> 
              </div>
          </container>
        </body>
      </div>
    </div>
  )
}

export default Certificate