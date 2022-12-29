import { render } from '@testing-library/react';

import Possibility from './navbar';

describe(Possibility.name, () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Possibility />);
    expect(baseElement).toBeTruthy();
  });
});
