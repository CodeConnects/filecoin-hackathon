import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Navbar from '../components/navbar'
import Random_NFT_Viewer from '../components/random_nft_viewer'
import Footer from '../components/footer'

export default function Random_NFT() {
  return (
    <Container className="md-container">
      <Head>
        {/*<title>View a randomly generated NFT</title>*/}
        <title>View an NFT</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      
      <Navbar />

      <h4 className="text-center pb-2">View{/* a random*/} NFT{/* or paste in a contract and ID*/}</h4>

      <Random_NFT_Viewer />

      <Footer />
    </Container>
  )
}