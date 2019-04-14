import React from 'react';

export default function Header({ children, title, styleClass }) {
  return (
    <header>
      {/* {responsive- does padding for u} */}
      <div className="container-fluid">
        <div className={`row-align-items-center ${styleClass}`}>
          <div className="col text-center">
            <h1 className="text-light text-uppercase text-slanted display-3 letter-spacing">
              {title}
            </h1>
            {/* so if want a button on one page or none on another can just pass it dont need to worry about explicitly setting someothing dont need */}
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}
//image will always be displayed if none given, will do the hero class img
Header.defaultProps = {
  title: 'default title',
  styleClass: 'header-hero'
};
