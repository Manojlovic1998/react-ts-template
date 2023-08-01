# 🌟 React-TS-Template Documentation 🌟 [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

## Introduction

Welcome to the React-TS-Template documentation! This template is designed to streamline your React projects' setup process while incorporating useful features and tools for a smooth and efficient development experience. By utilizing the Remote Development extension pack in Visual Studio Code (VS Code) and configuring a custom devcontainer.json, I provide a consistent development environment that you can easily share with your team.

## Getting Started

1. Fork or clone this template repository to start your new project.
2. Customize the `devcontainer.json`, `init.sh`, and `Dockerfile` files to suit your project's specific requirements.
3. Open the cloned repository in VS Code.
4. When prompted, click on "Reopen in Container" to start your development environment in the container.
5. That's it! You're now set up with a powerful and flexible development environment for your React projects.

Happy coding! 🚀💻

## Customizing the Development Environment

### `devcontainer.json` Configuration

The `devcontainer.json` file serves as the configuration file for the development container. It defines various aspects of the development environment. Let's explore the key configurations and how you can change them:

#### Container Name

```json
"name": "project-name",
```

Change "project-name" to the desired name for your container.

#### Dockerfile and Build Context

```json
{
  "build": {
    "dockerfile": "./Dockerfile",
    "target": "dev",
    "context": "../"
  }
}
```

Specify the path to your Dockerfile, and adjust the "context" if needed.

#### Extensions

```json
{
  "customizations": {
    "vscode": {
      "extensions": [
        "esbenp.prettier-vscode",
        "dbaeumer.vscode-eslint",
        "streetsidesoftware.code-spell-checker",
        "tombonnike.vscode-status-bar-format-toggle"
      ]
    }
  }
}
```

You can specify additional VS Code extensions as needed to enhance your development experience.

#### Forwarded Ports

```json
{
  "forwardPorts": [5173]
}
```

Add any required ports (e.g., for development servers) that should be available locally from the container.

#### Workspace Mount

```json
{
  "workspaceMount": "source=${localWorkspaceFolder},target=/home/node/project-name,type=bind"
}
```

Adjust the path to your project folder (`/home/node/project-name`) to mount your source code into the container.

#### Workspace Folder

```json
{
  "workspaceFolder": "/home/node/project-name"
}
```

Set the path to your project folder within the container.

#### Post-Create Command

```json
{
  "postCreateCommand": ". .devcontainer/init.sh"
}
```

Specify any commands to run after the container is created. In this template, I execute `init.sh` to set up additional configurations.

### `init.sh` Script

The `init.sh` script, executed as a post-create command, sets up additional tools and configurations in the development container. It installs dependencies, clones the `img-optimize` project repository, creates an alias for the image optimization tool, and sources the `.bashrc` file to enable the alias.

### `Dockerfile`

The Dockerfile defines the development environment for your project. It sets the default shell to Bash, installs essential utilities and tools (e.g., `git`, `jpegoptim`, `optipng`, `webp`, and `imagemagick`), and specifies the development environment variables.

## 🚀 Dependabot Configuration 🚀

### What is Dependabot?

Dependabot is a powerful tool that automatically checks for outdated dependencies in your project and creates pull requests to update them to the latest versions. It helps ensure that your project stays up-to-date with the latest security patches and features.

### How to Use Dependabot?

To get started with Dependabot version updates, you'll find a file named `.github/dependabot.yml` in your React-TS-Template repository. This file contains the configuration for Dependabot, specifying which package ecosystems to update and where the package manifests are located.

### Customizing Dependabot Settings

```yaml
# Enable version updates for npm

- package-ecosystem: "npm"
  # Look for `package.json` and `lock` files in the `root` directory
  directory: "/"
  # Check the npm registry for updates every month
  schedule:
  interval: "monthly"
  timezone: "Europe/Belgrade"
  # Raise pull requests for npm dependencies version updates
  # against the `develop` branch.
  target-branch: "develop"
  pull-request-branch-name:
  # Separate sections of the branch name with a hyphen
  separator: "-"
  commit-message:
  # Prefix all commit messages with...
  prefix: "npm prod"
  prefix-development: "npm dev"
  include: "scope"
  # Raise all npm pull requests with custom labels
  labels:
  - "npm dependencies"

# Enable version updates for Docker

- package-ecosystem: "docker"
  # Look for a `Dockerfile` in the `.devcontainer` directory found in `root` of the project.
  directory: "/.devcontainer"
  # Check for updates once a month
  schedule:
  interval: "monthly"
  timezone: "Europe/Bel

grade"
  # Raise pull requests for Docker version updates
  # against the `develop` branch.
  target-branch: "develop"
  pull-request-branch-name:
  # Separate sections of the branch name with a hyphen
  separator: "-"
  commit-message:
  # Prefix all commit messages with "[docker] " (no colon, but a trailing whitespace)
  prefix: "[docker] "
  # Use custom labels on pull requests for Docker version updates
  labels:
  - "Docker dependencies"

# Maintain dependencies for GitHub Actions

- package-ecosystem: "github-actions"
  directory: "/" # Check for updates once a month
  schedule:
  interval: "monthly"
  timezone: "Europe/Belgrade" # Raise pull requests for Github Actions dep. version updates # against the `develop` branch.
  target-branch: "develop"
  pull-request-branch-name: # Separate sections of the branch name with a hyphen
  separator: "-"
  commit-message: # Prefix all commit messages with "GitHub Actions"
  prefix: "GitHub Actions" # Use custom labels on pull requests for GitHub Actions dep. version updates
  labels: - "GitHub Actions dependencies"
```

