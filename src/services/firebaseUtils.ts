import firebase from "firebase/compat";
import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from "@firebase/firestore";
import SnapshotOptions = firebase.firestore.SnapshotOptions;
import DocumentData = firebase.firestore.DocumentData;

/**
 * Convert a Firestore query snapshot to an array of objects with an id
 * @param querySnapshot The query snapshot to convert
 */
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

/**
 * Convert a Firestore document snapshot to an object with an id
 */
export const converter = <
  T extends DocumentData
>(): FirestoreDataConverter<T> => ({
  toFirestore: (data: T) => data,
  fromFirestore: (
    snapshot: QueryDocumentSnapshot<DocumentData>,
    options?: SnapshotOptions
  ) => snapshot.data() as T,
});
