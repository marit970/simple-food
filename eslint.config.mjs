import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    files: ["**/*.js"],
    languageOptions: {sourceType: "script"},
  },
  {
    languageOptions: { 
      globals: globals.browser 
    }
  },
  {
    ignores: [
      "node_modules/",
      "dist/",
      "app/js/**/*.min.js",
    ]
},
  pluginJs.configs.recommended,
];