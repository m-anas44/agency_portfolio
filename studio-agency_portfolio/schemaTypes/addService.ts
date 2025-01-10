import { defineType, defineField } from "sanity";

export const addService = defineType({
    name: "service",
    title: "Service",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Description",
            validation: (rule) => rule.required().max(200),
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Image",
            validation: (rule) => rule.required(),
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "detailedInfo",
            type: "array",
            title: "Detailed Information",
            of: [
                {
                    type: "block",
                },
                {
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                },
            ],
            description: "Provide detailed information about the service with rich text.",
        }),
        defineField({
            name: "status",
            type: "string",
            title: "Status",
            validation: (rule) => rule.required(),
            options: {
                list: [
                    { title: "Upcoming", value: "upcoming" },
                    { title: "Available", value: "available" },
                ],
            },
        }),
    ],
});
