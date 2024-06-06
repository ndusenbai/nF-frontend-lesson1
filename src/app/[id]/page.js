"use client";

import data from '../data/data.json';
import { useEffect, useState } from 'react'; 
import DetailsPost from '../components/common/details_post';


export default function PostPage({ params }) {
  const { id } = params;
  const postId = parseInt(id);

  const getPostById = (id) => {
    return data.find(item => item.id === id);
  };

  const post = getPostById(postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <DetailsPost
      id={post.id}
      date={post.date}
      author={post.author}
      title={post.title}
      description={post.description}
    />
  );
}
