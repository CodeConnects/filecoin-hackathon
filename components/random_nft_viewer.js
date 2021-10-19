import { useState } from 'react'
import { NFTE } from '@nfte/react'
import { Button } from 'react-bootstrap'

export default function Random_NFT_Viewer() {
    
    const collections = [
        { cont: "0x82262bFba3E25816b4C720F1070A71C7c16A8fc4", start: 1, total: 500 },
        { cont: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270", start: 159000000, total: 1024 }
    ]
    const numCol = collections.length;

    const [collection, setCollection] = useState(Math.floor(Math.random() * numCol));

    const [contr, setContr] = useState(collections[collection].cont);
    
    const [tid, setTid] = useState(Math.floor(Math.random() * (collections[collection].total) + collections[collection].start));

    const refresh = ()=>{
        // re-render the component
        setCollection(Math.floor(Math.random() * numCol));
        setTid(Math.floor(Math.random() * (collections[collection].total) + collections[collection].start));
        setContr(collections[collection].cont);
    }

    return (
        <div className="wrap-viewer">
            <Button className="float-right" onClick={ refresh } variant="success">View New NFT</Button>
            <p>
                <strong>contract:</strong> <small>{contr}</small>
                <br /><strong>token ID:</strong> <small>{tid}</small>
            </p>
            <NFTE contract={contr} tokenId={tid} />
        </div>
    )
}
