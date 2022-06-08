import React from 'react';
import archishmanDp from '../assets/archishman-profile.jpg';
import '../styles.css';

export default function Info(){
    return (
        <div>
            <img src={archishmanDp} className='my-image'></img>
            <h1 className='name-info'>Archishman Ghosh</h1>
            <h4 className='about-info'>Programmer</h4>
            <div className='linkedin-link-container'>
                <a href='https://www.linkedin.com/in/archishman-ghosh-b83330198/' className='linkedin-link'>linkedin/Archishman</a>
            </div>
            <div style={{textAlign:"center"}}>
                <a type="button" className="btn btn-sm btn-light email-button" href='mailto: archishman24x5@gmail.com'><i class="fas fa-envelope button-icon"></i>E-mail</a>
                <a type="button" className="btn btn-sm btn-primary linkedin-button" href='https://www.linkedin.com/in/archishman-ghosh-b83330198/'>
                    <i class="fab fa-linkedin button-icon"></i>Linkedin
                </a>
            </div>
        </div>
    )
}