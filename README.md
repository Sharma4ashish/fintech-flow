# Finance Flow

A modern web application for searching and visualizing company financial data from the SEC EDGAR database.

## Features

- **Company Search**: Search for publicly traded companies by name or ticker
- **Financial Data Visualization**: View key financial metrics and trends in interactive charts
- **Real-time Data**: Fetches live financial data from the SEC EDGAR API
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

### Frontend
- **Next.js 16.2.3** - React framework with App Router for server/client components
- **React 19** - UI library with latest hooks and features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4.2** - Utility-first CSS framework for styling
- **Recharts 3.8** - Composable charting library for financial data visualization
- **React Hot Toast 2.6** - Toast notifications for user feedback

### Development Tools
- **ESLint 9** - Code quality and style enforcement
- **PostCSS 8.5** - CSS processing pipeline

## Setup

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm installed

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fintec-flow
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Card.tsx        # Data card display component
│   ├── Chart.tsx       # Financial chart visualization
│   └── SearchBar.tsx   # Company search component
├── context/            # React context for state management
│   └── AppContext.tsx  # Global app state
└── services/           # API and data utilities
    ├── api.ts          # SEC EDGAR API integration
    └── cleanFinTecData.ts  # Data transformation utilities

app/
├── api/                # Next.js API routes
│   └── company/route.ts    # Company data endpoint
├── layout.tsx          # Root layout component
└── page.tsx            # Home page
```

## Known Limitations

1. **API Rate Limits**: The SEC EDGAR API has rate limiting. Frequent requests may result in temporary throttling.
2. **Data Availability**: Not all companies have complete historical financial data in the SEC EDGAR database.
3. **Real-time Updates**: Financial data is updated periodically by the SEC and may not reflect intraday changes or real-time market data.
4. **Search Functionality**: Company search is limited to companies with SEC filings (public companies in the US).
5. **Performance**: Loading large datasets with extended historical periods may experience slower performance on lower-end devices.
6. **Browser Support**: The application is optimized for modern browsers; older browsers may have limited functionality.

## Future Enhancements

- Add more financial metrics and analysis tools
- Implement data export (CSV, PDF)
- Add historical comparison between companies
- Cache frequently accessed data for better performance

## License

This project is part of an assignment.
