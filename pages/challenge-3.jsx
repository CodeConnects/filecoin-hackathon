import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'
import { NFTE } from '@nfte/react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

console.log('see me')

export default function Challenge_3() {
    return(
        <Container className="md-container">
            <Head>
                <title>Challenge 3 from the Filecoin NFT Hackathon</title>
                <link rel="icon" href="/favicon-32x32.png" />
            </Head>

            <Navbar />
        
            <h4 className="text-center pb-5">Challenge 3 ~ Embed an NFT</h4>
            <Row>
                <Col>
                    <p>This solution uses the React module "nfte.app"</p>
                    <p>After installing the nfte module, an Ethereum NFT can be embedded with a one line component, using just the contract address and token ID</p>
                    <p>React code:<br />
                      <code>&lt;NFTE className="border border-dark" contract="0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0" tokenId="17158"/&gt;</code>
                    </p>
                </Col>
                <Col>
                    <NFTE className="border border-dark" contract="0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0" tokenId="17158"/>
                </Col>
            </Row>

            <Footer />
        </Container>
    )
}


