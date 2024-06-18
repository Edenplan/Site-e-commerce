import React from 'react'
import './Inscription.css'
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export const Inscription = () => {
  const navigate = useNavigate(); // Utiliser useHistory

  const handleCreateAccountClick = () => {
    navigate('/connexion'); // Rediriger vers la page d'inscription
  };
  return (
    <div className='Inscription'>
       <br /><br /><br /><br />
     <div className='titre'>
        Inscription</div>
        <br /><br /><br /><br /><br />
        <div className='complete' >
        <div className='Prénom'>
 <TextField helperText=""
  id="demo-helper-text-misaligned"
  label="Prénom"
  fullWidth
  />
  <br /><br /><br /><br />
</div>
<div className='Nom'>
 <TextField helperText=""
  id="demo-helper-text-misaligned"
  label="Nom"
  fullWidth
  />
  <br /><br /><br /><br />
</div>
        <div className='email'>
 <TextField helperText=""
  id="demo-helper-text-misaligned"
  label="Adresse e-mail"
  fullWidth
  />
  <br /><br /><br /><br />
</div>
<div className='motdepasse'>
 <TextField helperText=""
  id="demo-helper-text-misaligned"
  label="Mot de Passe"
  fullWidth
  />
</div>
<br />
<div className='confirmationmotdepasse'>
 <TextField helperText=""
  id="demo-helper-text-misaligned"
  label="Confirmation Mot de Passe"
  fullWidth
  />
</div>
</div>
<br /><br />
<br />
<div className='buttoncc'>
<Button 

variant="contained"
style={{ backgroundColor: 'white', color: 'black', fontSize: '18px' }}

>CRÉER UN COMPTE</Button>
</div>
<br /><br />
<p style={{ textAlign: 'center' }}>Vous avez déjà un compte ?</p>
<div className='buttonsc'>
<Button 

variant="contained"
style={{ backgroundColor: 'black', color: 'white', fontSize: '18px' }}
onClick={handleCreateAccountClick}
>SE CONNECTER</Button>
</div>
<br />
<br /><br /><br />




       

    </div>
  )
}

export default Inscription
