import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutUser } from "../../../../state/User/UserAction";

const UserProfile = () => {
  const user = useSelector((store) => store.userReducer.User);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  return (
    <div className="container col-md-5">
      <div className="card">
        <div className="card-body">
          {user._id === "" ? (
            <h2 className="text-center">You need to login first</h2>
          ) : (
            <div>
              {Object.keys(user).map((userKey, idx) => {
                return (
                  <div className="mb-2" key={idx}>
                    <span className="fw-bold">{`${userKey} : `}</span>
                    <span>{user[userKey]}</span>
                  </div>
                );
              })}
              <button
                className="btn btn-danger mt-4"
                onClick={() => dispatch(LogoutUser(navigate))}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
