import { mongooseConnect } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { clerkClient } from '@clerk/nextjs';
import { getAuth } from '@clerk/nextjs/server';

export default async function handle(req, res) {
  await mongooseConnect();
  const { userId } = getAuth(req);
  const user = await clerkClient.users.getUser(userId);

  res.json(await Order.find({ userEmail: user.primaryEmailAddressId }));
}
