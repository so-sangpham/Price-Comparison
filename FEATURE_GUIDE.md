# Price Comparison Website - Feature Guide

## Application Overview

A price comparison application similar to Websosanh that helps users find the best deals by comparing prices across multiple sellers.

---

## 🏠 Home Page (Product Listing)

### What You'll See
```
┌─────────────────────────────────────────────────┐
│  🛍️ PriceCompare          [Home]                │
├─────────────────────────────────────────────────┤
│                                                   │
│      Price Comparison                            │
│   Compare prices across multiple sellers        │
│                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌────────┐ │
│  │              │  │              │  │        │ │
│  │   iPhone     │  │   Samsung    │  │  Sony  │ │
│  │   15 Pro     │  │   Galaxy     │  │WH-1000 │ │
│  │              │  │   S24        │  │XM5     │ │
│  │ ⭐⭐⭐⭐⭐   │  │ ⭐⭐⭐⭐⭐  │  │⭐⭐⭐⭐│ │
│  │ (2541 rev)   │  │ (1890 rev)   │  │(5234)  │ │
│  │              │  │              │  │        │ │
│  │ 💰 $1,099.00 │  │ 💰 $799.00   │  │$349.00 │ │
│  │ 12 Sellers   │  │ 15 Sellers   │  │10 Sell │ │
│  │              │  │              │  │        │ │
│  │ [Compare]    │  │ [Compare]    │  │[Compar │ │
│  │ [Details]    │  │ [Details]    │  │[Detai] │ │
│  │              │  │              │  │        │ │
│  └──────────────┘  └──────────────┘  └────────┘ │
│                                                   │
│  [More Products...]                             │
│                                                   │
├─────────────────────────────────────────────────┤
│ © 2025 PriceCompare. All rights reserved        │
└─────────────────────────────────────────────────┘
```

### Features
- **Product Cards**: Each card displays:
  - High-quality product image
  - Product name
  - Star rating (1-5 stars)
  - Number of reviews
  - Lowest available price (highlighted in green)
  - Number of sellers
  - Category badge

- **Action Buttons**:
  - **Compare Prices**: Opens modal to view all sellers
  - **View Details**: Navigate to detailed product page

- **Responsive Grid**: 
  - 4 columns on desktop
  - 3 columns on tablets
  - 2 columns on mobile
  - 1 column on small phones

---

## 💰 Price Comparison Modal

### Activation
Click "Compare Prices" button on any product card

### Modal View
```
┌─────────────────────────────────────────────────┐
│ ✕ iPhone 15 Pro Max                            │
├─────────────────────────────────────────────────┤
│                                                   │
│  ┌─────────────┐  Description of iPhone 15    │
│  │             │  Pro Max with specs           │
│  │   iPhone    │  Category: Electronics        │
│  │   Image     │  Rating: ⭐⭐⭐⭐⭐ (2541)    │
│  │             │                               │
│  └─────────────┘                               │
│                                                   │
│  Available from 12 Sellers                     │
│                                                   │
│  ▼ Amazon - $1,099.00 - In Stock               │
│    ┌──────────────────────────────────────┐   │
│    │ [Amazon Logo]  Amazon                │   │
│    │ ⭐ 4.8 (1200 reviews)                │   │
│    │ Status: ✅ In Stock                  │   │
│    │                          Price: $1,099│   │
│    │         [Go to Store →]              │   │
│    └──────────────────────────────────────┘   │
│                                                   │
│  ▼ Apple Store - $1,099.00 - In Stock          │
│    ┌──────────────────────────────────────┐   │
│    │ [Apple Logo]  Apple Store            │   │
│    │ ⭐ 4.9 (451 reviews)                 │   │
│    │ Status: ✅ In Stock                  │   │
│    │                          Price: $1,099│   │
│    │         [Go to Store →]              │   │
│    └──────────────────────────────────────┘   │
│                                                   │
│  ▼ Best Buy - $1,120.00 - In Stock             │
│    ┌──────────────────────────────────────┐   │
│    │ [BestBuy Logo]  Best Buy              │   │
│    │ ⭐ 4.7 (890 reviews)                 │   │
│    │ Status: ✅ In Stock                  │   │
│    │                          Price: $1,120│   │
│    │         [Go to Store →]              │   │
│    └──────────────────────────────────────┘   │
│                                                   │
└─────────────────────────────────────────────────┘
```

