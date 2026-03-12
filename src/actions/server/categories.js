import { collection, dbConnect } from "@/lib/dbConnect";

const categoryCollections = await dbConnect(collection.CATEGORIES);

export const getCategories = async () => {
  const products = await categoryCollections
    .find()
    .sort({ createdAt: -1 })
    .toArray();
  const formattedProducts = products.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
  return formattedProducts;
};
