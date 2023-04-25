import { render, screen } from '@testing-library/react';
import { InputText } from '.';
import userEvent from '@testing-library/user-event';

describe('<InputText />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();

    render(
      <InputText
        handleChange={fn}
        searchValue={'testando'}
        placeholder={'teste'}
      />,
    );

    const input = screen.getByPlaceholderText(/teste/i);
    expect(input.value).toBe('testando');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(
      <InputText
        handleChange={fn}
        searchValue={'testando'}
        placeholder={'teste'}
      />,
    );

    const input = screen.getByPlaceholderText(/teste/i);
    const value = 'o valor';

    userEvent.type(input, value);

    expect(input.value).toBe('testando');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(
      <InputText
        handleChange={fn}
        searchValue={'testando'}
        placeholder={'teste'}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
