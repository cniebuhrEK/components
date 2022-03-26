module.exports = function (plop) {
  plop.setGenerator('Icon', {
    description: 'Adds new svg icon',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'icon name'
      },
      {
        type: 'input',
        name: 'viewBox',
        message: 'icon viewBox'
      },
      {
        type: 'input',
        name: 'svgBody',
        message: 'icon svg body'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/icons/{{name}}.tsx',
        templateFile: 'plop-templates/icon.hbs'
      },
      {
        type: 'append',
        path: 'src/icons/index.ts',
        pattern: /(\/\/ appendIcons\s)/g,
        template: "export { default as {{name}}Icon } from './{{name}}'"
      },
      {
        type: 'append',
        path: 'src/icons/AllIcons.tsx',
        pattern: /(\/\/ appendIconComponent\s)/g,
        template: "    { component: {{name}}Icon, title: '{{name}}Icon' },"
      },
      {
        type: 'append',
        path: 'src/icons/AllIcons.tsx',
        pattern: /(\/\/ appendIconImport\s)/g,
        template: '  {{name}}Icon,'
      }
    ]
  })
}
