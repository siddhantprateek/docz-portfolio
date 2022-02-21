import React from "react";
import "../styles/Blogs.styles.css";
const blog = [
  {
    name: "Blog 1",
    img: "https://i.imgur.com/ZKlq5g1.jpg",
    route: "blog1",
  },
  {
    name: "Blog2",
    img: "https://i.imgur.com/SVqLFMf.jpg",
    route: "blog2",
  },
  {
    name: "Blog 3",
    img: "https://i.imgur.com/gmE6GTT.jpg",
    route: "blog3",
  },
  {
    name: "Blog 4",
    img: "https://i.imgur.com/MFXU8MG.jpg",
    route: "blog4",
  },
];
const Blogs = () => {
  return (
    <div className="blogs-container">
      {blog.map((data) => (
        <div className="blog-ctn">
          <a href={`blogs/${data.route}`}>
            <img src={data.img} alt="" />
          </a>
          <div className="blog-content">
            <h2>{data.name}</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
