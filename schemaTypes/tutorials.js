export default {
    name: 'tutorials',
    type: 'document',
    title: 'Tutorial',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'views',
        type: 'string',
        title: 'Views'
      },
      {
        name: 'comment',
        type: 'number',
        title: 'Comment'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true
        },
      },
    ]
  }