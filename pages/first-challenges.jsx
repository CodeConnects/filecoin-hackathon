import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Challenge_1_2() {
  return (
    <Container className="md-container">
      <Head>
        <title>First Two Challenges from the Filecoin NFT Hackathon</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Navbar />

      <h4 className="text-center pb-4"><a href="https://medium.com/encode-club/nft-hack-challenges-c6bafddf30f7#660a" target="_blank">Challenges 1 &  2 ~ NFT.storage and CID</a></h4>

      <p><strong>Get an NFT.storage API token, store a file, then show its CID.</strong></p>

      <p className="break-text">CID:<br /><a href="https://bafyreih5zxg7wac5ibyi5qhcnqcbn7o6uxn5ilpqqajhuvffpyxv3t5fmy.ipfs.dweb.link/metadata.json" target="_blank">bafyreih5zxg7wac5ibyi5qhcnqcbn7o6uxn5ilpqqajhuvffpyxv3t5fmy</a></p>
    
      <p>
        <code>JSON:<br />
          <span className="span1">&#123;</span><br />
          <span className="span2">"name": "blue lines image",</span><br />
          <span className="span2">"description": "abstract lines with blue tones and soft focus",</span><br />
          <span className="span2">"image": "<a href='ipfs://bafybeiffzwkp5xypbmzp5bto2miha4peexhkvstqnhi3kyh565b23xqpuu/abstract_lines.jpg' target='_blank'>ipfs://bafybeiffzwkp5xypbmzp5bto2miha4peexhkvstqnhi3kyh565b23xqpuu/abstract_lines.jpg"</a></span><br />
          <span className="span1">&#125;</span>
        </code>
      </p>
    <Footer />
    </Container>
  )
}
