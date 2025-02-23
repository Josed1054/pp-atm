# ATM Simulator

A modern ATM simulator built with Next.js, React Query, and TypeScript. This application simulates real ATM functionality with a sleek user interface and robust state management.

## 🌟 Features

- PIN Authentication System
- Balance Inquiries
- Deposit & Withdrawal Operations
- Transaction History
- Real-time Balance Updates
- Responsive Design
- Error Handling
- Loading States

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **State Management**: React Query, React Reducer
- **Form Handling**: React Hook Form, Zod
- **Styling**: Tailwind CSS
- **Components**: Shadcn/ui

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/atm-simulator.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📱 Usage

### Test PINs

- 1234 (Visa User - Balance: \$1,000)
- 1054 (Mastercard User - Balance: \$2,000)
- 5001 (Star Card User - Balance: \$3,000)

### Available Operations

- View Balance
- Withdraw Money (Preset amounts or custom amount)
- Deposit Money (Preset amounts or custom amount)
- Transaction History

## 🏗️ Project Structure

```
├── app/                  # Next.js app directory
├── components/
│   ├── atm/            # ATM-specific components
│   │   ├── screen/     # Screen components
│   │   └── buttons/    # Button components
│   └── ui/             # Shared UI components
├── lib/                 # Utilities and schemas
├── reducers/           # State management
└── services/           # API simulation
```

## 🔒 State Management

The application uses a combination of:

- React Query for server state
- React Reducer for application state
- React Hook Form for form state

## 🎨 Design System

The UI is built with a custom design system that simulates a real ATM interface, including:

- Physical button simulation
- Screen display
- Card reader visualization
- Transaction feedback
