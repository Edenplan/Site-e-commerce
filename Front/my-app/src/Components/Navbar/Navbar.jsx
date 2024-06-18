import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'

//import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

import TextField from "@mui/material/TextField";
import Favoris from '../Assets/ajouter-aux-favoris.png'
import Panier from '../Assets/panier.png'




export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
   const dropdownRef = useRef(null);

   const toggleDropdown = () => {
     setShowDropdown(!showDropdown);
   };

   // Fonction pour fermer le dépliant lorsque l'utilisateur clique en dehors de celui-ci
   const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
         setShowDropdown(false);
      }
   };

   useEffect(() => {
      // Ajoute un écouteur d'événement de clic lors du montage du composant
      document.addEventListener("mousedown", handleClickOutside);
      // Nettoie l'écouteur d'événement lors du démontage du composant
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <a>OH OH !</a>

        </div>
        <div className='nav-menu'>
        
            <div className='home'> 
            <Link to='/Home'>Home </Link> 
            </div>
            <div className="search">
            <TextField id="outlined-basic" label="search" variant="outlined" />
      </div>
            <div className='produits' onMouseEnter={toggleDropdown}> 
          <a>Nos Produits</a>
          {showDropdown && (
            <div className="dropdown-content"ref={dropdownRef}>
             <div className="category">
                    <p href="#">Stylos et crayons</p>
                    <div className="sub-categories">
                      <p href="#">Packs de stylos et crayons</p>
                      <p href="#">Stylos encre gel</p>
                      <p href="#">Stylos à bille </p>
                      <p href="#">Crayons et portemines</p>
                      <p href="#">Feutres, surligneurs et outils correcteurs</p>
                      <p href="#">Trousses et pots à crayons</p>
                      
                      
                    </div>
                  </div>
                  <div className="category">
                    <p href="#">Cahiers et papier</p>
                    <div className="sub-categories">
                      <p href="#">Cahiers à lignes</p>
                      <p href="#">Carnets pointillés et graphiques</p>
                      <p href="#">Cahiers ordinaires</p>
                      <p href="#">Feuilles volantes</p>
                      
                    </div>
                  </div>

                  <div className="category">
                    <p href="#">Organisation</p>
                    <div className="sub-categories">
                      <p href="#">Agendas et calendriers</p>
                      <p href="#">Classeurs</p>
                      <p href="#">Porte-documents et dossiers</p>
                      <p href="#">Porte-cartes et albums</p>
                      <p href="#">Fournitures de bureau</p>
                      <p href="#">Boîtes et rangement de bureau</p>
                      
                    </div>
                  </div>

                  <div className="category">
                    <p href="#">Cadeaux et emballages</p>
                    <div className="sub-categories">
                      <p href="#">Emballages cadeaux</p>
                      <p href="#">Jouets</p>
                      
                    </div>
                  </div>
                  
                </div>
              )}
            </div>
            <div className='histoire'> 
            <Link to='/notre-histoire'>Notre histoire</Link>
            </div>
            <div className='trouver'> 
            <Link to='/nous-trouver'>Nous trouver</Link>
            </div>
            <div className='connexion'> 
            <Link to='/connexion'>connexion</Link>
            </div>
            <div className='favorite'>
              <img src={Favoris} alt="" style={{ width: '20px', height: '20px' }} />
            </div>
            <div className='panier'>
              <img src={Panier} alt="" style={{ width: '20px', height: '20px' }} />
            </div>
            
            

      
      

        </div>

    </div>
  )
}

export default Navbar
