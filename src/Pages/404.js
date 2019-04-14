import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

export default function Error() {
  return (
    <Header title="404" styleClass="default-hero">
      <h2 className="text-light text-uppercase">
        OOPS! You're in the wrong place!'
      </h2>
      <Link to="/" className="text-uppercase btn btn-secondary btn-lg mt-3">
        Return Home
      </Link>
    </Header>
  );
}
