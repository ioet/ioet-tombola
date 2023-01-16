module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-jsdoc",
        "eslint-plugin-prefer-arrow",
        "eslint-plugin-unicorn",
        "eslint-plugin-import",
        "@typescript-eslint",
        "@typescript-eslint/tslint",
        "prettier"
    ],
    "root": true,
    "rules": {
        "prettier/prettier": "error"
    }
};
