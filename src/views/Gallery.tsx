import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IMAGES, VIEWS } from '../assets';

const Galleryiew: React.FC = () => {
  const location = useLocation();

  return (
    <div style={{ padding: '0 24px' }}>
      <h2>Gallery</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px'
        }}
      >
        {IMAGES.map(image => (
          <Link
            key={image.id}
            to={`/gallery/${image.id}`}
            state={{ backgroundLocation: location }}
          >
            <img
              width={200}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px'
              }}
              src={image.src}
              alt={image.title}
            />
          </Link>
        ))}
        {VIEWS.map(view => (
          <Link
            key={view.id}
            to={`/view/${view.id}`}
            state={{ backgroundLocation: location }}
          >
            <img
              width={200}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px'
              }}
              src={view.src}
              alt={view.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Galleryiew;
