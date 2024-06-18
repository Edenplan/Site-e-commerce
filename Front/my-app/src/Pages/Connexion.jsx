import React from 'react'
import './Connexion.css'
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Connexion = () => {
    const navigate = useNavigate(); // Utiliser useHistory

  const handleCreateAccountClick = () => {
    navigate('/inscription'); // Rediriger vers la page d'inscription
  };
  return (
    <div className='Connexion'>
       <br /><br /><br /><br />
     <div className='titre'>
        Se connecter</div>
        <br /><br /><br /><br /><br /><br />
        <div className='complete' >
        <div className='email'>
 <TextField helperText="Please enter your e-mail"
  id="demo-helper-text-misaligned"
  label="Adresse e-mail"
  fullWidth
  />
  <br /><br /><br /><br />
</div>
<div className='motdepasse'>
 <TextField helperText="Please enter your password"
  id="demo-helper-text-misaligned"
  label="Mot de Passe"
  fullWidth
  />
</div>
</div>
<br /><br />

<div className='buttonsc'>
<Button 

variant="contained"
style={{ backgroundColor: 'black', color: 'white', fontSize: '18px' }}
>SE CONNECTER</Button>
</div>
<br />

<div className='MDP'>
<p href="#">Mot de passe oublié ?</p>

</div>
<br />
<div className='buttoncc'>
<Button 

variant="contained"
style={{ backgroundColor: 'white', color: 'black', fontSize: '18px' }}
onClick={handleCreateAccountClick}
>CRÉER UN COMPTE</Button>
</div>


       

    </div>
  )
}
 export default Connexion