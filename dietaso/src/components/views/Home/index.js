/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from "react";
import UserCard from "../../commons/UserCard/UserCard";
import apiURL from "../../../axios/axiosConfig";

// Antd imports
import { Row, Col } from "antd";

// SCSS files
import "./index.scss";

const Home = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await apiURL.get("/usuarios");

      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="users-container">
      <div className="title-container">
        <h2>Usuario registrados</h2>
      </div>
      <div>
        <Row gutter={[16, 16]} className="usercard-container">
          {users.map((user) => (
            <Col span={6} key={user.id}>
              <UserCard user={user} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
