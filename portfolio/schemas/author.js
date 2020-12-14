export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'age',
      title: 'Age',
      type: 'number',
    },
    {
      name: 'dob',
      title: 'DOB',
      type: 'date',
    },
    {
      name: 'nationality',
      title: 'Nationality',
      type: 'string',
    },
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: "object",
          fields: [
            {
              name: 'name',
              title: 'Name of institution',
              type: 'string'
            },
            {
              name: 'timespan',
              title: 'Time Span',
              type: 'string'
            },
            {
              name: 'educationType',
              title: 'Education Offered',
              type: 'string'
            },
            {
              name: 'image',
              title: 'Image',
              type: 'url'
            },
          ]
        }
      ]
    },
    {
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [
        {
          type: "string"
        }
      ],
      options: {
        layout: 'tags',
      }
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: "string"
        }
      ],
      options: {
        layout: 'tags',
      }
    },
    {
      name: 'otherinfo',
      title: 'Other Informations',
      type: 'array',
      of: [
        {
          type: "string"
        }
      ],
      options: {
        layout: 'grid',
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'resume',
      title: 'Resume',
      type: 'file'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
