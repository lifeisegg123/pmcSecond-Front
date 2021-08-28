import { css } from '@emotion/react';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  marginVertical?: string;
  marginTop?: string;
  marginBottom?: string;
  style?: ReturnType<typeof css>;
};

const Container = ({ children, marginVertical, marginTop, marginBottom, style }: ContainerProps) => (
  <div
    css={[
      css`
        margin: ${marginVertical ?? marginTop ?? 0} 1.25rem ${marginVertical ?? marginBottom ?? 0} 1.25rem;
      `,
      style,
    ]}
  >
    {children}
  </div>
);

export default Container;
