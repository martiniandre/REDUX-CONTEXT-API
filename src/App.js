import { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { authContext } from './context/signIn'
function App() {
  const [ user,setUser ] = useState({
    email:"",
    password:""
  })
  const { signIn,signed,logout } = useContext(authContext)
  console.log(signed);
  function handleChange(e) {
    const { value,name } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  function handleSubmit(){
    signIn(user)
  }

  return (
    <div className="App" style={{ width: "600px", margin: "50px auto" }}>
      {!signed 
      ?  <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email"
        placeholder="Enter email"
        name="email"
        value={user.email}
        onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
        placeholder="Password"
        name="password"
        value={user.password}
        onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Registrar
      </Button>
    </Form> : <Button variant="danger" type="submit" onClick={() => logout()}>
        Logout
      </Button>
    }
    
    </div>
  );
}

export default App;
