// src/app/blog/[slug]/page.jsx
import React from 'react';
import styles from './SinglePost.module.css';
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import SinglePostCart from '@/Component/SinglePostCart/SinglePostCart';
import RightColumPostCart from '@/Component/RightColumPostCart/RightColumPostCart';
import { getPost, getAllPostSlugs } from '@/data';

// This function generates static paths
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs(); // Fetch all slugs from your data source
  return slugs.map(({ slug }) => ({
    slug: slug.toString(),
  }));
}

const SinglePost = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.blogHead}>
        <h1>Blog Details Page</h1>
        <div className={styles.headLinks}>
          <Link href='/' style={{ color: "white", textDecoration: "none" }}>Home</Link>
          <FaArrowRightLong style={{ width: "50px", color: "white" }} />
          <Link href='/blog' style={{ color: "white", textDecoration: "none" }}>Blog</Link>
          <FaArrowRightLong style={{ width: "50px", color: "white" }} />
          <Link href={`/blog/${slug}`} style={{ color: "white", textDecoration: "none" }}>Single Blog</Link>
        </div>
      </div>
      <div className={styles.singlePostContent}>
        <div className={styles.SinglePost}>
          <SinglePostCart post={post} />
        </div>
        <div className={styles.RightColumPostCart}>
          <RightColumPostCart />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
