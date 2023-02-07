import React from 'react'
import { Article } from '../../components/index.js'
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css'

const blogs = [
  {
    date: 'September 26, 2023',
    title: 'GPT-3 and Open AI is the future. Let us explore how it is?',
    image: blog01
  },
  {
    date: 'September 26, 2023',
    title: 'GPT-3 and Open AI is the future. Let us explore how it is?',
    image: blog02
  },
  {
    date: 'September 26, 2023',
    title: 'GPT-3 and Open AI is the future. Let us explore how it is?',
    image: blog03
  },
  {
    date: 'September 26, 2023',
    title: 'GPT-3 and Open AI is the future. Let us explore how it is?',
    image: blog04
  },
  {
    date: 'September 26, 2023',
    title: 'GPT-3 and Open AI is the future. Let us explore how it is?',
    image: blog05
  }
]

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening,<br />We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__groupA'>
          <Article key={0} date={blogs[0].date} title={blogs[0].title} image={blogs[0].image} />
        </div>
        <div className='gpt3__blog-container__groupB'>
          {blogs.slice(1).map((ele, index) => (
            <Article key={index} date={ele.date} title={ele.title} image={ele.image} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog