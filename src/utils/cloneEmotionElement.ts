import { jsx } from '@emotion/react';

const cloneEmotionElement = (element: any, props: any) =>
  jsx(element.type, {
    key: element.key,
    ref: element.ref,
    ...element.props,
    ...props,
  });

export default cloneEmotionElement;
