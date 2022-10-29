import { Grid } from '@mui/material';
import Sidebar from './sidebar';
import Content from './content';

export default function Home() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={6} md={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={6} md={9}>
          <Content />
        </Grid>
      </Grid>
    </>
  )
}
