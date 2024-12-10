import {defineType, defineField} from 'sanity'

export const addPlan = defineType({
  name: 'plan',
  title: 'Plan',
  type: 'document',
  fields: [
    defineField({
      name: 'planName',
      title: 'Plan Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.min(1).required().error('At least one feature is required.'),
      description: 'List of features included in this plan',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'discount',
      title: 'Discount',
      type: 'number',
      validation: (rule) => rule.min(1).max(100),
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
  ],
})
