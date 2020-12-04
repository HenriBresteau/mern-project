import React, { useContext } from 'react';
import Log from '../components/Log';
import {UidContext} from '../components/AppContext';
import UpdateProfil from '../components/Profil/UpdateProfil';

const Profil = () => {
    const uid = useContext(UidContext);

    return (
        <div className='profil-page'>
            {uid ? (
                <UpdateProfil></UpdateProfil>
            ): (
            <div className="log-container">
                <Log signin={false} signup={true}></Log>
                <div className="img-container">
                    <img src="./img/log.svg" alt="logo"/>
                </div>
            </div>
            )}
        </div>
    );
};

export default Profil;