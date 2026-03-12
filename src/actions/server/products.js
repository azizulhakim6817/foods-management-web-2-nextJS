"use server";
import { authOptions } from "@/lib/authOptions";
import { collection, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

const collections = await dbConnect(collection.PRODUCTS);
const categoryCollections = await dbConnect(collection.CATEGORIES);

//! create product--------------------------------------
export const createProduct = async (payload) => {
  const { user } = await getServerSession(authOptions);
  if (!user) return { success: false };

  const newProduct = {
    ...payload,
    createdAt: new Date().toISOString(),
  };

  // create product
  const result = await collections.insertOne(newProduct);

  // Insert category only if not exists
  const existingCategory = await categoryCollections.findOne({
    category: payload.category,
  });

  if (!existingCategory) {
    await categoryCollections.insertOne({
      category: payload.category,
      imageUrl: payload.imageUrl,
      createdAt: new Date().toISOString(),
    });
  }

  return {
    success: {
      result,
      insertedId: result.insertedId.toString(),
    },
  };
};

//! get all porducts -------------------------------
export const getAllproducts = async () => {
  const products = await collections
    .find()
    .sort({ createdAt: -1 })

    .toArray();
  const formattedProducts = products.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
  return formattedProducts;
};

//! single product-----------------------------------
export const singleProductById = async (id) => {
  const result = await collections.findOne({ _id: new ObjectId(id) });
  return result;
};

//! get all porducts -------------------------------
export const getMenageProducts = async () => {
  const { user } = await getServerSession(authOptions);
  if (!user) return { success: false };

  const products = await collections
    .find()
    .sort({ createdAt: -1 })

    .toArray();
  const formattedProducts = products.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
  return formattedProducts;
};
//! get all porducts -------------------------------
export const deleteProduct = async (id) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return {
        success: false,
        message: "Unauthorized",
      };
    }

    const query = { _id: new ObjectId(id) };
    const result = await collections.deleteOne(query);
    if (result.deletedCount === 1) {
      return {
        success: true,
        message: "Product deleted successfully",
      };
    }
    return {
      success: false,
      message: "Product not found",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
