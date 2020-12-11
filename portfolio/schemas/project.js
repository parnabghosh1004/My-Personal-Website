export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'description',
            type: 'text'
        },
        {
            name: 'date',
            type: 'datetime'
        },
        {
            name: 'projectType',
            title: 'Project Type',
            type: 'string',
            options: {
                list: [
                    { value: 'personal', title: 'Personal' },
                    { value: 'client', title: 'Client' },
                    { value: 'School/College', title: 'School/College' }
                ]
            }
        },
        {
            name: 'link',
            type: 'url'
        },
        {
            name: 'tags',
            type: 'array',
            of: [
                {
                    type: "string"
                }
            ],
            options: {
                layout: 'tags',
            }
        }
    ]
}