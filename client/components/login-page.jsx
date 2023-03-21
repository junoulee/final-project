import React from 'react';
import { Link } from 'react-router-dom';
// import CreateAccount from './create-account';

export default function LogInPage() {

  return (

    <>
      <header className="header-upper py-1 bg-white">
        <div className="container-xxl ">
          <Link to="/" className="navbar-brand d-flex justify-content-center align-items-center">
            <img src="/images/logo.png" className="card-img-top" alt="..." style={{ width: '10%', height: '10%' }} />
          </Link>
        </div>
      </header>
      <div className="container-xxl d-flex justify-content-center">
        <div className="row">
          <div className="col-12 text-center">
            <div className="card mt-4" style={{ width: '22rem', borderColor: 'darkgray' }}>
              <div className="card-body">
                <div className="card-header bg-white fs-3 fw-bold">
                  Log In
                </div>
                <ul className="list-group list-group-flush">
                  <div className="mb-3 row mt-4">
                    <div className="col-12">
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email address"/>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-12">
                      <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                    </div>
                  </div>
                </ul>
                <a href="#" className="btn btn-primary border-0 fw-bold mt-3" style={{ backgroundColor: '#ffc107' }}>Log In</a>
                <p className="list-group-item mb-0 mt-5">Don&apos;t have an account?
                  <Link to="/register"
                  style={{ color: 'blue', whiteSpace: 'nowrap' }}> Create Account</Link></p>
              </div>
            </div>
            <Link to="/">Go back to homepage</Link>
          </div>
        </div>
      </div>
    </>
  );
}
