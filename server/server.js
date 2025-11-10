const mongoose = require('mongoose')
const Document = require("./Document")
mongoose.connect("mongodb://localhost/editor", {
})


const io = require('socket.io')(3001, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    },
})

const defaultValue = { ops: [{ insert: '\n' }] }



io.on("connection", socket => {
    socket.on('get-document', async documentId => {
        const document = await findOrCreateDocument(documentId)
        socket.join(documentId)
        socket.emit('load-document', document.data)

        socket.on("send-changes", delta => {
            //console.log(delta)
            socket.broadcast.to(documentId).emit("receive-changes", delta)
        })
        socket.on("save-document", async data => {
            await Document.findByIdAndUpdate(documentId, { data })
        })
    })
})

async function findOrCreateDocument(id){
    if (id == null) return

    let document = await Document.findById(id)
    if (document) return document

    try {
        document = await Document.create({ _id: id, data: defaultValue })
        return document
    } catch (error) {
        console.error("Error creating document:", error)
        return null
    }
}
