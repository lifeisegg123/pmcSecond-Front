import { css, Theme } from '@emotion/react';

type CheckBoxProps = {
  id: string;
  value: boolean;
  onClick: () => void;
};

const CheckBox = ({ id, value, onClick }: CheckBoxProps) => (
  <div css={(theme) => inputCss(theme, value)}>
    <label htmlFor={id}>
      <input onClick={onClick} type="checkbox" id={id} />
    </label>
  </div>
);

export default CheckBox;

const inputCss = (theme: Theme, checked: boolean) => css`
  margin-right: 1.25rem;
  input {
    display: none;
  }
  label {
    display: inline-block;
    height: 1rem;
    width: 1rem;
    border: 1px solid ${theme.color.grey040};
    background-color: ${checked ? theme.color.grey040 : 'transparent'};
  }
`;
