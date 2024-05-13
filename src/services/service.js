import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firestore";
import { data } from "../../dbobjects";

export const getAllSets = async () => {
  const collectionRef = collection(db, "lego-sets");
  const snapshot = await getDocs(collectionRef);
  //console.log(snapshot.docs);
  return snapshot.docs.map((doc) => {
    //console.log(doc.data());
    return { id: doc.id, ...doc.data() };
  });
};

export const getSetById = async (id) => {
  const docRef = doc(db, "lego-sets", id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    throw new Error("Could not find set with id " + id);
  }
  return { id: snapshot.id, ...snapshot.data() };
};

export const updateSetById = async (id, data) => {
  const docRef = doc(db, "lego-sets", id);
  await updateDoc(docRef, data);
};

export const addSetsToDB = async () => {
  const collectionRef = collection(db, "lego-sets");

  try {
    data.forEach(async (obj) => {
      const docRef = await addDoc(collectionRef, obj);
    });
  } catch (e) {
    console.warn(e);
    throw e;
  }
};
