import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, waitForElement, fireEvent } from 'react-testing-library';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('loads react table contents', async () => {
    const { getByText } = render(<App />);

    await waitForElement(() => getByText(/accusamus beatae ad facilis/));
});

it('loads images when clicked on URL', async () => {
    const { getByText, getByTestId } = render(<App />);
    const infobar = getByTestId('infobar');
    const cell = await waitForElement(() => getByText('https://via.placeholder.com/600/92c952'));

    fireEvent.click(cell);

    expect(infobar.getElementsByTagName('img').length).toEqual(1);
    expect(infobar.getElementsByTagName('img')[0].getAttribute('src'))
        .toEqual('https://via.placeholder.com/600/92c952');
});