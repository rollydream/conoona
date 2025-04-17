
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App_250417 from './App_250417';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const root = createRoot(document.getElementById('root'));
const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App_250417 />
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-right' />
  </QueryClientProvider>
)