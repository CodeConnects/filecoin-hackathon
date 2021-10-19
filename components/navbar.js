import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="navigation">
            <Link href="/">Challenges 1 & 2</Link>
            <Link href="/challenge-3">Challenge 3</Link>
            <Link href="/challenge-4">Challenge 4</Link>
            <Link href="/random-nft">Random NFT</Link>
        </nav>
    )
}
