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

export const getAllSets = async () => {
  const collectionRef = collection(db, "lego-sets");
  const snapshot = await getDocs(collectionRef);
  //console.log(snapshot.docs);
  return snapshot.docs.map((doc) => {
    //console.log(doc.data());
    return { id: doc.id, ...doc.data() };
  });
};

export const getSetById = async () => {
  const docRef = doc(db, "lego-sets", id);
  const snapshot = await getDoc(docRef);
  if(!snapshot.exists()) {
    throw new Error ("Could not find set with id " + id);
  }
  return { id: snapshot.id, ...snapshot.data() };
}