### Features
- **Overlay Background**: Semi-transparent, clickable to close
- **Expandable Accordion**: Click seller name to expand/collapse
- **Seller Information**:
  - Seller logo
  - Seller name
  - Price prominently displayed (large green text)
  - Availability status (color-coded badges)
  - Seller rating with review count
  - "Go to Store" button linking to seller's website

- **Availability Color Coding**:
  - 🟢 Green: "In Stock"
  - 🟡 Yellow: "Limited Stock"
  - 🔴 Red: "Out of Stock"

---

## 📄 Product Detail Page

### How to Access
Click "View Details" button on product card or navigate from URL `/product/:id`

### Page Layout
```
┌─────────────────────────────────────────────────┐
│  [← Back to Products]  🛍️ PriceCompare          │
├─────────────────────────────────────────────────┤
│                                                   │
│  ┌──────────────┐    [Electronics]              │
│  │              │                                │
│  │              │    iPhone 15 Pro Max         │
│  │   Product    │    ⭐⭐⭐⭐⭐ 4.8/5           │
│  │   Image      │    (2,541 reviews)           │
│  │              │                                │
│  │              │    Latest Apple flagship     │
│  │              │    smartphone with advanced │
│  │              │    features...               │
│  │              │                                │
│  │              │    ┌──────────┬──────────┐   │
│  │              │    │ Lowest   │ Available│   │
│  │              │    │ Price    │ from    │   │
│  │              │    │ $1,099   │ 12      │   │
│  │              │    │          │ Sellers │   │
│  │              │    └──────────┴──────────┘   │
│  │              │                                │
│  │              │    Product Specifications   │
│  │              │    • Category: Electronics  │
│  │              │    • Sellers: 12            │
│  │              │    • Price Range: $1,099 -  │
│  │              │      $1,150                 │
│  └──────────────┘                               │
│                                                   │
│  Compare Prices from All Sellers               │
│  ▼ [Amazon] $1,099 - In Stock                  │
│    └─ Seller details and "Go to Store" button  │
│  ▼ [Apple Store] $1,099 - In Stock             │
│    └─ Seller details and "Go to Store" button  │
│  ▼ [Best Buy] $1,120 - In Stock                │
│    └─ Seller details and "Go to Store" button  │
│                                                   │
├─────────────────────────────────────────────────┤
│ © 2025 PriceCompare                             │
└─────────────────────────────────────────────────┘
```

### Features
- **Back Navigation**: Return to product list
- **Product Image**: Centered, high-quality display
- **Category Badge**: Top right of content
- **Product Title**: Large, easy to read
- **Rating Section**: Stars and review count
- **Description**: Full product description
- **Price Box**: 
  - Lowest price available
  - Number of sellers
  - Full price range
- **Specifications Panel**: Product details
- **Seller Comparison Section**:
  - Expandable accordion for each seller
  - Seller logo and branding
  - Complete pricing and availability
  - Direct links to stores

---

## 🎨 Color Scheme & Design

### Primary Colors
- **Primary Blue**: Used for buttons, links, headers
- **Success Green**: Used for prices and positive status
- **Warning Orange**: Used for star ratings
- **Dark Gray**: Used for text and dark elements
- **Light Gray**: Used for backgrounds

### Typography
- **Headers**: Bold, 2rem - 1.8rem
- **Body Text**: Regular, 1rem
- **Small Text**: 0.8rem - 0.9rem
- **Font Family**: Segoe UI, sans-serif

### Spacing & Layout
- **Card Padding**: 18px
- **Grid Gap**: 24px (desktop), 16px (mobile)
- **Container Width**: Max 1400px centered
- **Border Radius**: 6px - 12px (rounded corners)

---

## ⚡ Interactive Elements

### Buttons
1. **Compare Prices Button**
   - Blue gradient background
   - Icon + text
   - Hover: Darker shade, shadow, lift effect
   - Click: Opens modal

