import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';

const wrapper: HTMLElement = document.getElementById('root')!;
const root = createRoot(wrapper);
root.render(<App />);
