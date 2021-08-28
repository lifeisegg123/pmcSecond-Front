import BoardListContainer from 'src/components/board/BoardListContainer';
import BoardListItem from 'src/components/board/BoardListContainer/BoardListItem';
import DropDown from 'src/components/common/DropDown';
import HorizontalDivider from 'src/components/common/HorizontalDivider';
import Container from 'src/components/common/layout/Container';
import Layout from 'src/components/common/layout/Layout';

const BoardList = () => {
  console.log('hihi');
  return (
    <Layout title="게시글 목록">
      <Container marginVertical="1.25rem">
        <DropDown options={[{ value: 'test', label: 'ggggg' }]} />
      </Container>
      <HorizontalDivider />
      <BoardListContainer />
      <BoardListItem title="타이틀 영역" writer="작성자" writtenAt={new Date()} category="게시판 위치" />
    </Layout>
  );
};

export default BoardList;
