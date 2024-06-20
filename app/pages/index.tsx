import Head from 'next/head'
import Image from 'next/image'
import styles from './styles.module.scss'
import React, { useEffect, useState } from 'react';

// api.ts
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    throw new Error(`An error occurred: ${response.statusText}`);
  }

  const data: Post[] = await response.json();
  return data;
}


interface HomeProps {
  posts: Post[];
  error?: string;
}

export default function Home({ posts, error }: HomeProps) {
  return (
    <div className={styles.test}>
    </div>
  );
}