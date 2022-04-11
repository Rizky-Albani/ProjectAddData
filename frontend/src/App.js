import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ParticipantList from "./components/ParticipantList";
import AddParticipant from "./components/AddParticipant";
import EditData from "./components/EditData";
import Certificate from "./components/Certificate";
import NameTag from "./components/NameTag";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div>
      <header className="App-body">
        <Router>
          <Container>
            <Row>          
                <Routes>
                  <Route exact path="/" element={ <ParticipantList /> }/>
                  <Route path="/add" element={ <AddParticipant /> }/>
                  <Route path="/edit/:id" element={ <EditData /> }/>
                  <Route path="/certificate/:id" element={ <Certificate /> }/>
                  <Route path="/tag/:id" element={ <NameTag /> }/>
                </Routes>
            </Row>
          </Container>
        </Router>
      </header>
    </div>
  );
}

export default App;
