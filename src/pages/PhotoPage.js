import React, { useEffect, useState } from 'react';
import PhotoGallery from '../components/PhotoGallery';
import withListLoading from '../components/withInfoLoading';

function PhotoPage() {
  const ListLoading = withListLoading(PhotoGallery);
  const [appState, setAppState] = useState({
    loading: false,
    photos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos';
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            setAppState({ loading: false, photos: data });
      });
  }, [setAppState]);

  return (
    <div className='photoGallery'>
      <div className='title'>
        <h1>My Photos</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} photos={appState.photos} />
      </div>
    </div>
  );
}
export default PhotoPage;
