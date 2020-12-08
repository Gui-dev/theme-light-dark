import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #FFF;
  padding: 0 3rem;
  width: 100%;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.primary};

  h1 {
    font-size: 2rem;
  }
`
