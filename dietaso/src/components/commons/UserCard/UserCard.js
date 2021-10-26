// Image import
import profile from "./profile.jpg";

// Scss file
import "./User-card.scss";

const UserCard = ({ user }) => {
  return (
    <div className="user-card" key={user.id}>
      <div className="profile-img-name">
        <div className="profile-img">
          <img src={profile} alt="Profile" />
        </div>
        <div className="person-name">
          <h2>
            <b>{user.nombre}</b>
          </h2>
        </div>
      </div>
      <div className="contact-info">
        <div className="email">
          <p className="info-text">
            <span className="email-icon"> </span>
            {user.email}
          </p>
        </div>
        <div className="phone">
          <p className="info-text">
            <span className="phone-icon"> </span>619-289-7797
          </p>
        </div>
        <div className="city">
          <p className="info-text">
            <span className="city-icon"> </span>Zapotlán El Grande, México
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
