import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@radix-ui/themes/styles.css";
import './index.css'
import App from './App.tsx'
import { Theme } from "@radix-ui/themes";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme  accentColor="grass" grayColor="olive" radius="large" scaling="95%">
      <App />
    </Theme>
  </StrictMode>,
)
