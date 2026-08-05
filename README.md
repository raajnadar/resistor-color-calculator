<p align="center">
  <img alt="resitor-color-calculator" src="assets/resistor_color_calculator_thumb.png" width="200" height="200">
</p>

<h1 align="center">Resistor Color Calculator</h1>

<p align="center">
 <a href="https://github.com/raajnadar/resistor-color-calculator/actions/workflows/ci.yml">
  <img alt="CI" src="https://img.shields.io/github/actions/workflow/status/raajnadar/resistor-color-calculator/ci.yml?branch=master&label=CI&style=for-the-badge" />
 </a>
 <a href="https://github.com/raajnadar/resistor-color-calculator/actions/workflows/deploy.yml">
  <img alt="Deploy" src="https://img.shields.io/github/actions/workflow/status/raajnadar/resistor-color-calculator/deploy.yml?branch=master&label=Deploy&style=for-the-badge" />
 </a>
 <a href="https://github.com/raajnadar/resistor-color-calculator/blob/master/LICENSE.md">
  <img alt="License" src="https://img.shields.io/github/license/raajnadar/resistor-color-calculator?color=red&style=for-the-badge" />
 </a>
</p>

Do you find it difficult to read the value of a resistor? Let this web application do the work for you. Select the color bands, and the application shows the resistance and the tolerance. Please leave a star on this repository if this project helps you. **The application supports 4 band resistors only.**

## Usage

1. Open the [web page](https://raajnadar.github.io/resistor-color-calculator).
2. Select the color of each band in the correct sequence.
3. Read the resistance value and the tolerance.

The application also draws the resistor with the colors that you select. Use the button in the header to change between the dark theme and the light theme.

## Features

- A calculation for 4 band resistors.
- A drawn resistor that shows the selected color bands.
- A dark theme and a light theme.
- A responsive layout for a mobile device and a desktop.

## Technology

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [MUI](https://mui.com/) 7
- [Vite](https://vite.dev/)
- ESLint

## Development

You need Node.js 22 or a later version.

```bash
npm install     # install the dependencies
npm start       # start the development server
npm run lint    # run ESLint
npm run tsc     # run the TypeScript type check
npm run build   # build the production files into dist
npm run preview # serve the production build
```

## Deployment

GitHub Actions builds and deploys the application to GitHub Pages on each push to `master`. The `Deploy` workflow does the lint, the type check, and the build, and then it publishes the `dist` directory. You can also start the workflow by hand from the Actions tab.

## Bug Report

Did you find a bug? Please raise an issue on GitHub, or contribute a fix to this repository.

## How to contribute

Read the contribution guidelines [here](https://github.com/raajnadar/resistor-color-calculator/blob/master/CONTRIBUTING.md) before you make a pull request.

## License

This project uses the [MIT](https://github.com/raajnadar/resistor-color-calculator/blob/master/LICENSE.md) license.

## Author

Project Lead - [Rajendran Nadar](https://raajnadar.in)
