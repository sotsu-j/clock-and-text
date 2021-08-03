import Head from 'next/head'
import { StyledHome, StyledText } from '../styles/Home'
import { Clock } from '../components/ClockDigital'
import { ContentsChanger } from '../components/ContentsChanger'
import { MyAppBar } from '../components/AppBar'
import { TimeProvider } from '../components/useTime'
import { Typography } from '@material-ui/core'

export default function Home() {
  return (
    <StyledHome>
      <Head>
        <title>Clock</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TimeProvider>
        <MyAppBar ><Clock size="small" /></MyAppBar>
        <main >
          <ContentsChanger>
            <StyledText>待っている間は<br/>お静かにお願いします</StyledText>
            <Clock size="large" />
            <StyledText>15分たったらおかえりください</StyledText>
            <Clock />
          </ContentsChanger>
        </main>
        <MyAppBar><Typography>15分間隔で帯の色が同じ色に戻ります</Typography></MyAppBar>
      </TimeProvider>
    </StyledHome>
  )
}
