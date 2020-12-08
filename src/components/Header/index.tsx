import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

import { Container } from './style'

interface IHeaderProps {
  toggleTheme: () => void
}

export const Header: React.FC<IHeaderProps> = ({ toggleTheme }) => {

  const { colors, title } = useContext(ThemeContext)

  return (
    <Container>
      <h1>Hello World</h1>
      <Switch 
        onChange={ toggleTheme }
        checked={ title === 'dark' }
        checkedIcon={ false }
        uncheckedIcon={ false }
        width={ 40 }
        height={ 10 }
        handleDiameter={ 20 }
        onColor={ colors.secondary }
        offColor={shade(0.15, colors.primary)}
      />
    </Container>
  )
}
