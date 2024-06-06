'use client';

import { useSearchParams } from 'next/navigation';
import data from '../data/data.json';
import { useEffect, useState } from 'react';
import Post from '../components/common/post';


const PostPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      const foundPost = data.find(item => item.id.toString() === id);
      setPost(foundPost);
    }
  }, [id]);

  if (!id) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Post
      id={item.id}
      date={item.date}
      author={item.author}
      title={item.title}
      description={item.description}
    />
  );
};

export default PostPage;
