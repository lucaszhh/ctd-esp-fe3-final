module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    quotes: ["error", "double"], // utilizar comillas dobles para literales de cadena
    "jsx-quotes": ["error", "prefer-double"], // utilizar comillas dobles para los atributos de JSX
    "template-quotes": ["error", "double"] // utilizar comillas dobles para los valores de interpolación}
  }
}
