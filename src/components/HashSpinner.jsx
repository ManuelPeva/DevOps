
import { css } from '@emotion/react';
import { HashLoader } from 'react-spinners';

const overrideStyle = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const HashSpinner = () => {
  return (
    <div>
      <HashLoader color="#36D7B7" loading={true} css={overrideStyle} size={50} />
   </div>
  );
}

export default HashSpinner;
