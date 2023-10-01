import * as IPFS from 'ipfs-core'

// Write
const ipfs = await IPFS.create()
const { cid } = await ipfs.add('Hello world')   
console.log(cid)

// Read

const stream = ipfs.cat(cid)
const decoder = new TextDecoder()
let data = ''

for await (const chunk of stream) {
  data += decoder.decode(chunk, { stream: true })
}

console.log("Result:")
console.log(data)