import React from 'react';
import Crosshair from 'components/Crosshair';
import './style.scss';
import falconePhoto from './images/falcone-photo.png';

const Home = () =>
  (
    <div className="home">
      <Crosshair picture={falconePhoto} />
    </div>
  );

export default Home;
