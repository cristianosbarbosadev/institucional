import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href="#advantage"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Saiba mais
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
