import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthHeader() {
  return (
    <div>
      <nav>
        <Link to="/">Hero</Link>
        <Link to="/main">Main</Link>
        <Link to="/share">Share</Link>
      </nav>
    </div>
  );
}
