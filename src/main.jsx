
import { createRoot } from 'react-dom/client'
import './index.css'
import App_254019 from './App_254019';
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const root = createRoot(document.getElementById('root'));
const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App_254019 />
    </BrowserRouter>
    {/* <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-right' /> */}
  </QueryClientProvider>
)