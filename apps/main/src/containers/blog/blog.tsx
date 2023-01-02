import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BlogProps {}

const StyledBlog = styled.div`
  color: pink;
`;

export function Blog(props: BlogProps) {
  return (
    <StyledBlog>
      <h1>Welcome to Blog!</h1>
    </StyledBlog>
  );
}

export default Blog;
