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
      title: 'Category',
      type: 'reference',
      to: [{type: 'service'}],
      description: 'Select a service category associated with this plan.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'planName',
      subtitle: 'category.title', // Reference the title of the related service
      price: 'price',
      discount: 'discount',
    },
    prepare({title, subtitle, price, discount}) {
      return {
        title,
        subtitle: `${subtitle || 'No category'} - $${price || '0.00'}${discount ? ` (${discount}% off)` : ''}`,
      }
    },
  },
})
