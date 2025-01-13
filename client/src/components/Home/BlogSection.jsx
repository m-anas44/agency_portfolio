import React, { useEffect, useState } from "react";
import { Button } from "@/components/SharedComponents/index";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { sanityClient } from "@/lib/sanityClient";
import { MdArrowOutward } from "react-icons/md";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const query = `*[_type == "blog"] | order(category->title){
          _id,
          title,
          slug,
          "image": image.asset->url,
          "category": category->title,
          publishedAt
        }`;
        const data = await sanityClient.fetch(query);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <section className="py-10 lg:py-7">
      {/* Section Header */}
      <div className="flex flex-col justify-between px-3 sm:px-4 md:px-6 lg:px-20 mb-10 md:flex-row">
        <div>
          <p className="text-lg sm:text-xl font-bold text-secondary text-center md:text-left">
            Blog & News
          </p>
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mt-1 text-center text-primary">
            Latest News <span className="text-secondary">Blog</span>
          </h2>
        </div>
        <div>
          <Button
            className="mt-4 flex gap-x-2 items-center text-base sm:text-lg md:text-xl transition-all duration-200 rounded-full drop-shadow-lg md:mt-0 hover:bg-secondary hover:text-white mx-auto"
            onClick={() => {
              navigate("/blog");
              window.scrollTo(0, 0);
            }}
          >
            <span>See All Blog</span>
            <MdArrowOutward className="text-xl sm:text-2xl" />
          </Button>
        </div>
      </div>
      <div className="max-w-[85rem] mx-auto bg-[#FAF9F6] px-3 sm:px-4 md:px-6 lg:px-20 py-8">
        <div className="grid gap-5 sm:gap-10 lg:grid-cols-2 ">
          {blogs.map((blog, index) => (
            <Link
              key={index}
              to={`/blog/${blog.slug.current}`}
              onClick={() => window.scrollTo(0)}
              className="block overflow-hidden shadow-md hover:shadow-lg bg-secondary group rounded-xl focus:outline-none "
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                <div className="relative w-full overflow-hidden shrink-0 sm:rounded-l-xl rounded-t-xl sm:rounded-t-none sm:w-56 h-48">
                  <img
                    className="absolute top-0 left-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105 size-full sm:rounded-l-xl rounded-t-xl sm:rounded-t-none"
                    src={blog.image}
                    alt={blog.title}
                  />
                </div>
                <div className="py-3 sm:py-6 grow lg:py-0 px-3 sm:px-0 md:pr-3 pr-0">
                  <span className="truncate bg-primary text-white text-sm px-2 py-1 rounded">
                    {blog.category}
                  </span>
                  <h3 className="text-xl font-semibold text-tertiary line-clamp-2 mt-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 mt-1 text-sm">
                    {new Date(blog.publishedAt).toDateString()}
                  </p>
                  <p className="flex items-center mt-2 text-sm font-medium sm:mt-3 text-primary gap-x-1 decoration-2 group-hover:underline group-focus:underline">
                    Read more
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
