import { css, Theme } from '@emotion/react';
import { useToggle } from 'src/hooks';
import getDateString from 'src/utils/getDateString';
import Container from '../../common/layout/Container';
import Text from '../../common/Text';
import CheckBox from './CheckBox';

type BoardListItemProps = {
  title: string;
  writer: string;
  writtenAt: Date;
  category: string;
};
const BoardListItem = ({ title, writer, writtenAt, category }: BoardListItemProps) => {
  const [checked, toggleChecked] = useToggle(false);
  return (
    <li css={(theme) => wrapperCss(theme)}>
      <Container style={containerCss}>
        <span>
          <CheckBox id={`checkbox_${title}_${writer}`} value={checked} onClick={toggleChecked} />
        </span>
        <span>
          <Text size="caption2" color="grey040">
            {category}
          </Text>
          <Text.Title level={5} size="body2">
            {title}
          </Text.Title>
          <div css={writeInfoBoxCss}>
            <Text size="caption1" color="grey050">
              {writer} / {getDateString(writtenAt)}
            </Text>
          </div>
        </span>
      </Container>
    </li>
  );
};

export default BoardListItem;

const wrapperCss = (theme: Theme) => css`
  padding: 1.25rem 0;
  border-bottom: 1px solid ${theme.color.grey020};
  list-style: none;
`;

const containerCss = css`
  display: flex;
  align-items: center;
`;

const writeInfoBoxCss = css`
  display: flex;
  margin-top: 0.25rem;
`;
