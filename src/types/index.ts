export interface Wish {
  id: string;
  recipientName: string;
  message: string;
  authorName: string;
  image?: string;
  createdAt: string;
}

export interface WishSlot {
  id: string;
  recipientName: string;
  wish?: Wish;
}