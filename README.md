# ATHENA IQ

This project is a React application built with Vite and styled using Tailwind CSS.


## Prerequisites

Before you begin, ensure you have the following installed:
* **Node.js** (Version 18 or higher recommended)
* **npm** (Node Package Manager)

## 1. Installation
   To set up the project locally, first clone the repository and install the dependencies defined in `package.json`:
```bash
   npm install
   ```
## 2. Development
   To run the application in development mode with hot module replacement (HMR):

```bash
   npm run dev
   ```

This will start a local server (usually at http://localhost:5173) and open the app in your browser.

## 3. Build Process
   This project uses Vite for bundling and building the application for production. The build process compiles your React code, processes Tailwind CSS, and optimizes assets.
   Running the Build
   To generate a production-ready build, run the following command in your terminal:
```bash
   npm run build
   ```


What Happens During the Build?

      Vite Bundling: The vite build command (defined in package.json) triggers the build process. It uses the configuration found in vite.config.js to bundle your React application.

      CSS Processing: Tailwind CSS scans your source files (./src/**/*.{js,ts,jsx,tsx}) as configured in tailwind.config.js to generate a minified CSS file containing only the styles used in your app.

      Output: The compiled assets are output to the dist/ folder. This folder will contain:

      index.html: The entry point for your application.

      assets/: A directory containing hashed JavaScript and CSS files (e.g., index-B9wWqn7K.js, index-_ERuoHUx.css) for optimal caching.


Previewing the Build
After building, you can preview the production build locally to ensure everything is working as expected before deploying:

```bash
   npm run preview
   ```

## 4. Code Quality
   To check the code for errors using ESLint

```bash
   npm run lint
   ```
## 5. Project Structure
   
      src/: Contains the source code (components, pages, assets).

      public/: Static assets like vite.svg.

      dist/: The output directory for the production build (created after running npm run build).

      vite.config.js: Configuration for the Vite build tool.

      tailwind.config.js: Configuration for Tailwind CSS.

