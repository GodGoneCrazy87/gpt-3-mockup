import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05} from './import' ;
import './blog.css';

const Blog = () => {
  return (
    <div className="godgonecrazy__blog section__padding" id="blog">
      <div className="godgonecrazy__blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="godgonecrazy__blog-container">
        <div className="godgonecrazy__blog-container_groupA">
        <Article imgurl={blog01} date="Sep 26, 2021" title="GPT-3 and Open AI is the Future. Let us explore how it is? "/>
        </div>
        <div className="godgonecrazy__blog-container_groupB">
        <Article imgurl={blog02} date="Sep 26, 2021" title="GPT-3 and Open AI is the Future. Let us explore how it is? "/>
        <Article imgurl={blog03} date="Sep 26, 2021" title="GPT-3 and Open AI is the Future. Let us explore how it is? "/>
        <Article imgurl={blog04} date="Sep 26, 2021" title="GPT-3 and Open AI is the Future. Let us explore how it is? "/>
        <Article imgurl={blog05} date="Sep 26, 2021" title="GPT-3 and Open AI is the Future. Let us explore how it is? "/>
        </div>
      </div>
    </div>
  )
}

export default Blog
