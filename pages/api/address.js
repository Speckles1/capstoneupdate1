import { mongooseConnect } from '@/lib/mongoose';
import { clerkClient } from '@clerk/nextjs';
import { getAuth } from '@clerk/nextjs/server';
import { Address } from '@/models/Address';

export default async function handle(req, res) {
  await mongooseConnect();
  const { userId } = getAuth(req);
  const user = await clerkClient.users.getUser(userId);

  if (req.method === 'PUT') {
    const address = await Address.findOne({ userEmail: user.primaryEmailAddressId });
    if (address) {
      res.json(await Address.findByIdAndUpdate(address._id, req.body));
    } else {
      res.json(await Address.create({ userEmail: user.primaryEmailAddressId, ...req.body }));
    }
  }
  if (req.method === 'GET') {
    const address = await Address.findOne({ userEmail: user.primaryEmailAddressId });
    res.json(address);
  }
}
