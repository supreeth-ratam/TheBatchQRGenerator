import { app } from "../FireBaseConfig/firebaseconfig";
import { getFirestore, getDocs, collection,deleteDoc,doc } from "firebase/firestore";
import { useState, useEffect } from "react";

function AllClients() {
  const db = getFirestore(app);
  const [clients, setClients] = useState([]);
  const [change, setChange] = useState(false);

  const getClientList = async () => {
    try {
      const data = await getDocs( collection(db, "clients"));
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
        console.log(filteredData)
        setClients(filteredData);
        console.log(clients)
    } catch (err) {
      console.error(err);
    }
    };
    const deleteClient = async(id)=>{
        const userDoc =  doc(db,"clients",id);
        await deleteDoc(userDoc);  
        setChange(prev => !prev);
      }

    useEffect(() => {
        getClientList();
       
  }, [change]);

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Company name
              </th>
              <th scope="col" className="px-6 py-3">
                slug url
              </th>
              <th scope="col" className="px-6 py-3">
                email
              </th>
              <th scope="col" className="px-6 py-3">
                update
              </th>
              <th scope="col" className="px-6 py-3">
                delete
              </th>
            </tr>
          </thead>
          <tbody>
            {clients && clients.map((item) => {
                return <>
                <tr className="bg-white border-b  ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.sluguri}</td>
                        <td className="px-6 py-4">{item.email}</td>
                        <td className="px-6 py-4">update</td>
                        <td className="px-6 py-4">
                            <button className="text-red-500" onClick={() => deleteClient(item.id)}>delete</button>
                </td>
              </tr>
            </>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllClients;
