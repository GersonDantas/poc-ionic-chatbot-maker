import './styles.css';
import React from 'react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = function ({ name }: {name: string}) {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        Explore
        <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a>
      </p>
    </div>
  );
};

export { ExploreContainer };
