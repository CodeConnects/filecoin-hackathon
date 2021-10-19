import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
  return (
    <Container className="md-container">
      <Head>
        <title>First Two Challenges from the Filecoin NFT Hackathon</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      
      <Navbar />

      <h4 className="text-center pb-5"><a href="https://medium.com/encode-club/nft-hack-challenges-c6bafddf30f7#660a" target="_blank">Challenges 1 &  2 ~ NFT.storage and CID</a></h4>

      <p><strong>Get an NFT.storage API token, store a file, then show its CID.</strong></p>

      <p>CID:<br /><a href="https://bafyreih5zxg7wac5ibyi5qhcnqcbn7o6uxn5ilpqqajhuvffpyxv3t5fmy.ipfs.dweb.link/metadata.json" target="_blank">bafyreih5zxg7wac5ibyi5qhcnqcbn7o6uxn5ilpqqajhuvffpyxv3t5fmy</a></p>

      <p>
        <pre>
          <code>JSON:<br />
            &nbsp;&nbsp;&#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;"name": "blue lines image",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;"description": "abstract lines with blue tones and soft focus",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;"image": "<a href='ipfs://bafybeiffzwkp5xypbmzp5bto2miha4peexhkvstqnhi3kyh565b23xqpuu/abstract_lines.jpg' target='_blank'>ipfs://bafybeiffzwkp5xypbmzp5bto2miha4peexhkvstqnhi3kyh565b23xqpuu/abstract_lines.jpg"</a><br />
              &nbsp;&nbsp;&#125;
          </code>
        </pre>
      </p>

      <Footer />

    </Container>
  )
}
