import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Navbar from '../components/navbar'
import Random_NFT_Viewer from '../components/random_nft_viewer'
import Footer from '../components/footer'

export default function Random_NFT() {
  return (
    <Container className="md-container">
      <Head>
        <title>View a random NFT from selected collections</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      
      <Navbar />

      <Random_NFT_Viewer />

      <Footer />
    </Container>
  )
}