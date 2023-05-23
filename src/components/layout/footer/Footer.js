import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  AppBar,
  Container,
  Grid,
  Link,
  StylesProvider,
  Typography,
} from '@material-ui/core'
import './Footer.css'

function Footer() {
  return (
    <StylesProvider injectFirst>
      <footer>
        <AppBar className="primary-color marginT-3 pad-2" position="static">
          <Grid component={Container} container>
            <Grid item xs={12} sm={3}>
            </Grid>

            <Grid item xs={12} sm={9} className="links">
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography className="copyright">
                
              </Typography>
            </Grid>
          </Grid>
        </AppBar>
      </footer>
    </StylesProvider>
  )
}

export default Footer
