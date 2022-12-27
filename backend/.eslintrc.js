export const parser = "@babel/eslint-parser";
export const parserOptions = {
    requireConfigFile: false,
    babelOptions: {
        babelrc: false,
        configFile: false,
        // your babel options
        presets: ["@babel/preset-env"],
    },
};