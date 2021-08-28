import { css, Theme } from '@emotion/react';
import Text from 'src/components/common/Text';
import Container from 'src/components/common/layout/Container';

type BoardManageItemProps = {
  title: string;
  desc: string;
};

const BoardManageItem = ({ title, desc }: BoardManageItemProps) => (
  <li css={(theme) => lineCss(theme)}>
    <Container style={containerCss}>
      <Text.Title level={5} size="body2">
        {title}
      </Text.Title>
      <Text size="body1" color="grey050">
        {desc}
      </Text>
    </Container>
  </li>
);

export default BoardManageItem;

const lineCss = (theme: Theme) => css`
  padding: 1rem 0;
  border-top: 1px solid ${theme.color.grey020};
  main > & {
    :last-of-type {
      border-bottom: 1px solid ${theme.color.grey020};
    }
  }
`;

const containerCss = css`
  display: flex;
  justify-content: space-between;
`;
