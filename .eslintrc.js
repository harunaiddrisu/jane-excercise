module.exports = {
  env: {
    es6: true,
    node: true,
    'react-native/react-native': true,
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.native.js', '.ios.js', '.android.js', '.jsx', '.ts', '.tsx', '.ios.tsx', '.android.tsx'],
      },
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-native', 'react-hooks', 'graphql'],
  extends: [
    'eslint:recommended',
    'airbnb-typescript/base',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: './',
    sourceType: 'module',
  },
  rules: {
    'global-require': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        '': 'never',
      },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/camelcase': [
      'error',
      {
        ignoreImports: true,
        allow: ['^.*Query.*', '^.*Mutation.*', 'user.*'],
      },
    ],
    'graphql/template-strings': [
      'error',
      {
        env: 'apollo',
        // schemaJsonFilepath: path.resolve(__dirname, './schema.json'),
        schemaJson: require('./schema.json'),
        tagName: 'gql',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_id',
          '__models__',
          '__defaults__',
          '__apolloTestClient__',
          '_doc',
          '__rootdir__',
          '__typename',
          '__emailVerificationToken__',
          '_allUsersMeta',
          '_test',
          '_testDefault',
          '_animateToast',
          '_navigation',
        ],
      },
    ],
    'max-len': [
      'warn',
      {
        code: 120,
        comments: 120,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'object-curly-newline': 'off',
    'no-param-reassign': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  overrides: [
    {
      files: ['src/types/graphqlTypes.ts'],
      rules: {
        camelcase: 'off',
      },
    },
  ],
};
