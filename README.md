# 🧩 Git_Finder

> A React app built to search and display GitHub profiles using the [GitHub API](https://developer.github.com/v3/).  
> This project is developed with **TypeScript**, **Context API**, and **React Hooks** for a smooth and interactive user experience.

**Live Demo**: [Git Finder on Netlify](https://rekcoob-github.netlify.app)

## ✨ Features

- **View GitHub user details**: Includes repositories,stars, forges, followers, and more.
- **Light and Dark mode**: Toggle between light and dark themes for a personalized experience.
- **Three Color Scheme**: Choose from three predefined color schemes to enhance your visual preference.
- **Responsive UI**: Works seamlessly on both desktop and mobile devices.
- **Real-time Search**: As you type, the app displays user results from GitHub instantly.

## ⚡ Quick Start

Follow these commands to run and build the project:

```bash
# Install Dependencies
npm install

# Run Development Server
npm dev

# Build for Production
npm build

# Start Production Server
npm start
```

## GitHub API Connection Setup

To connect the app to GitHub's API, you'll need to add your GitHub credentials. Follow these steps:

1. Create a GitHub OAuth application [here](https://github.com/settings/developers) to obtain your `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`.
2. Create a `.env` file in the root of the project and add your credentials:

```ini
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
```

---

Built with 💙 by [b0ock3r](https://rekcoob.github.io)
