# VisitaKenya Frontend

A complete multi-role rental platform frontend built with React, Tailwind CSS, and Lucide Icons.

## Features

- **Multi-Role Dashboards**: Specific interfaces for Tenants, Landlords, and Super Admins.
- **Authentication**: Role-based login and signup flow.
- **Responsive Design**: Mobile-first UI using Tailwind CSS.
- **Mock Data**: Pre-populated with data for demonstration.
- **Reusable Components**: Includes custom Table, StatCard, Navbar, and Sidebar.

## Tech Stack

- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Utility**: clsx, tailwind-merge

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Demo Credentials

You can use the following emails to test different roles (any password works):

- **Tenant**: `tenant@visita.com`
- **Landlord**: `landlord@visita.com`
- **Super Admin**: `admin@visita.com`

## Project Structure

```
frontend/
  src/
    components/   # Reusable UI components
    context/      # Auth and global state
    layouts/      # Page layouts (Dashboard, Auth)
    pages/        # Role-specific pages
    utils/        # Helper functions
    App.jsx       # Main router
    index.css     # Global styles & Tailwind
```

## License

MIT
