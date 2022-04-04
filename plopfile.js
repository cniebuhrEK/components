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

  plop.setGenerator('Editor font color', {
    description: 'Adds new font color to WYSIWYG color picker',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Color name (with spaces)'
      },
      {
        type: 'input',
        name: 'hex',
        message: 'Color hex code'
      }
    ],
    actions: [
      {
        type: 'append',
        path: 'src/theme/themeLight.ts',
        pattern: /(\/\/ plop_editor_color_theme_path\s)/g,
        template:
          '      {{camelCase name}}: {\n' +
          "        font: '{{hex}}'\n" +
          '      },'
      },
      {
        type: 'append',
        path: 'src/theme/themeDark.ts',
        pattern: /(\/\/ plop_editor_color_theme_path\s)/g,
        template:
          '      {{camelCase name}}: {\n' +
          "        font: '{{hex}}'\n" +
          '      },'
      },
      {
        type: 'append',
        path: 'src/components/Wysiwyg/customBlots.ts',
        pattern: /(\/\/ plop_font_color_blot_const\s)/g,
        template:
          "export const FONT_COLOR_{{constantCase name}} = 'font-color-{{camelCase name}}'"
      },
      {
        type: 'append',
        path: 'src/components/Wysiwyg/customBlots.ts',
        pattern: /(\/\/ plop_font_color_blot_create\s)/g,
        template:
          'export const add{{pascalCase name}}FontColorBlotToQuill = () => {\n' +
          "  createFontColorBlot(FONT_COLOR_{{constantCase name}}, 'color-{{camelCase name}}')\n" +
          '}'
      },
      {
        type: 'append',
        path: 'src/components/Wysiwyg/customBlots.ts',
        pattern: /(\/\/ plop_font_color_blot_init\s)/g,
        template: '  add{{pascalCase name}}FontColorBlotToQuill()'
      },
      {
        type: 'append',
        path: 'src/components/Wysiwyg/components/AddFontColorButton.tsx',
        pattern: /(\/\/ plop_import_font_color_blot_definition\s)/g,
        template: '\n' + '  FONT_COLOR_{{constantCase name}},'
      },
      {
        type: 'append',
        path: 'src/components/Wysiwyg/components/AddFontColorButton.tsx',
        pattern: /(\/\/ plop_create_font_color_blot_list\s)/g,
        template: '\n' + '      FONT_COLOR_{{constantCase name}},'
      },
      {
        type: 'append',
        path: 'src/components/Wysiwyg/components/AddFontColorButton.tsx',
        pattern: /{(\/\* plop_create_font_color_blot_component \*\/)}/g,
        template:
          '\n' +
          '          <ColorPicker\n' +
          '            onClick={handleFontColor(FONT_COLOR_{{constantCase name}})}\n' +
          "            className='picker-color color-{{camelCase name}}'\n" +
          '          />'
      },
      {
        type: 'append',
        path: 'src/components/Wysiwyg/components/AddFontColorButton.tsx',
        pattern: /(\/\/ plop_create_font_color_blot_component_color_class\s)/g,
        template:
          '  &.color-{{camelCase name}} {\n    background-color: ${({ theme }) =>\n      theme.colors.editorFontColors.{{camelCase name}}.font};\n  }'
      },
      {
        type: 'append',
        path: 'src/components/Wysiwyg/WysiwygViewerEditor.tsx',
        pattern: /(\/\/ plop_create_font_color_class_viewer\s)/g,
        template:
          '  .ql-container .ql-editor .admin-highlights .color-{{camelCase name}},\n  .ql-container .ql-editor .color-{{camelCase name}} .admin-highlights,\n  .color-{{camelCase name}} {\n    color: ${({ theme }) => theme.colors.editorFontColors.{{camelCase name}}.font} !important;\n  }\n'
      }
    ]
  })
}
