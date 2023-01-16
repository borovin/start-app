import { FC, ReactNode } from 'react'
import { red } from '@mui/material/colors'
import { ThemeProvider as MuiThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles'
import { Roboto_Flex } from '@next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'] })

const theme = createTheme({
  palette: {
    primary: {
      main: red[500]
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  }
})

interface ThemeProviderProps {
  children: ReactNode | ReactNode[]
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <div style={roboto.style}>
        {children}
      </div>
    </MuiThemeProvider>
  </StyledEngineProvider>
)

export default ThemeProvider
