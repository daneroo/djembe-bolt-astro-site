# Catherine Veilleux Website

This project is built with Astro and Tailwind CSS.

## Getting Started

1. Install dependencies:

```sh
npm install
```

2. Run the development server:

```sh
npm run dev
```

## Adding Images

Before running the project, you need to add the following images to the `public` directory:

1. `logo.png`: The logo image for the website.
2. `banner.jpeg`: The hero banner image (recommended size: 1900x694 pixels).

To add these images:

1. Locate your image files on your local machine.
2. In the project structure, navigate to the `public` directory.
3. Copy your `logo.png` and `banner.jpeg` files into the `public` directory.

After adding these images, the website should display correctly with your actual logo and banner.

## Customizing Content

To customize the content of the website, you can modify the following files:

- `src/i18n/ui.ts`: Contains all the text content in both French and English.
- `src/components/*.astro`: Individual components for each section of the website.
- `src/pages/[lang]/*.astro`: Page layouts for different routes.

## Building for Production

To build the project for production, run:

```sh
npm run build
```

This will generate a production-ready version of your website in the `dist` directory.