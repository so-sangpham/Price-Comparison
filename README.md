# Price Comparison Website

A modern, responsive price comparison website built with **Angular 17** and **PrimeNG**, inspired by Websosanh. This application allows users to compare prices across multiple sellers for various products.

## Features

### ✨ Core Features

- **Product Grid Layout**: Browse products in a clean, card-based grid
- **Price Comparison**: View prices from multiple sellers in an accordion interface
- **Detailed Product Pages**: Navigate to detailed product information with full seller listings
- **Responsive Design**: Fully responsive on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations and gradients
- **Star Ratings**: Product and seller ratings with review counts
- **Availability Status**: Real-time stock availability for each seller

## Tech Stack

- **Framework**: Angular 17 (Standalone Components)
- **UI Components**: PrimeNG
- **Icons**: PrimeIcons
- **Styling**: SCSS
- **Routing**: Angular Router
- **State Management**: RxJS Observables
- **Build Tool**: Angular CLI

## Getting Started

### Prerequisites

- Node.js v20.19+ or v22.12+ (Required for Angular 17)
- npm v8.0+

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd price-comparison
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open in browser**:
   Navigate to `http://localhost:4200/`

## Project Structure

```
src/app/
├── components/
│   └── product-card/        # Product card component
├── pages/
│   ├── product-list/        # Main listing page
│   └── product-detail/      # Product detail page
├── services/
│   └── product.service.ts   # Product data service
├── models/
│   └── product.model.ts     # TypeScript interfaces
└── ...
```

## Usage

### Home Page (Product List)
- Grid of products showing name, image, lowest price, and seller count
- Click "Compare Prices" to see prices from all sellers in a modal
- Click "View Details" to navigate to the product detail page

### Price Comparison Modal
- Shows an accordion with each seller
- Displays seller name, logo, price, availability, and rating
- "Go to Store" button for each seller

### Product Detail Page
- Full product information with specifications
- Expandable accordion for each seller
- Price range and total seller count

## Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm run watch` - Watch mode build
- `npm test` - Run unit tests

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## License

MIT License

---

**Build Status**: ✅ Ready for development

**Note**: Requires Node.js v20.19 or later due to Angular 17 requirements.

For full documentation, see the components and their respective README sections.
