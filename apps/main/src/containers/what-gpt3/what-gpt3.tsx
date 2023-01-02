import styled from 'styled-components';

/* eslint-disable-next-line */
export interface WhatGpt3Props {}

const StyledWhatGpt3 = styled.div`
  color: pink;
`;

export function WhatGpt3(props: WhatGpt3Props) {
  return (
    <StyledWhatGpt3>
      <h1>Welcome to WhatGpt3!</h1>
    </StyledWhatGpt3>
  );
}

export default WhatGpt3;
