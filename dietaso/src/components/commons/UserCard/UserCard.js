import { IdcardOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

import './User-card.scss';
import profile from './profile.jpg';

const UserCard = ({ user }) => {
    return (
        <div className='user-card' key={user.id}>
            <div className='profile-img-name'>
                <div className='profile-img'>
                    <img src={user.foto ?? profile} alt='Profile' />
                </div>
                <div className='person-name'>
                    <h2>
                        <b>{`${user.nombre ?? ''} ${
                            user.apellidoPaterno ?? ''
                        } ${user.apellidoMaterno ?? ''}`}</b>
                    </h2>
                </div>
            </div>
            <div className='contact-info'>
                <div className='email'>
                    <p className='info-text'>
                        <IdcardOutlined size={36} />
                        {`  ${user.email ?? ''}`}
                    </p>
                    <p>{`${user.celular ?? ''}`}</p>
                </div>
                <div className='phone'>
                    <p className='info-text'>
                        {dayjs(user.fechaDeNacimiento).format('YYYY-MM-DD')}
                    </p>
                </div>
                <div className='city'>
                    <p className='info-text'>
                        <span className='city-icon'> </span>
                        {`${user.ciudadDeResidencia ?? ''}, ${
                            user.paisDeNacimiento ?? ''
                        }`}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
