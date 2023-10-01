import * as IPFS from 'ipfs-core'

// Write
const ipfs = await IPFS.create()
const { cid } = await ipfs.add('Hello world')
// console.info(cid)
console.log(cid)
// QmXXY5ZxbtuYj6DnfApLiGstzPN7fvSyigrRee3hDWPCaf

// Read

const stream = ipfs.cat(cid)
const decoder = new TextDecoder()
let data = ''

for await (const chunk of stream) {
  // chunks of data are returned as a Uint8Array, convert it back to a string
  data += decoder.decode(chunk, { stream: true })
}

console.log("Result:")
console.log(data)