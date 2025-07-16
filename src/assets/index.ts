import img001 from './images/001.jpg';
import img002 from './images/002.jpg';
import img003 from './images/003.jpg';
import img004 from './images/004.jpg';
import img005 from './images/005.jpg';
import img006 from './images/006.jpg';
import img007 from './images/007.jpg';
import img008 from './images/008.jpg';

const IMAGES = [
  {
    id: 'img001',
    title: 'Image 001',
    src: img001,
    alt: 'Image 001'
  },
  {
    id: 'img002',
    title: 'Image 002',
    src: img002,
    alt: 'Image 002'
  },
  {
    id: 'img003',
    title: 'Image 003',
    src: img003,
    alt: 'Image 003'
  },
  {
    id: 'img004',
    title: 'Image 004',
    src: img004,
    alt: 'Image 004'
  },
  {
    id: 'img005',
    title: 'Image 005',
    src: img005,
    alt: 'Image 005'
  },
  {
    id: 'img006',
    title: 'Image 006',
    src: img006,
    alt: 'Image 006'
  },
  {
    id: 'img007',
    title: 'Image 007',
    src: img007,
    alt: 'Image 007'
  },
  {
    id: 'img008',
    title: 'Image 008',
    src: img008,
    alt: 'Image 008'
  }
];

function getImageById(id: string) {
  return IMAGES.find(image => image.id === id);
}

export { IMAGES, getImageById };
