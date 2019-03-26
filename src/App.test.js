import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, waitForElement } from 'react-testing-library';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('loads react table contents', async () => {
    const { getByText } = render(<App />);

    await waitForElement(() => getByText(/accusamus beatae ad facilis/));
});