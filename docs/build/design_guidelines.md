# AI Bail Recommendation System - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from professional legal tech platforms like LegalZoom and modern SaaS dashboards like Linear, combined with the clean aesthetics of government digital services.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Dark Mode: 220 25% 15% (deep navy background)
- Light Mode: 220 15% 97% (off-white background)
- Brand Primary: 210 100% 50% (professional blue)
- Brand Secondary: 210 20% 25% (dark slate)

**Accent Colors:**
- Success: 142 76% 36% (legal green)
- Warning: 38 92% 50% (amber for pending cases)
- Error: 0 84% 60% (red for high-risk cases)

### Typography
- **Primary**: Inter (Google Fonts) - clean, professional
- **Display**: Poppins (Google Fonts) - for headers and hero text
- **Monospace**: JetBrains Mono - for case IDs and data tables

### Layout System
**Tailwind Spacing Units**: 2, 4, 6, 8, 12, 16, 24
- Consistent rhythm using these units for padding, margins, and gaps
- Grid system: 12-column layout with responsive breakpoints

### Component Library
**Navigation**: Fixed top navbar with logo, centered menu items, and user avatar
**Cards**: Elevated cards with subtle shadows for metrics and case information
**Tables**: Striped rows with hover states for case listings
**Forms**: Floating labels with focus states for contact and input forms
**Buttons**: Primary (solid blue), Secondary (outline), and Ghost variants
**Charts**: Clean, minimal styling with brand colors for dashboard metrics

## Visual Treatment

### Gradients
- **Hero Background**: Subtle gradient from 210 100% 50% to 220 80% 45%
- **Card Accents**: Minimal gradients on metric cards using primary colors
- **Button Hover**: Slight gradient overlay on interactive elements

### Professional Styling
- **Shadows**: Soft, layered shadows for depth without distraction
- **Borders**: Subtle 1px borders using neutral colors
- **Hover Effects**: Gentle scale transforms (1.02x) and opacity changes
- **Focus States**: Clear blue outline rings for accessibility

## Images
**Hero Section**: Large background image (1920x1080) showing a modern courthouse or legal scales with a subtle blue overlay gradient to ensure text readability. The image should convey trust, justice, and technology.

**Dashboard Icons**: Use Heroicons for consistent iconography - scales for justice, chart bars for analytics, users for case management, and shield for security.

**About Page**: Professional headshots placeholders for team members with consistent rounded styling.

## Page-Specific Guidelines

### Home Page
- Full-height hero with centered content and dual CTA buttons
- Three-column feature section with icons and brief descriptions
- Testimonial/stats section with animated counters

### Dashboard
- 4-card metrics grid at top with gradient backgrounds
- Two-column chart layout using Recharts with brand colors
- Recent activity feed in sidebar

### Case List
- Search bar with filters at top
- Sortable table with status badges and priority indicators
- Pagination controls at bottom

### Recommendations
- Card-based layout for each recommendation
- Risk level indicators with color coding
- Explanation text with supporting data points

### About & Contact
- Clean, centered layouts with generous whitespace
- Contact form with floating labels and validation states
- Team grid with consistent card styling

This design emphasizes trust, professionalism, and clarity - essential for legal technology applications while maintaining modern web standards.