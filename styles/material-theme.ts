import {Theme, createTheme} from "@mui/material"

export const theme: Theme = createTheme({
    typography: {
        fontFamily: "Roboto Mono, sans-serif"
    },
    palette:{
        primary: {
            main: "#FF0000",
          },
          secondary: {
            main: "#D87093",
          },
    }
})