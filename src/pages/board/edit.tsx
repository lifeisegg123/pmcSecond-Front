import { css } from '@emotion/react';
import { compose } from '@reduxjs/toolkit';
import { useState } from 'react';
import InputItem from 'src/components/board/InputItem';
import Button from 'src/components/common/Button';
import DropDown from 'src/components/common/DropDown';
import Container from 'src/components/common/layout/Container';
import Layout from 'src/components/common/layout/Layout';

const BoardEdit = () => {
  const [category, setCategory] = useState<undefined | string>(undefined);
  const [title, setTitle] = useState<undefined | string>(undefined);
  const [desc, setDesc] = useState<undefined | string>(undefined);
  const handleChangeValue = (target: 'category' | 'title' | 'desc') => (value: string) => {
    switch (target) {
      case 'category':
        setCategory(value);
        break;
      case 'title':
        setTitle(value);
        break;
      case 'desc':
        setDesc(value);
        break;
      default:
        throw new Error('불가능한 필드를 입력시도하였습니다.');
    }
  };

  const getValueFromEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;
    return value;
  };

  return (
    <Layout leftIcon="leftArrow" title="내용 편집">
      <Container marginBottom="6.5625rem">
        <InputItem title="게시판 분류">
          <DropDown
            value={category}
            onChange={handleChangeValue('category')}
            options={[{ value: 'test', label: 'ggggg' }]}
          />
        </InputItem>
        <InputItem title="게시글 제목">
          <input
            value={title}
            onChange={compose(handleChangeValue('title'), getValueFromEvent)}
            placeholder="제목을 입력해주세요."
          />
        </InputItem>
        <InputItem title="글 내용">
          <textarea
            value={desc}
            onChange={compose(handleChangeValue('desc'), getValueFromEvent)}
            placeholder="게시판 영역에 작성하고 싶은 글을 입력해주세요."
          />
        </InputItem>
      </Container>
      <Button style={buttonCss} htmlType="button" disabled={!category || !title || !desc} type="primary" size="large">
        작성완료
      </Button>
    </Layout>
  );
};

export default BoardEdit;

const buttonCss = css`
  position: fixed;
  bottom: 0;
`;
