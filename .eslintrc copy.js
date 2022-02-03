module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: ['plugin:vue/essential',
   'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    // Best Practices
    'eqeqeq': 'error',"@fullhuman/postcss-purgecss": "^1.2.0",
    "@vue/cli-plugin-babel": "^3.7.0",
    "@vue/cli-plugin-eslint": "^3.7.0",
    "@vue/cli-service": "^3.7.0",
    "axios-mock-adapter": "^1.17.0",
    "node-sass": "^4.14.1",
    "purgecss": "^1.3.0",
    "sass-loader": "^7.1.0",
    "script-loader": "0.7.2",
    "tailwindcss": "^1.0.1",
    "vue-template-compiler": "^2.6.10"
    "no-invalid-this": "error",
    "no-return-assign": "error",
    "no-unused-expressions": ["error", { allowTernary: true }],
    "no-useless-concat": "error",
    "no-useless-return": "error",

    // Variable
    "init-declarations": "error",
    "no-use-before-define": "error",

    // Stylistic Issues
    "array-bracket-newline": ["error", { multiline: true, minItems: null }],
    "array-bracket-spacing": "error",
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "block-spacing": "error",
    "comma-dangle": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "func-call-spacing": "error",
    "implicit-arrow-linebreak": ["error", "beside"],
    "indent": ["error", 2],
    "keyword-spacing": "error",
    // "multiline-ternary": ["error", "none"],
    "no-lonely-if": "error",
    "no-mixed-operators": "error",
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
    "no-tabs": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-property-newline": [
      "error",
      { allowAllPropertiesOnSameLine: true }
    ],
    "quote-props": ["error", "consistent"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "semi-spacing": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": "error",
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",

    // ES6
    "arrow-spacing": "error",
    "no-confusing-arrow": "error",
    "no-duplicate-imports": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-const": "error",
    "prefer-template": "error",

    // Vue
    "vue/html-quotes": ["error", "double"]
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  }
  
};