import { sanityClient } from "./sanityClient";

export const navLinks = [
  { name: "About", to: "/aboutUs" },
  { name: "Contact", to: "/contact" },
  { name: "Pricing", to: "/pricing" },
  { name: "Blog", to: "/blog" },
];

export const serviceTitles = async () => {
  try {
    const query = `*[_type == "service" && status != "upcoming"]{
      title,
      slug,
    }`;
    const data = await sanityClient.fetch(query);
    return data;
  } catch (error) {
    console.error(error);
  }
};

