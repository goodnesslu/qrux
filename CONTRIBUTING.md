# Contributing to qrux

First off, thank you for considering contributing to `qrux`! It's people like you that make open-source such a great community.

## Where to start

If you're looking for ways to contribute, you can start by looking at open issues or by proposing new features in our [GitHub Discussions](https://github.com/goodnesslu/qrux/discussions).

## Development Workflow

### Requirements

Before getting started, ensure your system has the following tools:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Getting started

1. **Fork and clone the repository:**

   ```sh
   git clone https://github.com/goodnesslu/qrux.git
   cd qrux
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Link your local copy:** This is the most important step. It will create a global `qrux` command on your system that points to your local source code.
   ```sh
   npm link
   ```
4. **Start the development process:** To automatically recompile the TypeScript code whenever you make a change, run:

   ```sh
   npm run dev
   ```

Now, you can open another terminal window and run the `qrux` command from anywhere to test your changes live.

### Submitting Your Changes

When you're ready to submit your contribution, please follow these steps.

#### Ask First for Major Features

To save everyone time and effort, please **open an issue or start a discussion** to propose any significant new feature or change. This allows us to align on the direction and API before development work begins.

We don't want you to spend a lot of time on something that we might not be able to merge.

#### Coding Standards

Our code formatting rules are defined in Prettier. You can check your code against these standards by running:

```sh
npm run lint
```

To automatically fix any style violations, you can run:
Generated sh
npm run format
Use code with caution.
Sh
Running Tests
Please ensure that all tests are passing when submitting a pull request. If you're adding new features, always include tests.
You can run the full test suite using:
Generated sh
npm test
Use code with caution.
Sh
Pull Request Process
Ensure the pull request title and description clearly explain the changes you made and why.
Include a "Test Plan" section that outlines how you tested your contributions. We do not accept contributions without tests.
Ensure all tests are passing (npm test).
Generated code

---

### 3. Issue Template: `bug-report.md`

This file should be placed in `.github/ISSUE_TEMPLATES/bug_report.md`.

```yaml
---
name: Bug Report
about: If something isn't working as expected in qrux, create a bug report.
title: ""
labels: "bug"
assignees: ""

---
<!-- Please provide all of the information requested below. Without it, we may not be able to help and your issue may be closed. -->

**What version of qrux are you using?**
(e.g., v1.0.0)

**What version of Node.js are you using?**
(e.g., v20.10.0)

**What operating system are you using?**
(e.g., macOS, Windows, Linux)

**Steps to Reproduce**

Please provide a public GitHub repo or a clear, step-by-step list of commands that includes a minimal reproduction of the bug. A reproduction is **required** for us to investigate.

1. Run `qrux create ...` with these options...
2. Run `qrux install ...`
3. See error...

**Describe your issue**

Describe the problem you're seeing, any important steps to reproduce it, and what behavior you expected instead. If applicable, please include screenshots or full error logs from the terminal.
```
