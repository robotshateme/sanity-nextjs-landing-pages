export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cf6f707413ff57f43db5de8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ipk3ppqt',
                  apiId: '8173fb74-99b6-426b-a6f9-85491b4cca1f'
                },
                {
                  buildHookId: '5cf6f707ab6fd6da7ae7285c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7o2f5thd',
                  apiId: '90fc7f6b-b4e7-4c37-a9cd-6fa55553862e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robotshateme/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7o2f5thd.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
