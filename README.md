# Terraform Course - Class 4 Slide Deck

This repository contains a professional slide deck for the **Terraform Course Class 4: Configuration**. The application is built with React, TypeScript, and Tailwind CSS, featuring a professional dark theme and micro-UX enhancements.

## ✨ Features

- **Interactive Slides**: 12 modules covering resources, data sources, variables, outputs, and best practices.
- **Micro-UX enhancement**: One-click "Copy to Clipboard" for all Terraform code blocks with visual feedback.
- **Accessibility**:
  - Full keyboard navigation (Left/Right Arrows or Space/Shift+Space).
  - ARIA-compliant interactive elements.
  - Responsive design for various screen sizes.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22 or later)
- [pnpm](https://pnpm.io/) (v10 or later)

### Local Development

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start the development server:**
   ```bash
   pnpm dev
   ```

3. **Open the application:**
   Navigate to `http://localhost:5173` in your browser.

### Building for Production

To create a production-ready build:
```bash
pnpm build
```
The artifacts will be generated in the `dist/` directory.

### Running Tests

Execute the unit test suite with Vitest:
```bash
pnpm test
```

## 🐳 Docker

You can also run the slide deck using Docker.

### Build the Image

```bash
docker build -t terraform-slides .
```

### Run the Container

```bash
docker run -p 8080:80 terraform-slides
```

After running, the application will be available at `http://localhost:8080`.

## 🎨 Design Tokens

- **Background**: `#191919`
- **Cards**: `#262626`
- **Accent (Indigo)**: `#6366F1`
- **Typography**: MiSans / Liter / Sans-serif
