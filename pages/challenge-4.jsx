import Head from 'next/head'
import { Container} from 'react-bootstrap'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Challenge_4() {
    return(
        <Container className="md-container">
            <Head>
                <title>Challenge 4 from the Filecoin NFT Hackathon</title>
                <link rel="icon" href="/favicon-32x32.png" />
            </Head>

            <Navbar />
        
            <h4 className="text-center pb-4">challenge 4 ~ mint an NFT</h4>

            <img className="d-block mx-auto w-75" src="minted-sky-nft.png"/>

            <Footer />
        </Container>
    )
}


