import React, { useEffect, useState } from 'react';
import PostsList from '../components/PostsList';
import withListLoading from '../components/withInfoLoading';
import Formulario from '../components/Formulario';

function PostsPage() {
  const ListLoading = withListLoading(PostsList);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  const addPost = (post) => {
    const newPostList = appState.posts.concat(post);
    setAppState({
      loading: false,
      posts: newPostList
    });
  };

  const handleRemove = (id) => {
    const newPostList = appState.posts.filter((item) => item.id !== id);

    setAppState({
      loading: false,
      posts: newPostList
    });
  };

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const newPost = data.slice(0,8);
            setAppState({ loading: false, posts: newPost });
      });
  }, [setAppState]);

  return (
    <div className='postsList'>
      <div className='title'>
        <h1>My posts</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} posts={appState.posts} onRemove={handleRemove} />
      </div>
      <div className="form-container" style={{padding: '50px 0 200px'}}>
        <Formulario addPost={addPost} />
      </div>
    </div>
  );
}
export default PostsPage;
