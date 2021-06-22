export type DialogItemType = {
  id: number
  src: string
  name: string
  text: string
  messages: MessageType[]
}

export type MessageType = {
  senderId: number,
  recipientId: number,
  text: string
}