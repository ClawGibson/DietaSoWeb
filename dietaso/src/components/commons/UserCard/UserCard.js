import './User-card.scss';

const standardAvatar = 'https://res.cloudinary.com/dwjv6orjf/image/upload/v1618875313/standard_avatar_txfgx5.png';

const UserCard = ({ user }) => {
    const isPhotoExist = user?.foto && user.foto !== '';

    return (
        <div className='user-card' key={user.id}>
            <div className='profile-img-name'>
                <div className='profile-img'>
                    <img src={isPhotoExist ? user.foto : standardAvatar} alt='userProfile' />
                </div>
                <div className='person-name'>
                    <h2>
                        <b>{user.nombre}</b>
                    </h2>
                </div>
            </div>
            <div className='contact-info'>
                <div className='email'>
                    <p className='info-text'>
                        <span className='email-icon'> </span>
                        {user.email}
                    </p>
                </div>
                <div className='phone'>
                    <p className='info-text'>
                        <span className='phone-icon'> </span>
                        {user.fechaDeNacimiento}
                    </p>
                </div>
                <div className='city'>
                    <p className='info-text'>
                        <span className='city-icon'> </span>
                        {user.meta}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
