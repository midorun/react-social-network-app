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

export type PostType = {
  id: number,
  src: string,
  name: string,
  date: string,
  content: string,
  likeCount: number
}