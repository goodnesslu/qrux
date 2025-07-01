![](https://goodnesslu/qrux/main/.github/logo-dark.svg#gh-dark-mode-only)
![](https://goodnesslu/qrux/main/.github/logo-light.svg#gh-light-mode-only)

![NPM Version](https://img.shields.io/npm/v/qrux)
![License](https://img.shields.io/github/license/goodnesslu/qrux)
![Downloads](https://img.shields.io/npm/dt/qrux)

> A lightning-fast command-line tool for scaffolding new projects and managing packages intelligently.

`qrux` is the developer's best friend for the terminal. It eliminates the repetitive, tedious tasks of starting new projects and searching for package installation commands. Built for speed and an exceptional developer experience, `qrux` helps you stay focused on what matters: writing code.

---

## Key Features

- **Interactive Project Scaffolding:** Run `qrux create` and be guided through a professional setup for modern tech stacks. No more cloning boilerplate.
- **Intelligent Package Installer:** Use `qrux install` to find the exact package you need, even with typos.
- **Interactive Version Selection:** Never accidentally install the wrong major version again. `qrux` lets you pick the exact version you want to install from a list of all available versions.
- **Blazing Fast:** Written in TypeScript and optimized for a near-instant startup time.

## Installation

To get started, install `qrux` globally using npm:

```bash
npm install -g qrux
```

## Usage

### Creating a New Project

Simply run the `create` command. `qrux` will handle the rest.

```bash
qrux create
```

This will launch an interactive session:

```
? What is the name of your project? › my-awesome-app
? Select a base template: › React + Vite (TypeScript)
? Add Tailwind CSS? › Yes
? Initialize a Git repository? › Yes

🚀 Initializing project...
...
```

### Installing a Package

Tired of searching for the exact npm package name? Just tell `qrux` what you're looking for.

```bash
qrux install react-icons
```

If you make a typo, `qrux` will try to find what you meant:

```bash
qrux install reacticons
> Did you mean react-icons? (Y/n)
```

After finding the package, `qrux` will prompt you to select a version, ensuring you never have unexpected breaking changes.

## Contributing

Contributions are welcome! If you have ideas for new templates, features, or bug fixes, please open an issue or submit a pull request. Check out our `CONTRIBUTING.md` for more details.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
