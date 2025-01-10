import {defineType, defineField} from 'sanity'

export const addBlog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title', // Automatically generate slug from the title
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'blogContent',
      type: 'array',
      title: 'Blog Content',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
      validation: (rule) => rule.required(),
      description: 'Provide detailed information about the blog content.',
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      validation: (rule) => rule.required(),
      options: {
        list: [
          {title: 'Web Development', value: 'Web Development'},
          {title: 'Shopify', value: 'Shopify'},
          {title: 'Digital Marketing', value: 'Digital Marketing'},
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
})
