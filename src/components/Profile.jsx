import { useParams } from "react-router-dom";
import { app } from "../FireBaseConfig/firebaseconfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { query, where } from "firebase/firestore";

import { useEffect, useState } from "react";

function Profile() {
  const slug = useParams().slug;
    const [details, setDetails] = useState(null);
    const [display, setDisplay] = useState(false);

  const snapshot = async (q) => {
      const querySnapshot = await getDocs(q);
      const collectionLength = querySnapshot.size;
      console.log(collectionLength)
      if (collectionLength ) {
          setDisplay(true)
          querySnapshot.forEach((doc) => {
            setDetails(doc.data())
          });
      } else {
        setDisplay(false)
      }
      console.log(details)
      
  };

  useEffect(() => {
      const db = getFirestore(app);
      console.log(slug)
    const slugsRef = collection(db, "clients");
    const q = query(
      slugsRef,
      where("sluguri", "==", slug)
    );
    snapshot(q);
  },[]);
    return <>
        {display ? <div>User exists {details.name}</div>:<div>User does not exist</div>}
    </>
}

export default Profile;
