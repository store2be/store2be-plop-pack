const TEMPLATES_DIRECTORY = 'templates'

const WITH_NAME_IN_CWD = '{{cwd}}/{{name}}'

const CLASS_COMPONENT = 'react-class-component'
const COMPONENT_SPEC = 'react-component-spec'
const FUNCTION_COMPONENT = 'react-function-component'

const specFile = {
  type: 'add',
  path: `${WITH_NAME_IN_CWD}.spec.tsx`,
  templateFile: `${TEMPLATES_DIRECTORY}/${COMPONENT_SPEC}.hbs`,
}

module.exports = plop => {
  plop.addHelper('cwd', () => process.cwd())

  plop.setGenerator(FUNCTION_COMPONENT, {
    description: 'A scaffold for a function component (React.SFC) and tests.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter a name for your component',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `${WITH_NAME_IN_CWD}.tsx`,
        templateFile: `${TEMPLATES_DIRECTORY}/${FUNCTION_COMPONENT}.hbs`,
      },
      specFile,
    ],
  })

  plop.setGenerator(CLASS_COMPONENT, {
    description: 'A scaffold for a class component (React.Component) and tests.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter a name for your component',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `${WITH_NAME_IN_CWD}.tsx`,
        templateFile: `${TEMPLATES_DIRECTORY}/${CLASS_COMPONENT}.hbs`,
      },
      specFile,
    ],
  })
}
