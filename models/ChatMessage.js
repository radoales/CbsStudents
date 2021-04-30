class ChatMessage {
  constructor(id, createdDate, message, user, isRead) {
    this.id = id
    this.createdDate = createdDate
    this.message = message
    this.user = user
    this.isRead = isRead
    console.log('pachanga', this.message)
  }
}

export default ChatMessage
