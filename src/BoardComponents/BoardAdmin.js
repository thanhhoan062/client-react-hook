import React, { useState, useEffect } from 'react';
import UserService from '../services/user.service';

const BoardAdmin = () => {
  const [content, setContent] = useState('');
  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const err =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(err);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};
export default BoardAdmin;
