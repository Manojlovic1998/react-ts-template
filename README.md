# 🌟 React-TS-Template Documentation 🌟 [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

### Introduction

Welcome to the React-TS-Template documentation! This template is designed to streamline your React projects' setup process while incorporating useful features and tools for a smooth and efficient development experience. By utilizing the Remote Development extension pack in Visual Studio Code (VS Code) and configuring a custom devcontainer.json, I provide a consistent development environment that you can easily share with your team.

### Getting Started

1. Fork or clone this template repository to start your new project.
2. Customize the `devcontainer.json`, `init.sh`, and `Dockerfile` files to suit your project's specific requirements.
3. Open the cloned repository in VS Code.
4. When prompted, click on "Reopen in Container" to start your development environment in the container.
5. That's it! You're now set up with a powerful and flexible development environment for your React projects.

Happy coding! 🚀💻

### Customizing the Development Environment

#### `devcontainer.json` Configuration

The `devcontainer.json` file serves as the configuration file for the development container. It defines various aspects of the development environment. Let's explore the key configurations and how you can change them:

##### Container Name

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
      "extensions": ["astro-build.astro-vscode", "esbenp.prettier-vscode"]
    }
  }
}
```

You can specify additional VS Code extensions as needed to enhance your development experience.

#### Forwarded Ports

```json
{
  "forwardPorts": [3000]
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

Specify any commands to run after the container is created. In this template, we execute `init.sh` to set up additional configurations.

#### `init.sh` Script

The `init.sh` script, executed as a post-create command, sets up additional tools and configurations in the development container. It installs dependencies, clones the `img-optimize` project repository, creates an alias for the image optimization tool, and sources the `.bashrc` file to enable the alias.

#### `Dockerfile`

The Dockerfile defines the development environment for your project. It sets the default shell to Bash, installs essential utilities and tools (e.g., `git`, `jpegoptim`, `optipng`, `webp`, and `imagemagick`), and specifies the development environment variables.

### 🚀 Dependabot Configuration 🚀

#### What is Dependabot?

Dependabot is a powerful tool that automatically checks for outdated dependencies in your project and creates pull requests to update them to the latest versions. It helps ensure that your project stays up-to-date with the latest security patches and features.

#### How to Use Dependabot?

To get started with Dependabot version updates, you'll find a file named ``.github/dependabot.yml` in your React-TS-Template repository. This file contains the configuration for Dependabot, specifying which package ecosystems to update and where the package manifests are located.

#### Customizing Dependabot Settings

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
  timezone: "Europe/Belgrade"
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

#### Activating Dependabot

Once you've saved the `.github/dependabot.yml` file in your repository, Dependabot will automatically start monitoring for outdated dependencies according to the specified schedule. It will create pull requests on the develop branch whenever updates are available. Review the pull requests, test the updates, and merge them to keep your project up-to-date with the latest dependencies.

#### **Important Note**:

Ensure that you have a separate develop branch and keep it up-to-date with the latest changes from your main branch (master or main). Dependabot will create pull requests for dependency updates against the develop branch. Once you have validated the updates and tested your application, you can merge these pull requests into your main branch to keep your project updated.

That's it! You now have Dependabot configured to manage version updates for npm, Docker, and GitHub Actions dependencies in your React-TS-Template project.

Happy updating! 🚀💻

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
