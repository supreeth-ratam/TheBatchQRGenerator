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
        {display ? <div className="h-screen w-full flex justify-center items-center flex-col gap-2">
            <p className="text-3xl font-bold uppercase">{details.name}</p>
            <p className="text-xl">{details.description}</p>
            <a href={details.reviewuri} className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Click Here</a>

        </div>:<div>User does not exist</div>}
    </>
}

export default Profile;
