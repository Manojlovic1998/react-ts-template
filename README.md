## 🌟 React-TS-Template Documentation 🌟

### Introduction

Welcome to the React-TS-Template documentation! This template is designed to streamline your React projects' setup process while incorporating useful features and tools for a smooth and efficient development experience. By utilizing the Remote Development extension pack in Visual Studio Code (VS Code) and configuring a custom `devcontainer.json`, we provide a consistent development environment that you can easily share with your team.

### `devcontainer.json`

The `devcontainer.json` file serves as the configuration file for the development container. It defines various aspects of the development environment, including the container name, Dockerfile, extensions, workspace mounts, and more. Let's explore the key configurations:

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

#### Getting Started

1. Ensure you have the Remote Development extension pack installed in VS Code.
2. Fork or clone this template repository to start your new project.
3. Customize the `devcontainer.json`, `init.sh`, and `Dockerfile` files to suit your project's specific requirements.
4. Open the cloned repository in VS Code.
5. When prompted, click on "Reopen in Container" to start your development environment in the container.
6. That's it! You're now set up with a powerful and flexible development environment for your React projects.

Happy coding! 🚀💻
