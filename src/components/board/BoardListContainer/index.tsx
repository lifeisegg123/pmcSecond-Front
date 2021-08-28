import { css, Theme } from '@emotion/react';
import Button from 'src/components/common/Button';
import DropDown from 'src/components/common/DropDown';
import Container from 'src/components/common/layout/Container';
import { useToggle } from 'src/hooks';
import CheckBox from './CheckBox';

const BoardListContainer = () => {
  const [checked, toggleChecked] = useToggle(false);
  return (
    <div>
      <div css={headCss}>
        <Container style={headContainerCss}>
          <span>
            <CheckBox value={checked} id="selector" onClick={toggleChecked} />
            <Button size="small" type="ghost" htmlType="button">
              추가
            </Button>
            <Button size="small" type="ghost" htmlType="button">
              삭제
            </Button>
          </span>
          <span>
            <DropDown fontSize="caption1" height="2rem" options={[{ value: '10', label: '10개씩 보기' }]} />
          </span>
        </Container>
      </div>
    </div>
  );
};

export default BoardListContainer;

const headCss = (theme: Theme) => css`
  border-bottom: 1px solid ${theme.color.grey020};
`;

const headContainerCss = css`
  display: flex;
  justify-content: space-between;

  span:first-of-type {
    display: flex;
    align-items: center;
    button {
      height: 2rem;
      width: 3.25rem;
      border-radius: 3px;
    }
    button + button {
      margin-left: 0.5rem;
    }
  }
  span:last-of-type {
    width: 7rem;
  }
`;
