import React from 'react';

const withTitle = (WrappedComponent, title) => {
  return (props) => (
    <div>
      <h1>{title}</h1>
      <WrappedComponent {...props} />
    </div>
  );
};


const SimpleComponent = () => {
  return <p>This is a simple component.</p>;
};

const SimpleComponentWithTitle = withTitle(SimpleComponent, 'Hello from HOC');

export default SimpleComponentWithTitle;
