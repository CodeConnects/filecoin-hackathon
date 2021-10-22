import { Navbar, Nav } from 'react-bootstrap'

export default function Navigation() {
    return (
        <div className="navigation">
            <Navbar bg="dark" variant="dark" expand="sm">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Challenges 1 & 2</Nav.Link>
                        <Nav.Link href="/challenge-3">Challenge 3</Nav.Link>
                        <Nav.Link href="/challenge-4">Challenge 4</Nav.Link>
                        <Nav.Link href="/random-nft">View Random NFT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
