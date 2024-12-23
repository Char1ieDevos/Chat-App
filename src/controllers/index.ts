class IndexController {
    sendMessage(req, res) {
        const { sender, content } = req.body;
        // Logic to handle sending a message
        res.status(200).json({ message: 'Message sent successfully', sender, content });
    }

    receiveMessage(req, res) {
        // Logic to handle receiving a message
        const messages = []; // Fetch messages from the database or in-memory store
        res.status(200).json({ messages });
    }
}

export default IndexController;