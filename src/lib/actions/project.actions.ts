"use server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
const DATABASE = "PERSONAL";
const COLLECTION = "Project";

export const getProjects = async () => {
  try {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const projects = await db.collection(COLLECTION).find({}).toArray();
    return projects as Project[];
  } catch (error) {
    console.error(error);
    return [] as Project[];
  }
};

export const getProject = async (id: string) => {
  try {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const project = await db
      .collection(COLLECTION)
      .findOne({ _id: new ObjectId(id) });
    return project as Project;
  } catch (error) {
    console.error(error);
    return {} as Project;
  }
};
