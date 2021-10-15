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

            <h4 className="text-center pb-4"><a href="https://medium.com/encode-club/nft-hack-challenges-c6bafddf30f7#660a" target="_blank">Challenge 4 ~ Mint an NFT</a></h4>

            <p>This solution uses code forked from the <strong>ipfs-shipyard/nft-school-examples</strong> repo to mint a photo NFT on Rinkeby testnet, then store the metadata on IPFS. Node on an Ubuntu terminal was used for the process.</p>
            
            <p><a href="https://github.com/CodeConnects/nft-school-examples/commit/57cca72ed7bb2816334cd29d6607d748062554eb" target="_blank">Modified fork files on Github</a></p>

            <p><a href="https://rinkeby.etherscan.io/address/0xfec7183b9d2133c9fc2284b36c96c284df42a15f" target="_blank">Minting contract depoyed to Rinkeby</a></p>

            <p><a href="https://rinkeby.etherscan.io/tx/0x06549b85a9ebec1f4ca8f8493e93f1a0410dbc613b878f241098f76f2f1c14db" target="_blank">Etherscan minting transaction</a></p>

            <p><a href="https://bafyreibqxvrnneiie6iginzkqlywailebr3xzmpexeeunf7qb5vyj7awuu.ipfs.dweb.link/metadata.json" target="_blank">Metadata stored to IPFS through NFT.storage</a></p>

            <p><a href="https://testnets.opensea.io/assets/0xfec7183b9d2133c9fc2284b36c96c284df42a15f/1" target="_blank">NFT on OpenSea<br />
            <img className="d-block mx-auto w-50 border border-dark" src="minted-sky-nft.png"/>
            </a></p>

            <Footer />
        </Container>
    )
}


