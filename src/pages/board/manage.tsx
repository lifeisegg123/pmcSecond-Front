import { css } from '@emotion/react';
import BoardManageItem from 'src/components/board/BoardManageItem';
import Button from 'src/components/common/Button';
import Container from 'src/components/common/layout/Container';
import Layout from 'src/components/common/layout/Layout';

const BoardManage = () => {
  console.log('dd');
  return (
    <Layout title="게시판 관리">
      <ul>
        <BoardManageItem title="전체" desc="1009 / 1708건" />
        <BoardManageItem title="공지사항" desc="3 / 52건" />
        <BoardManageItem title="뉴스/이벤트" desc="1009 / 1708건" />
        <BoardManageItem title="상품 사용후기" desc="1009 / 1708건" />
        <BoardManageItem title="상품 자유게시판" desc="1009 / 1708건" />
      </ul>
      <Container style={buttonContainerCss}>
        <Button type="primary" style={buttonCss} htmlType="button">
          게시판 추가하기
        </Button>
      </Container>
    </Layout>
  );
};

export default BoardManage;

const buttonContainerCss = css`
  display: flex;
  margin-top: 2rem;
`;

const buttonCss = css`
  flex: 1;
`;
