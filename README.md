# Personal Finance Tracker

A modern, responsive web application for tracking personal finances, built with Next.js and shadcn/ui.

![Finance Tracker Dashboard](https://via.placeholder.com/1200x600?text=Finance+Tracker+Dashboard)

## Features

- **Dashboard Overview**: Get a quick snapshot of your financial health with key metrics
- **Transaction Management**: Add, edit, and delete financial transactions
- **Category Tracking**: Organize transactions by categories with visual breakdowns
- **Budget Management**: Set and track budgets for different spending categories
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Choose between light and dark themes
- **Elegant UI**: Beautiful interface with Playfair Display and Cormorant fonts

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Playfair Display, Cormorant)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn or pnpm

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/finance-tracker.git
   cd finance-tracker
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

\`\`\`
finance-tracker/
├── app/                    # Next.js app router pages
│   ├── budgets/            # Budgets page
│   ├── categories/         # Categories page
│   ├── settings/           # Settings page
│   ├── transactions/       # Transactions page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Dashboard page
├── components/             # React components
│   ├── ui/                 # UI components from shadcn/ui
│   ├── budget-*.tsx        # Budget-related components
│   ├── category-*.tsx      # Category-related components
│   ├── transaction-*.tsx   # Transaction-related components
│   ├── sidebar.tsx         # Sidebar navigation
│   ├── mobile-sidebar.tsx  # Mobile navigation
│   └── ...                 # Other components
├── lib/                    # Utility functions
│   └── utils.ts            # Helper functions
├── public/                 # Static assets
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tailwind.config.ts      # Tailwind configuration
\`\`\`

## Usage

### Dashboard

The dashboard provides an overview of your financial status, including:
- Total balance
- Monthly income and expenses
- Savings rate
- Monthly expense trends
- Recent transactions

### Transactions

The transactions page allows you to:
- View all transactions in a sortable table
- Add new transactions
- Edit existing transactions
- Delete transactions

### Categories

The categories page helps you:
- Visualize spending by category
- Manage transaction categories
- Add, edit, or delete categories

### Budgets

The budgets page enables you to:
- Set spending limits for different categories
- Track your progress against budgets
- Identify areas where you're over or under budget

### Settings

The settings page allows you to customize:
- Currency preferences
- Date format
- Theme (light/dark mode)
- Notification preferences
- Export or clear your data

## Customization

### Themes

The application supports both light and dark themes. You can toggle between them in the sidebar or in the settings page.

### Fonts

The application uses Playfair Display for headings and Cormorant for body text. These can be customized in the `app/layout.tsx` file.

## Planned Features

- **Authentication**: User accounts and authentication
- **Data Persistence**: Database integration for storing user data
- **Data Import**: Import transactions from CSV or bank statements
- **Financial Goals**: Set and track financial goals
- **Reports**: Generate detailed financial reports
- **Multiple Currencies**: Support for multiple currencies and conversion
- **Recurring Transactions**: Set up recurring transactions
- **Mobile App**: Native mobile application

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Recharts](https://recharts.org/) for the chart components
- [Lucide React](https://lucide.dev/) for the icons
- [Next.js](https://nextjs.org/) for the framework
