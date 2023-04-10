import React from "react";

const Welcome = ({ user }) => {
  return (
    <div>
      <h1>
        Welcome {user.first_name} {user.last_name}!
      </h1>
      <p>You have successfully logged in.</p>
    </div>
  );
};

export default Welcome;