2. **View Details Button**
   - Blue outlined style
   - Text only
   - Hover: Gray background
   - Click: Navigates to detail page

3. **Go to Store Button**
   - Green gradient background
   - Icon (external link)
   - Hover: Darker shade
   - Click: Alert + Navigation (can be connected to real URLs)

### Cards
- **Hover Effects**:
  - Shadow increases
  - Card slightly lifts (translateY)
  - Product image zooms slightly
- **Transitions**: Smooth 0.3s ease
- **Visual Feedback**: Clear response to user actions

### Modals
- **Overlay**: Semi-transparent, covers entire screen
- **Click Outside**: Closes modal
- **Close Button**: Top-right X button
- **Animation**: Smooth fade in/out

---

## 📱 Responsive Breakpoints

### Desktop (1200px+)
- 4-column product grid
- Full navigation bar
- Side-by-side product detail layout
- Full-width modals

### Tablet (768px - 1024px)
- 3-column product grid
- Adjusted padding and spacing
- Single-column detail layout
- Optimized for touch

### Mobile (< 768px)
- 2-column or 1-column grid
- Stacked layouts
- Full-width buttons
- Optimized touch targets (44px+)
- Adjusted font sizes

---

## 🔄 User Workflows

### Workflow 1: Compare Two Products
1. Home page displays 6+ products
2. User clicks "Compare Prices" on Product A
3. Modal opens showing sellers for Product A
4. User notes the prices
5. Closes modal (click X or overlay)
6. Clicks "Compare Prices" on Product B
7. Compares sellers side by side

### Workflow 2: Make a Purchase
1. Home page visible
2. User finds product of interest
3. Clicks "Compare Prices"
4. Reviews sellers and prices
5. Finds best price and availability
6. Clicks "Go to Store"
7. Redirected to seller's website (or alert in demo)

### Workflow 3: Browse Details
1. Home page visible
2. User clicks "View Details" button
3. Navigates to product detail page
4. Reads full description and specs
5. Sees all sellers and prices in accordion
6. Clicks "Go to Store" for desired seller
7. Leaves site and visits store

---

## 🎯 Key UI Patterns

### Accordion Pattern
- One or multiple items open
- Click to toggle
- Smooth collapse/expand animation
- Used for seller lists

### Modal Pattern
- Overlay prevents background interaction
- Centered content box
- Close button and overlay click both close
- Smooth fade animation

### Card Pattern
- Container with content
- Hover states for interactivity
- Organized information hierarchy
- Responsive sizing

### Grid Pattern
- Responsive columns
- Equal-height cards
- Auto-fit to screen width
- Consistent spacing

---

## 📊 Data Display

### Product Cards Display
- ✅ Product Image (300x300px)
- ✅ Product Name (1-2 lines)
- ✅ Star Rating (1-5 ⭐)
- ✅ Review Count (in parentheses)
- ✅ Description (1-2 lines)
- ✅ Category Badge
- ✅ Lowest Price (green, large)
- ✅ Seller Count (rounded badge)
- ✅ Action Buttons (2)

### Seller Information Display
- ✅ Seller Name
- ✅ Seller Logo (100x50px)
- ✅ Price (large, green)
- ✅ Availability Status (colored badge)
- ✅ Seller Rating (with stars)
- ✅ Review Count
- ✅ Action Button (Go to Store)

---

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Update Node.js** (v20.19+)
   ```bash
   node --version
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Open Browser**
   ```
   http://localhost:4200/
   ```

5. **Explore the Application**
   - View products on home page
   - Click "Compare Prices" to see modal
   - Click "View Details" for detail page
   - Test responsive design (F12 → Toggle Device Toolbar)

---

## 💡 Tips & Tricks

- **Use Tab Key**: Navigate through all interactive elements
- **Keyboard Navigation**: Enter/Space to activate buttons
- **Mobile Testing**: Use Chrome DevTools (F12) Device Mode
- **Performance**: Check Network tab to see image loading
- **Accessibility**: All buttons have proper labels and colors

---

**Enjoy your price comparison experience! 🛍️**
