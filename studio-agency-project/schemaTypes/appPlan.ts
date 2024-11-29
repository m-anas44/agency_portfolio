import { defineType, defineField } from "sanity";

export const addPlan = defineType({
    name: "plan",
    title: "Plan",
    type: "document",
    fields: [
        defineField({
            name: "planName",
            title: "Plan Name",
            type: "string",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Slug",
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "number",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "discount",
            title: "Discount",
            type: "number",
            validation: (rule) => rule.min(1).max(80)
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
    ]
})