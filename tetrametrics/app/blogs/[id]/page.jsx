"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import DOMPurify from "dompurify";
import RandomBlogs from '@components/RandomBlogs';
import parse from "html-react-parser";
import Banner from '@components/Banner';

export default function Blog({ params }) {
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/single-blog/${params.id}`);
        const sanitizedBlog = sanitizeBlog(response.data);
        setBlog(sanitizedBlog);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [params.id]);

  const sanitizeBlog = (blog) => {

    const correctedImageUrl = blog.imageUrl.replace(/\\/g, '/');
    const formattedDate = new Date(blog.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      });

      return { ...blog, imageUrl: correctedImageUrl, formattedDate };
    };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
    
 
    <div className='max-w-[1200px] m-auto mt-20'>
        <div className=' flex items-center justify-center gap-10'>
      <div>
        <Link href={'/blogs'} className='text-blue-600 font-bold text-2xl  '>Blog</Link>
        <h1 className='text-4xl font-bold w-[400px] mt-4 mb-4'>{blog.title}</h1>
        <p className='text-xl mt-3'>{blog.formattedDate}</p>
        <p className='text-xl font-bold mt-3'>{blog.author.username}</p>
      </div>
      <div>
        <Image src={blog.imageUrl} height={450} width={450} className='rounded-xl'/>
      </div>
      </div>
      <div className='bg-black max-w-[1000px] m-auto mt-20 h-[.5px]'></div>
      <div className='mt-20'>
      <div className='max-w-[800px] m-auto ql-editor' 
    >
              {parse(blog.content)}
      </div>
      </div>

      <div className='bg-black max-w-[1000px] m-auto mt-20 h-[.5px]'></div>

<div className='max-w-[1000px] m-auto'>
    <h1 className='mt-10 mb-10 text-2xl font-bold'>Other Blogs</h1>
<RandomBlogs/>

</div>

    </div>
    <div className="sm:p-5">
         <Banner
           heading={"Get started with new Flywheel 2.0"}
           subHeading={"Advertise your business with superhuman intelligence"}
         />
       </div>
       </>
  );
}
