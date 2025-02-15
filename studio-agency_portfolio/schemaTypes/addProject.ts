import {defineType, defineField} from 'sanity'

export const addProject = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      type: 'string',
      title: 'Status',
      validation: (rule) => rule.required(),
      options: {
        list: [
          {title: 'Ongoing', value: 'ongoing'},
          {title: 'Completed', value: 'completed'},
        ],
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'service'}],
      description: 'Select a service category associated with this plan.',
      validation: (rule) => rule.required(),
    }),
  ],
})
