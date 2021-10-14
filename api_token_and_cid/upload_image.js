const { NFTStorage, File } = require('nft.storage')
const fs = require('fs')

const endpoint = 'https://api.nft.storage'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDhkM0JEOTJlQzdEZWZiMUMyRUY5Njg4MWMxMDYxYmQyNjJhNTc5ODciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzMzQ3MjYxMTEzNywibmFtZSI6InNjb3R0YW1vb3NoX05GVF9oYWNrYXRob24ifQ.MJiWVNZ27e8dSIAsn3MF98ErWB2G_Vd46tbimBigQNM'

async function main() {
  const storage = new NFTStorage({ endpoint, token })
  const metadata = await storage.store({
    name: 'blue lines image',
    description: 'abstract lines with blue tones and soft focus',
    image: new File([await fs.promises.readFile('abstract_lines.jpg')], 'abstract_lines.jpg', {
      type: 'image/jpg',
    }),
  })
  console.log('IPFS URL for the metadata:', metadata.url)
  console.log('metadata.json contents:\n', metadata.data)
  console.log(
    'metadata.json contents with IPFS gateway URLs:\n',
    metadata.embed()
  )
}
main()