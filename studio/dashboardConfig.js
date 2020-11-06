export default {
  widgets: [
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
                  buildHookId: '5fa558ec1c70cf00c0dc9f93',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3fxmxc9j',
                  apiId: '098e50d9-a26c-4312-b809-60ef1c39a18c'
                },
                {
                  buildHookId: '5fa558ec8bc76800e1b393ab',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1avaidxj',
                  apiId: '4018eca9-3ebd-4d37-afc0-ee451ab9121a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anoncam/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1avaidxj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
