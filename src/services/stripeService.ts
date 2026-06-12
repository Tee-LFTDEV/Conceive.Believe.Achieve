/**
 * Stripe Integration Service (Mock)
 * In production, this would use the Stripe Node.js SDK and your STRIPE_SECRET_KEY.
 */

export const createCheckoutSession = async (params: { 
  type: 'individual' | 'bulk', 
  quantity: number,
  clubCode?: string 
}) => {
  const price = params.type === 'bulk' && params.quantity >= 100 ? 75 : 100; // in cents
  const amount = price * params.quantity;

  console.log(`[Stripe Mock] Creating ${params.type} checkout session`);
  console.log(`[Stripe Mock] Amount: $${(amount / 100).toFixed(2)} AUD`);
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 800));

  return {
    url: `/success?session_id=mock_session_${Date.now()}`,
    amount: amount
  };
};

export const verifyPayment = async (sessionId: string) => {
  return sessionId.startsWith('mock_session_');
};
