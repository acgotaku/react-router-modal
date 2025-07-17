import img001 from './images/001.jpg';
import img002 from './images/002.jpg';
import img003 from './images/003.jpg';
import img004 from './images/004.jpg';
import img005 from './images/005.jpg';
import img006 from './images/006.jpg';
import img007 from './images/007.jpg';
import img008 from './images/008.jpg';

import view001 from './views/001.jpg';
import view002 from './views/002.jpg';
import view003 from './views/003.jpg';
import view004 from './views/004.jpg';
import view005 from './views/005.jpg';

const IMAGES = [
  {
    id: 'img001',
    viewId: 'view001',
    title: 'Image 001',
    src: img001,
    alt: 'Image 001'
  },
  {
    id: 'img002',
    viewId: 'view002',
    title: 'Image 002',
    src: img002,
    alt: 'Image 002'
  },
  {
    id: 'img003',
    viewId: 'view003',
    title: 'Image 003',
    src: img003,
    alt: 'Image 003'
  },
  {
    id: 'img004',
    viewId: 'view004',
    title: 'Image 004',
    src: img004,
    alt: 'Image 004'
  },
  {
    id: 'img005',
    viewId: 'view005',
    title: 'Image 005',
    src: img005,
    alt: 'Image 005'
  },
  {
    id: 'img006',
    viewId: 'view005',
    title: 'Image 006',
    src: img006,
    alt: 'Image 006'
  },
  {
    id: 'img007',
    viewId: 'view005',
    title: 'Image 007',
    src: img007,
    alt: 'Image 007'
  },
  {
    id: 'img008',
    viewId: 'view005',
    title: 'Image 008',
    src: img008,
    alt: 'Image 008'
  }
];

function getImageById(id: string) {
  return IMAGES.find(image => image.id === id);
}

const VIEWS = [
  {
    id: 'view001',
    title: 'View 001',
    src: view001,
    alt: 'View 001'
  },
  {
    id: 'view002',
    title: 'View 002',
    src: view002,
    alt: 'View 002'
  },
  {
    id: 'view003',
    title: 'View 003',
    src: view003,
    alt: 'View 003'
  },
  {
    id: 'view004',
    title: 'View 004',
    src: view004,
    alt: 'View 004'
  },
  {
    id: 'view005',
    title: 'View 005',
    src: view005,
    alt: 'View 005'
  }
];

function getViewById(id: string) {
  return VIEWS.find(view => view.id === id);
}

export { IMAGES, VIEWS, getViewById, getImageById };
