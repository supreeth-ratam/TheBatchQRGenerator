import { app } from "./FireBaseConfig/firebaseconfig";
import { getFirestore } from "firebase/firestore";
import {  collection, getDocs } from "firebase/firestore";
import { addAllSlugs } from "./data/uploadData";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import CreateEntry from "./components/CreateEntry";
import AdminPanel from "./components/AdminPanel";

function App() {
  const [slugs, setSlugs] = useState(null);

  const getAllSlugs = async () => {
    try {
      const snapshot = await getDocs(collection(db, "slugs"));
      const collectionLength = snapshot.size;
      setSlugs(collectionLength);
      console.log(`Length of ${"slugs"}: ${collectionLength}`);
    } catch (error) {
      console.error("Error getting collection length:", error);
    }
  };

  useEffect(() => {
    getAllSlugs();
  }, []);

  const db = getFirestore(app);

  

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <p className="text-5xl">Tailwind CSS is Working</p>
                <p>{slugs}</p>
                <button onClick={() => addAllSlugs()}>Add all the Slugs</button>
              </>
            }
          />
          <Route path=":slug" element={ <Profile/>} />
          <Route path="/create" element={ <CreateEntry/>} />
          <Route path="/admin/*" element={ <AdminPanel/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
