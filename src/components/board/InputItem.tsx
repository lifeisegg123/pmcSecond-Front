import { css, Theme } from '@emotion/react';
import { ReactElement, useMemo } from 'react';
import Text from 'src/components/common/Text';
import { ColorType } from 'src/interfaces/emotion';
import cloneEmotionElement from 'src/utils/cloneEmotionElement';

type InputItemProps = {
  children: ReactElement;
  title?: string;
};

const InputItem = ({ children, title }: InputItemProps) => {
  const color = useMemo(() => (children.props.value?.length ? 'purple050' : 'grey040'), [children.props.value]);

  const cssArr = useMemo(() => {
    switch (children.type) {
      case 'textarea':
        return [inputCss(color), textareaCss];
      case 'input':
        return [inputCss(color)];
      default:
        return [];
    }
  }, [children, color]);

  const styledChild = cloneEmotionElement(children, { css: cssArr });

  return (
    <div css={fieldContainerCss}>
      {title && (
        <Text.Title level={5} color={color} size="body2">
          {title}
        </Text.Title>
      )}
      {styledChild}
    </div>
  );
};

export default InputItem;

const fieldContainerCss = css`
  margin-top: 1.875rem;
  h5 {
    margin-bottom: 0.375rem;
  }
`;

const inputCss = (color: keyof ColorType) => (theme: Theme) => css`
  width: 100%;
  height: 3.375rem;
  background-color: transparent;
  padding: 1rem;
  border-radius: 0.375rem;
  border: 0.0625rem solid ${theme.color[color]};
  ${theme.fontSize.body2};
  ::placeholder {
    color: ${theme.color.grey030};
  }
`;

const textareaCss = css`
  height: 10.125rem;
  resize: none;
`;
