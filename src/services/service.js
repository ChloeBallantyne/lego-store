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
