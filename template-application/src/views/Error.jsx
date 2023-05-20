import React from "react";
import image404 from "../assets/404.jpg";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="error-container">
      <div className="text-white">
        <img
          className="img-fluid position-relative object-fit-center "
          src={image404}
          alt="404 image"
        />
        <div className="d-flex flex-column gap-3 position-absolute top-50 start-50 translate-middle text-center">
          <span className="fw-semibold">404</span>
          <h1 className="fw-semibold">Page Not Found</h1>
          <div className="d-flex flex-column mb-3 ">
            <span>Sorry, we couldn't find the page you're looking for.</span>
            <button
              onClick={handleClick}
              type="button"
              className="d-flex mx-auto justify-content-center align-items-center text-white btn "
            >
              <FiArrowLeft />
              <span>Back to home</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Error;
