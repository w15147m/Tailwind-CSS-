import './bootstrap';
import Example from './Example';
import { createRoot } from 'react-dom/client';
// Look for an HTML element with the id 'react-app'
const rootElement = document.getElementById('app');

// If the element exists, create a root and render the Example component
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Example />);
}

