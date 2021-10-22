import { useState } from 'react'
import { NFTE } from '@nfte/react'
import { Button } from 'react-bootstrap'

export default function Random_NFT_Viewer() {
    
    const collections = [
        { cont: "0x82262bFba3E25816b4C720F1070A71C7c16A8fc4", 
            title: "Solvency by Ezra Miller",
            start: 1, 
            total: 500 
        },
        { cont: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270", 
            title: "Fragments of an Infinite Field by Monica Rizzolli",
            start: 159000000, 
            total: 1024 
        },
        { cont: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270",
            title: "Alien Insects by Shvembldr",
            start: 137000000,
            total: 1000
        },
    ]
    const numCol = collections.length

    const [collection, setCollection] = useState(Math.floor(Math.random() * numCol))

    const [contr, setContr] = useState(collections[collection].cont)

    const [title, setTitle] = useState(collections[collection].title)
    
    const [tid, setTid] = useState(Math.floor(Math.random() * (collections[collection].total) + collections[collection].start))

    const refresh = ()=>{
        // re-render the component
        setCollection(Math.floor(Math.random() * numCol))
        setTid(Math.floor(Math.random() * (collections[collection].total) + collections[collection].start))
        setContr(collections[collection].cont)
        setTitle(collections[collection].title)
    }

    return (
        <>
            <h5 className="text-center pb-4">A random selection from <span className="nft-title">{title}</span></h5>
            <div className="wrap-viewer">
                <Button className="float-right" onClick={ refresh } variant="success">View New NFT</Button>
                <p>
                    <strong>contract:</strong> <small className="break-text">{contr}</small>
                    <br /><strong>token ID:</strong> <small>{tid}</small>
                </p>
                <NFTE className="break-text" contract={contr} tokenId={tid} />
            </div>
        </>
    )
}
