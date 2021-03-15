import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

const InputWithButton = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <>
      <input
        onChange={handleInputChange}
        value={inputValue}
        name="Name"
        id="name"
        placeholder="Wprowadź swoje imię"
      />
      <button disabled={!inputValue}>Wyślij</button>
    </>
  );
};

//tests
describe('Test for InputWithButton component', () => {
  it('should render', () => {
    render(<InputWithButton />);
    screen.getByText('Wyślij');
  });

  it('should test input value change, button should be disabled if input is empty and should be enabled if input is not empty', () => {
    render(<InputWithButton />);
    const button = screen.getByText('Wyślij');
    expect(button).toBeDisabled();
    const input = screen.getByPlaceholderText('Wprowadź swoje imię');
    fireEvent.change(input, { target: { value: 'Łukasz' } });
    expect(input).toHaveValue('Łukasz');
    expect(button).not.toBeDisabled();
  });
});
