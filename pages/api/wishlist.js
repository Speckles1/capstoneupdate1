import { mongooseConnect } from '@/lib/mongoose';
import { WishedProduct } from '@/models/WishedProduct';
import { clerkClient } from '@clerk/nextjs';
import { getAuth } from '@clerk/nextjs/server';

export default async function handle(req, res) {
  await mongooseConnect();
  const { userId } = getAuth(req);
  const user = await clerkClient.users.getUser(userId);

  if (req.method === 'POST') {
    const { product } = req.body;
    const wishedDoc = await WishedProduct.findOne({
      userEmail: user.primaryEmailAddressId,
      product,
    });
    if (wishedDoc) {
      await WishedProduct.findByIdAndDelete(wishedDoc._id);
      res.json({ wishedDoc });
    } else {
      await WishedProduct.create({ userEmail: user.primaryEmailAddressId, product });
      res.json('created');
    }
  }

  if (req.method === 'GET') {
    res.json(
      await WishedProduct.find({ userEmail: user.primaryEmailAddressId }).populate('product')
    );
  }
}
