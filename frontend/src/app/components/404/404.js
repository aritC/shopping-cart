import React from "react";

const NotFound = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body text-center">
          <h1>Invalid URL</h1>
          <p>
            Either the url you're looking for is wrong or not implemented yet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
