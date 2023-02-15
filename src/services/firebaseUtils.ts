import firebase from "firebase/compat";
import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from "@firebase/firestore";
import SnapshotOptions = firebase.firestore.SnapshotOptions;
import DocumentData = firebase.firestore.DocumentData;

export const convertFromFirestore = <T>(
  querySnapshot: QuerySnapshot<T>
): T[] => {
  const toReturn: T[] = [];
  querySnapshot.forEach((doc) => {
    toReturn.push({
      id: doc.id,
      ...doc.data(),
    } as T);
  });

  return toReturn;
};

export const converter = <
  T extends DocumentData
>(): FirestoreDataConverter<T> => ({
  toFirestore: (data: T) => data,
  fromFirestore: (
    snapshot: QueryDocumentSnapshot<DocumentData>,
    options?: SnapshotOptions
  ) => snapshot.data() as T,
});
