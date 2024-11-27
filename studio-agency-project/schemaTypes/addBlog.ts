import { defineType, defineField } from "sanity";

export const addBlog = defineType({
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Slug",
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Image",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "blogContent",
            type: "text",
            title: "Blog Content",
            validation: (rule) => rule.required().min(50).max(1000),
            description: "Provide detailed information about the service (min 50, max 1000 characters).",
        }),
        defineField({
            name: "category",
            type: "string",
            title: "Category",
            validation: (rule) => rule.required(),
            options: {
                list: [
                    { title: "Web Development", value: "web-development" },
                    { title: "Shopify", value: "shopify" },
                    { title: "Digital Marketing", value: "digital-marketing" },
                ],
            },
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published at',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
    ],
});
