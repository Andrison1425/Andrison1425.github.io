import { createRoot } from 'react-dom/client';
import './sass/styles.scss';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App tab="home" />);