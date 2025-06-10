# RealEstate

## Overview

RealEstate is a modern, responsive web application designed to showcase real estate properties and services. Built with React and Vite, it offers a smooth and interactive user experience with animations, sliders, and accessible UI components.

## Features

- Property listings with detailed views
- Interactive sliders for featured properties
- Animated counters and transitions using Framer Motion and React CountUp
- Accessible accordion components for FAQs or property details
- Responsive design for desktop and mobile devices
- Iconography using React Icons for enhanced UI

## Technologies Used

- React 18
- Vite (build tool and development server)
- Framer Motion (animations)
- React Accessible Accordion (accessible UI components)
- React CountUp (animated number counters)
- React Icons (icon library)
- Swiper (touch sliders)

## Project Structure

- `public/` - Contains static assets such as images and icons used throughout the app.
- `src/` - Main source code directory
  - `components/` - Reusable React components organized by feature (e.g., Header, Footer, Hero, Contact, Residencies, Companies, Value, GetStarted)
  - `utils/` - Utility functions and helpers
  - `App.jsx` - Root React component
  - `main.jsx` - Application entry point for rendering

## Installation

Ensure you have [Node.js](https://nodejs.org/) installed.

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Real-Estate
   ```

2. Install dependencies using Yarn:
   ```bash
   yarn install
   ```

## Running the Application

Start the development server with hot module replacement:

```bash
yarn dev
```

Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal) to view the app.

## Building for Production

To create an optimized production build, run:

```bash
yarn build
```

The build output will be in the `dist` directory.

## Previewing the Production Build

You can preview the production build locally with:

```bash
yarn preview
```

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests for any improvements or bug fixes.

## License

This project is private and not licensed for public use.