You can customize the Dependabot configuration to better suit your project's needs:

- **Package Ecosystems**: If your project uses other package ecosystems, you can add more entries to the `updates` list for each ecosystem. Refer to the [documentation](https://docs.github.com/github/administering-a-repository/configuration-options-for-dependency-updates) for the complete list of supported ecosystems.
- **Update Schedule**: You can adjust the `interval` in the `schedule` section to control how often Dependabot checks for updates. For example, set `interval` to "`daily"` for more frequent checks.
- **Branch Names and Labels**: In the `target-branch` and `pull-request-branch-name` sections, customize the branch names for target branches and pull request branches as per your branch naming conventions. Similarly, modify the `labels` to your preferred ones in the labels section.
- **Commit Message Prefix**: Change the `prefix` value in the `commit-message` section to specify a custom prefix for commit messages. The `prefix-development` option allows different prefixes for development dependency updates.
- **Package Manifest Location**: Update the `directory` value to point to the correct location of package manifests for each package ecosystem.

### Activating Dependabot

Once you've saved the `.github/dependabot.yml` file in your repository, Dependabot will automatically start monitoring for outdated dependencies according to the specified schedule. It will create pull requests on the develop branch whenever updates are available. Review the pull requests, test the updates, and merge them to keep your project up-to-date with the latest dependencies.

#### **Important Note**:

Ensure that you have a separate develop branch and keep it up-to-date with the latest changes from your main branch (master or main). Dependabot will create pull requests for dependency updates against the develop branch. Once you have validated the updates and tested your application, you can merge these pull requests into your main branch to keep your project updated.

That's it! You now have Dependabot configured to manage version updates for npm, Docker, and GitHub Actions dependencies in your React-TS-Template project.

## Vite Tool Support

I've added support for React projects using Vite, a fast and lightweight development tool for building modern web applications. Vite's blazing fast development server and instant hot module replacement make it a perfect fit for your React projects.

With Vite support in this template, you can leverage the following benefits:

- Lightning-fast development: Vite's server starts up quickly, and hot module replacement ensures instant updates without a full reload, resulting in an incredibly smooth development experience.
- Out-of-the-box ES6 module support: Vite natively supports ES6 modules, enhancing code modularity and performance.
- Optimized builds: Vite's build process generates highly optimized production builds for your React application, ensuring minimal bundle sizes and faster load times.
- Plugin ecosystem: Vite offers an extensive plugin ecosystem to extend its functionality and customize your development environment.

To get started with Vite in your React project, simply install it using npm or yarn and run the development server using the `vite` command. I've already set up the necessary configuration and scripts in this template, so you can start building your React app with Vite right away.

## ESLint Integration

I've integrated ESLint into the React-TS-Template to help you maintain a consistent code style and catch potential errors and issues early in the development process. ESLint is a widely used and powerful JavaScript linter that analyzes your code and enforces a set of rules to ensure code quality and readability.

### ESLint Configuration

The ESLint configuration is located in the `.eslintrc.cjs` file in the root directory of your project. Here's an overview of the key aspects of the configuration:

- **Environment**: The ESLint `env` option specifies the runtime environments in which your code will run. In this template, I've set `browser` and `es2020` as the environments.
- **Extends**: The `extends` option allows us to extend existing ESLint configurations. I've extended the following configurations in this template:

  - `eslint:recommended`: Includes the recommended ESLint rules.
  - `plugin:react-hooks/recommended`: Includes recommended rules for React hooks.

  - `plugin:@typescript-eslint/recommended`: Includes recommended TypeScript-specific rules.
  - `plugin:@typescript-eslint/recommended-requiring-type-checking`: Includes additional TypeScript rules that require type-checking.

- **Parser and Parser Options**: The `parser` option specifies the parser to use for analyzing the code. In this template, I use `@typescript-eslint/parser` to enable TypeScript support. The `parserOptions` provide additional configuration for the parser, such as `ecmaVersion`, `sourceType`, and `project`. I use `"latest"` for `ecmaVersion`, `"module"` for `sourceType`, and specify the paths to the TypeScript configuration files (`tsconfig.json` and `tsconfig.node.json`) using the `project` option.
- **Plugins**: I've added the `react-refresh` and `@typescript-eslint` plugins to the configuration. The `react-refresh` plugin is used to enable React Fast Refresh, providing instantaneous updates during development for components. The `@typescript-eslint` plugin adds support for ESLint rules specific to TypeScript.

- **Rules**: I've included specific ESLint rules to enhance the development experience and code quality. For example, the `"react-refresh/only-export-components"` rule warns you if you're not using React Fast Refresh with only component exports.
- **Ignore Patterns**: The `ignorePatterns` option specifies the patterns of files and directories that ESLint should ignore when linting. In this template, I've excluded the `dist`, `.eslintrc.cjs`, `.devcontainer`, `.github`, and `.husky` directories from linting.

### TypeScript Configuration

The React-TS-Template comes with two TypeScript configuration files to support different scenarios:

#### tsconfig.json

The `tsconfig.json` file in the root directory is the main TypeScript configuration. Here are the key options:

- **Compiler Options**: This section includes various compiler options to control how TypeScript handles your code. For example, `target` specifies the ECMAScript version to target (ES2020 in this template). I've enabled `strict` mode to catch more potential issues at compile time, and other options such as `noImplicitAny`, `noUnusedLocals`, and `noUnusedParameters` are set to true to enforce stricter type checking.

- **Module Resolution**: I've set `moduleResolution` to `"bundler"` to support module resolution during bundling (e.g., with Vite).

#### tsconfig.node.json

The `tsconfig.node.json` file is a supplementary TypeScript configuration used for Node.js specific scenarios. Here are the key options:

- **Compiler Options**: I've set `composite` to true to enable composite projects, which allows us to build and reference TypeScript projects as a group. This enables better build performance and faster incremental compilation.
- **Module Resolution**: The `moduleResolution` is set to `"bundler"` to use the bundler during module resolution.

### Using ESLint and TypeScript Configuration

With ESLint and TypeScript integrated into the template, you can take advantage of their features to maintain code quality and ensure robustness in your React projects. As you develop your application, ESLint will provide real-time feedback and suggestions based on the rules defined in the configuration. TypeScript will also check the types in your code and ensure type safety.

Feel free to customize the ESLint and TypeScript configurations further to fit your specific project requirements. You can adjust the ESLint rules, enable additional plugins, or modify the TypeScript compiler options according to your needs.

## Git Hooks with Husky

Git hooks are powerful automation tools that can enhance your development workflow by automating tasks such as linting, formatting, and testing before commits and pushes. I've integrated Git hooks into the React-TS-Template using the popular Husky library, allowing you to configure pre-commit and pre-push hooks easily.

### Configuration

The configuration for Git hooks and Husky is managed through the `package.json` file in the root directory of your project. Here's an overview of the key scripts and settings related to Git hooks and Husky:

- **`prepare` Script**: The prepare script ensures that Husky is properly installed and set up. It runs `husky install`, which sets up the hooks to be triggered when certain Git actions (e.g., commit or push) are performed.

- **`lint-staged` Configuration**: The `lint-staged` section in `package.json` defines the tasks to be executed on staged files (i.e., files that are about to be committed). In this template, I have configured `lint-staged` to run `prettier` and `eslint` on TypeScript and TSX files. Specifically:

  - For all files (`**/*`), I run `prettier` with the `--write`, `--cache`, and `--ignore-unknown` options to automatically format the code.
  - For TypeScript and TSX files (`*.{ts,tsx}`), I run `eslint` with the `--cache`, `--ext ts,tsx`, `--report-unused-disable-directives`, and `--max-warnings 0` options to perform linting with zero warnings.

- Husky Configuration: Husky is configured using the `npx husky` command. I've set up one hook:
  - pre-commit: This hook is triggered before every commit. It runs the `lint-staged` task, ensuring that the staged files meet the defined code formatting and linting standards. If any issues are found, the commit will be prevented, prompting you to fix the issues before proceeding.

### Using Git Hooks with Husky

By integrating Git hooks with Husky, you ensure that your codebase adheres to the defined code formatting and linting rules before committing and pushing changes. This helps maintain code consistency and reduces the chances of introducing bugs and issues into the repository.

As you make changes to your code and attempt to commit or push, Husky will automatically trigger the specified hooks. If any formatting or linting errors are detected, Husky will prevent the commit or push, prompting you to fix the issues. Once the code meets the defined standards, you can proceed with the commit or push.

Feel free to modify the `lint-staged` configuration or add additional hooks to the `husky` section according to your project's needs. You can include additional checks, tests, or even pre-commit messages to enhance the automation and maintain the codebase's quality.

## Technologies Used

- [Docker](https://www.docker.com/)
- [Remote Development](https://code.visualstudio.com/docs/remote/remote-overview)
- [Prettier](https://prettier.io/docs/en/index.html)
- [ESLint](https://eslint.org/)
- [Vite](https://vitejs.dev/)
- [Dependabot](https://github.com/dependabot)
- [Github Actions](https://docs.github.com/en/actions)
- [Husky](https://typicode.github.io/husky/)
- [Lint-staged](https://github.com/okonet/lint-staged)
