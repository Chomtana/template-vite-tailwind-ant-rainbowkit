import React from 'react'
import ReactDOM from 'react-dom/client'
import "./polyfills.ts"

import '@rainbow-me/rainbowkit/styles.css';
import './index.css'

import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WalletProvider from './providers/WalletProvider.tsx';
import HomePage from './pages/HomePage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <WalletProvider>
    <RouterProvider router={router} />
  </WalletProvider>,
)
