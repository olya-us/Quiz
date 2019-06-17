module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "google",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "require-jsdoc"
    ],
    "rules": {
         "require-jsdoc": 0,
         "valid-jsdoc": 0,
         "linebreak-style": ["error", "windows"]
    }
};