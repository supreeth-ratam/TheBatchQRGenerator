import { app } from "../FireBaseConfig/firebaseconfig";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { slugs } from "./slugs";

const db = getFirestore(app)

const addSlug = async (slug) => {
    try {
        const docRef = await addDoc(collection(db, "slugs"), {
            slugid: slug,
            inuse: false
        });
        console.log("Document written with slug: ", slug," at ",docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export const addAllSlugs = async () => {
    slugs.forEach((slug) => addSlug(slug))
}