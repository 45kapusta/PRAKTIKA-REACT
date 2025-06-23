import { useState } from 'react';
import './Gallery.css';

const photos = [
  { id: 1, src: 'Photo/25.jpg', category: 'Портреты' },
  { id: 2, src: 'Photo/26.jpg', category: 'Съемки' },
  { id: 3, src: 'Photo/27.jpg', category: 'Портреты' },
  { id: 4, src: 'Photo/22.jpg', category: 'Съемки' },
  { id: 5, src: 'Photo/23.jpg', category: 'Портреты' },
  { id: 6, src: 'Photo/24.jpg', category: 'Съемки' },
  { id: 7, src: 'Photo/12.jpg', category: 'Портреты' },
  { id: 8, src: 'Photo/2.jpg', category: 'Съемки' },
  { id: 9, src: 'Photo/3.jpg', category: 'Портреты' },
  { id: 10, src: 'Photo/4.jpg', category: 'Съемки' },
  { id: 11, src: 'Photo/7.jpg', category: 'Портреты' },
  { id: 12, src: 'Photo/14.jpg', category: 'Съемки' },
  { id: 13, src: 'Photo/1.jpg', category: 'Портреты' },
  { id: 14, src: 'Photo/8.jpg', category: 'Съемки' },
  { id: 15, src: 'Photo/9.jpg', category: 'Портреты' },
  { id: 16, src: 'Photo/10.jpg', category: 'Съемки' },
  { id: 17, src: 'Photo/6.jpg', category: 'Портреты' },
  { id: 18, src: 'Photo/5.jpg', category: 'Съемки' },
  { id: 19, src: 'Photo/13.jpg', category: 'Портреты' },
  { id: 20, src: 'Photo/11.jpg', category: 'Съемки' },
  { id: 21, src: 'Photo/15.jpg', category: 'Портреты' },
  { id: 22, src: 'Photo/16.jpg', category: 'Съемки' },
  { id: 23, src: 'Photo/17.jpg', category: 'Портреты' },
  { id: 24, src: 'Photo/18.jpg', category: 'Съемки' },
  { id: 25, src: 'Photo/19.jpg', category: 'Портреты' },
  { id: 26, src: 'Photo/20.jpg', category: 'Съемки' },
  { id: 27, src: 'Photo/21.jpg', category: 'Портреты' },
];

function Gallery() {
  const [filter, setFilter] = useState('Все');

  const filteredPhotos = filter === 'Все' 
    ? photos 
    : photos.filter(photo => photo.category === filter);

  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="filter-buttons">
        <button onClick={() => setFilter('Все')}>Все</button>
        <button onClick={() => setFilter('Портреты')}>Портреты</button>
        <button onClick={() => setFilter('Съемки')}>Съемки</button>
      </div>
      <div className="gallery-grid">
        {filteredPhotos.length > 0 ? (
          filteredPhotos.map(photo => (
            <div key={photo.id} className="gallery-item">
              <img src={photo.src} alt={`Model Photo ${photo.id}`} />
            </div>
          ))
        ) : (
          <p>Нет фотографий в этой категории.</p>
        )}
      </div>
    </section>
  );
}

export default Gallery;