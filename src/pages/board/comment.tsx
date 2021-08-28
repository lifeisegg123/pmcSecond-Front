import { css, Theme } from '@emotion/react';
import { ChangeEvent, useState } from 'react';
import InputItem from 'src/components/board/InputItem';
import Button from 'src/components/common/Button';
import HorizontalDivider from 'src/components/common/HorizontalDivider';
import Container from 'src/components/common/layout/Container';
import Layout from 'src/components/common/layout/Layout';
import Text from 'src/components/common/Text';

const Comment = () => {
  const [newComment, setNewComment] = useState('');
  const onChangeNewComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;
    setNewComment(value);
  };
  return (
    <Layout leftIcon="leftArrow" title="댓글 작성">
      <Container marginTop="1.25rem">
        <Text size="subtitle2">게시글 제목</Text>
        <div css={flexCss}>
          <span>
            <Text color="grey060" size="body2">
              작성자
            </Text>
          </span>
          <span>
            <Text color="grey060" size="body2">
              이메일 아이디
            </Text>
          </span>
          <span>
            <Text color="grey060" size="body2">
              작성일
            </Text>
          </span>
          <span>
            <Text color="grey060" size="body2">
              별점
            </Text>
          </span>
        </div>
        <div css={descCss}>
          <Text color="grey060" size="body2">
            게시글 내용 영역
          </Text>
        </div>
      </Container>
      <HorizontalDivider />
      <Container marginTop="1.25rem" style={commentContainer}>
        <div>
          <Text size="body2">댓글 (0)</Text>
        </div>
        <InputItem>
          <textarea
            value={newComment}
            onChange={onChangeNewComment}
            placeholder="게시판 영역에 작성하고 싶은 댓글을 입력해주세요."
          />
        </InputItem>
        <Button type="primary" htmlType="button">
          댓글 작성
        </Button>
      </Container>
    </Layout>
  );
};

export default Comment;

const flexCss = (theme: Theme) => css`
  display: flex;
  margin-top: 0.3125rem;
  padding-bottom: 0.6875rem;
  border-bottom: 1px solid ${theme.color.grey020};
  & > span {
    padding: 0 0.5rem;
    border-right: 1px solid ${theme.color.grey030};
    :first-of-type {
      padding-left: 0;
    }
    :last-of-type {
      border-right: none;
    }
  }
`;

const descCss = css`
  margin: 1.25rem 0;
  min-height: 16.875rem;
`;

const commentContainer = css`
  & > div {
    margin-top: 0;
    :last-of-type {
      margin-top: 0.4375rem;
    }
  }
  button {
    margin-top: 1.25rem;
    width: 100%;
    height: 2.75rem;
  }
`;
