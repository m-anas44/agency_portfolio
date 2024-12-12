import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sanityClient } from "@/lib/sanityClient";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url"; // Import the image URL builder
import { getImageDimensions } from "@sanity/asset-utils"; // Import image dimension utility

// Create the Sanity URL builder client
const imageUrlBuilder = urlBuilder(sanityClient);

const BlogContentSection = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const query = `*[_type == "blog" && slug.current == $slug][0]{
          title,
          slug,
          "image": image.asset->url,
          category,
          publishedAt,
          blogContent,
        }`;
        const blogData = await sanityClient.fetch(query, { slug });
        setBlog(blogData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  // Custom image component
  const SampleImageComponent = ({ value, isInline }) => {
    const { width, height } = getImageDimensions(value);
    const imageUrl = imageUrlBuilder
      .image(value)
      .width(isInline ? 100 : 800) // Adjust width for inline or block display
      .fit("max") // Fit the image
      .auto("format") // Auto-format the image
      .url();

    return (
      <img
        src={imageUrl}
        alt={value.alt || "Blog Image"}
        loading="lazy"
        style={{
          display: isInline ? "inline-block" : "block",
          aspectRatio: width / height,
        }}
      />
    );
  };

  return (
    <div className="col-span-12 p-4 sm:p-6 bg-white rounded-md shadow-sm lg:col-span-8">
      {/* Blog banner image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full mb-6 rounded-md"
      />

      {/* Post metadata: date and author */}
      <div className="flex items-center mb-4 space-x-4 text-gray-600 text-xs sm:text-base">
        <span className="text-red-500">
          📅 {new Date(blog.publishedAt).toDateString()}
        </span>
        <span>✍️ By admin</span> {/* Author information */}
      </div>

      {/* Blog post title */}
      <h2 className="mb-4 text-xl sm:text-2xl font-semibold">{blog.title}</h2>

      {/* Render Blog content with PortableText */}
      <div className="mb-6 text-sm sm:text-base">
        <PortableText
          value={blog.blogContent}
          components={{
            types: {
              image: SampleImageComponent,
            },
            listItem: {
              bullet: ({ children }) => (
                <li style={{ listStyleType: "disclosure-closed" }}>
                  {children}
                </li>
              ),

              checkmarks: ({ children }) => <li>✅ {children}</li>,
            },
            marks: {
              link: ({ children, value }) => (
                <a
                  href={value.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {children}
                </a>
              ),
            },
          }}
        />
      </div>

      {/* Closing paragraph */}
      <p className="leading-relaxed text-sm sm:text-base text-gray-700">
        Enjoyed the article? Stay tuned for more updates.
      </p>
    </div>
  );
};

export default BlogContentSection;
