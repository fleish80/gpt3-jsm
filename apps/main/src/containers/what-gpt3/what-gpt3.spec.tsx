import { render } from '@testing-library/react';

import WhatGpt3 from './what-gpt3';

describe('WhatGpt3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WhatGpt3 />);
    expect(baseElement).toBeTruthy();
  });
});
