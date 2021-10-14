import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
  return (
    <Container className="md-container">
      <Head>
        <title>First Challenges from the Filecoin NFT Hackathon</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      
      <Navbar />

      <h4 className="text-center pb-5">challenges 1 and 2</h4>
      <p><a href="https://bafyreih5zxg7wac5ibyi5qhcnqcbn7o6uxn5ilpqqajhuvffpyxv3t5fmy.ipfs.dweb.link/metadata.json" target="_blank">https://bafyreih5zxg7wac5ibyi5qhcnqcbn7o6uxn5ilpqqajhuvffpyxv3t5fmy.ipfs.dweb.link/metadata.json</a></p>

      <Footer />

    </Container>
  )
}
