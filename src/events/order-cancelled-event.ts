import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

export interface OrderCancelledEvent {
    subject: OrderStatus.Cancelled
    data: {
        id: string
        ticket: {
            id: string
        }
    }
}