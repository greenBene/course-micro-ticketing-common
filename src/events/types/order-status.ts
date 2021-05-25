export enum OrderStatus {
    // Order created, but ticket had not been reserved
    Created = 'created',
    // Order cancelled by user, ticket not available, or order expires before payment
    Cancelled = 'cancelled',
    // Order has successfully reserved the ticket
    AwaitingPayment = 'awaiting:payment',
    // Order has reserved ticket and user has payed
    Complete = 'complete'
}