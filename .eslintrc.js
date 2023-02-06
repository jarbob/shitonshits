module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:tailwindcss/recommended",
    "plugin:prettier/recommended", // Make this the last element so prettier config overrides other formatting rules
  ],
  plugins: ["tailwindcss"],
  rules: {},
};
