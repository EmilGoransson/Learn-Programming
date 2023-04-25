import React, { useState } from 'react';
import './LoginPage.css';
import logo from './gamlaloggan.png';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //Här under ska path till servern anges. Vet inte vad det borde vara. 
      //Men när någon klickar på login knappen aktiveras detta och email och password skickas till servern
      //På den angivna rutten nedan vilken kan vara fel...
      //Den skickar också infon i typ en json fil string på något sätt?
      //Det skickas också med en cookie så session cookies e typ ok
      //Prövar att lägga in "http://localhost:3003/test" innan så stog det 'http://Learn-programming/Backend/server.js/api/login'
      const response = await fetch('http://Learn-programming/Backend/server.js/api/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      //Om serverna skickar ett 200 OK betyder det att login fanns. Just nu skrivs bara login succesfull ut nånstans
      //Men det är under denna if sats vi kommer vilja redirecta på något sätt till overviewn. Och hålla användaren "inloggad"
      //har lagt alert nu på alla cases så man ser snabbt om det "Går" eller inte. Men det ska nog tas bort sen när
      //rätt saker händer när if, else, eller catch sker
      if (response.ok) {
        // Handle successful authentication
        // The server should set a session cookie on a successful login
        // You can check if the user is logged in by checking if this cookie is present
        alert('Log in successful');
      } else {
        // Handle login error
        //Här hamnar man om man inte får ett 200 ok meddelande, just nu skriver den bara ut login failed men vi vill nog
        //redirecta igen till loginsidan och typ skriva något i stil med "incorrect username or password, please try again"
        alert('Log in failed');
      }
    } catch (error) {
      // Handle network error
      //Här hamnar man bara om man får nätverksfel typ. Det behöver vi nog inte ändra på. FInns inte så mycket vi behöver göra då. 
      alert('Network error:', error);
    } 
  }; 
//Här under på Don't have an account har jag gjort någon fusklänk till signuppage, den leder dock typ bara til
//login igen. Så det är lite knas. Finns dock ingen signup page än. Men när signup page finns så borde vi
//redirecta here länken så den leder till signup och inte till login igen. Vet dock inte själv hur det kan fixas
// border: '1px solid gray'
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
        <img src={logo} alt="Logo"  className='hej' />
      </div>  
      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10rem', backgroundColor: '#f0f0f0' }}>
        <h2 style={{ alignSelf: 'flex-start' , fontFamily: 'Lora', fontWeight: 'bold', fontSize: '50px'}}>Log in</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '1rem' }}>
          <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ marginBottom: '0.5rem', fontFamily: 'Lora'}}>E-mail:</span>  
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={{ width: '100%' }}
              className='ruta' 
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ marginBottom: '0.5rem', fontFamily: 'Lora' }}>Password:</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              style={{ width: '100%'}}
              className='ruta' 
            />
          </label>
          <button
            type="submit" 
            className='loginbutton' 
            > 
            Log in
          </button> 
          <p style={{ marginTop: '1rem', alignSelf: 'center', fontFamily: 'Lora' }}>Don’t have an account? Click <a href="/Signup" style={{ color: '#0077FF', textDecoration: 'underline' }}>here</a> to get one.</p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
