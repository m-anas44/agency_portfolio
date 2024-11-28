import { defineType, defineField } from "sanity";

export const addFAQS = defineType({
    name: 'faqs',
    title: "FAQS",
    type: "document",
    fields: [
        defineField({
            name: 'question',
            title: 'Question',
            type: 'text',
            validation: (rule) => rule.required().max(100)
        }),
        defineField({
            name: 'answer',
            title: 'Answer',
            type: 'text',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: 'Web Development', value: 'web-development' },
                    { title: 'Shopify', value: 'shopify' },
                    { title: 'Digital Marketing', value: 'marketing' },
                ]
            }
        })
    ]
})