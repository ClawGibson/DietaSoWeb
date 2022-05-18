import dayjs from 'dayjs';
import './User-card.scss';
import {
    PhoneOutlined,
    ManOutlined,
    WomanOutlined,
    ContactsOutlined,
    PushpinOutlined,
    GlobalOutlined,
} from '@ant-design/icons';

const standardAvatar = 'https://res.cloudinary.com/dwjv6orjf/image/upload/v1618875313/standard_avatar_txfgx5.png';

const UserCard = ({ user }) => {
    const isPhotoExist = user?.foto && user.foto !== '';

    return (
        <div className='user-card' key={user.id}>
            <div className='profile-img-name'>
                <div className='fondo-img' />
                <div className='hoyito'></div>

                <div className='profile-img'>
                    <img src={isPhotoExist ? user.foto : standardAvatar} alt='userProfile' />
                </div>
                <div className='person-name'>
                    <h2>
                        <b>{user.nombre + ' ' + user.apellidoPaterno + ' ' + user.apellidoMaterno}</b>
                    </h2>
                </div>
                <div className='contact-info'>
                    <div className='celular'>
                        <p className='info-text'>
                            <PhoneOutlined />
                            {' ' + user.celular}
                        </p>
                    </div>
                    <div className='cumple'>
                        <p className='info-text'>
                            <ContactsOutlined />
                            {' ' + dayjs(user?.fechaNacimiento).format('DD/MM/YYYY')}
                        </p>
                    </div>
                    <div className='city'>
                        <p className='info-text'>
                            <PushpinOutlined />
                            {' ' + user.ciudadDeResidencia}
                        </p>
                    </div>
                    <div className='genero'>
                        <p className='info-text'>
                            {user.genero == 'hombre' || user.genero == 'Hombre' ? <ManOutlined /> : <WomanOutlined />}
                            {' ' + user.genero}
                        </p>
                    </div>
                    <div className='pais'>
                        <p className='info-text'>
                            <GlobalOutlined />
                            {' ' + user.paisDeNacimiento}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
