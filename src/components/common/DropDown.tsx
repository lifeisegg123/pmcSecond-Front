import { css, Theme } from '@emotion/react';
import ReactDropdown, { Option, ReactDropdownProps } from 'react-dropdown';
import fontsize from 'src/assets/theme/fontSize';
import Icon from 'src/components/common/Icon';

type fontSizeKey = keyof typeof fontsize;

type DropsDownProps = Omit<ReactDropdownProps, 'onChange'> & {
  height?: string;
  width?: string;
  fontSize?: fontSizeKey;
  onChange?: (value: string) => void;
};

const DropDown = ({
  height = '3.5rem',
  width = '100%',
  fontSize = 'body2',
  onChange,
  value,
  ...rest
}: DropsDownProps) => {
  const handleOnChange = ({ value: _value }: Option) => {
    if (onChange) onChange(_value);
  };
  return (
    <ReactDropdown
      {...rest}
      value={value}
      onChange={handleOnChange}
      css={(theme) => dropDownCss(theme, height, width, fontSize)}
      arrowClosed={<Icon color={value ? 'black' : 'grey030'} size="0.5rem" name="downArrow" />}
      arrowOpen={<Icon color={value ? 'black' : 'grey030'} size="0.5rem" name="upArrow" />}
    />
  );
};

export default DropDown;

const dropDownCss = (theme: Theme, height: string, width: string, fontSize: fontSizeKey) => css`
  position: relative;
  width: ${width};
  .Dropdown-control {
    position: relative;
  }
  .Dropdown-placeholder {
    border: 1px solid ${theme.color.grey030};
    border-radius: 6px;
    height: ${height};
    display: flex;
    align-items: center;
    padding: 1rem;
    color: ${theme.color.grey030};
    ${theme.fontSize[fontSize]}
  }
  .is-selected {
    color: ${theme.color.black};
  }
  .Dropdown-arrow-wrapper {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
  }
  .Dropdown-menu {
    position: absolute;
    background-color: ${theme.color.white};
    width: 100%;
    border: 1px solid ${theme.color.grey030};
    padding: 1rem;
    z-index: 1;
    .Dropdown-option {
      border-bottom: 1px solid ${theme.color.grey020};
      margin: 0.5rem;
      ${theme.fontSize[fontSize]}
    }
  }
`;
