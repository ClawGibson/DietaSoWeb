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

  const userTest = {
    id: "123123asdas",
    nombre: "José Parada Machuca",
    email: "josejose@gmail.com",
  };

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
    console.log(users);
  }, []);

  return (
    <div className="users-container">
      <div className="title-container">
        <h2>Usuario registrados</h2>
      </div>
      <div>
        <Row gutter={[16, 16]} className="usercard-container">
          <Col span={6}>
            <UserCard user={userTest} />
          </Col>

          <Col span={6}>
            <UserCard user={userTest} />
          </Col>

          {users.map((user) => (
            <Col span={6}>
              <UserCard user={user} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
