import styled from 'styled-components';

const GridContainerNavigationWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.navBackground};
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 1em;
`;

export default GridContainerNavigationWrapper;
