// Image import
import profile from "./profile.jpg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// Scss file
import "./User-card.scss";


//import Test from '..../pages/reminders';

//onClick para moverte a la pagina de edicion con la info de la persona
/*
function PersonalInfo(user){
  
  console.log(user.email);
  
  const history = useHistory();

  history.push({
    pathname: '/alimentos',
    //search: '?query=abc',
    //state: { detail: user }
  })
  
  //console.log(user.email);
  
}*/

const UserCard = ({ user }) => {

  //const history = useHistory(); 

  return (
    <div className="user-card" key={user.id} /* onClick = {()=>PersonalInfo(user)} */ /*onClick={() => history.push("/alimentos")}*/ >
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
            <span className="phone-icon"> </span>
            {user.fechaDeNacimiento}
          </p>
        </div>
        <div className="city">
          <p className="info-text">
            <span className="city-icon"> </span>
            {user.meta}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
