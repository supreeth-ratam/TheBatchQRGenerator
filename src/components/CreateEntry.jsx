import { app } from "../FireBaseConfig/firebaseconfig";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { useState } from "react";

function CreateEntry() {
  const db = getFirestore(app);
  const [formData, setFormData] = useState();
  
  const addProject = async () => {
    document.getElementById("submit").disabled = true;
    await addDoc(collection(db,"clients"),formData);
    document.getElementById("clientForm").reset();
    alert("Project added Succesfully");
    document.getElementById("submit").disabled = false;
  };
    const handleOnchange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value,
   })
  };
  return (
    <div>
      <h1 className="text-4xl font-bold text-center capitalize mt-16 text-gray-800">
        Q Connect Technologies
      </h1>
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-8">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          QR Linking Form
        </h1>
        <form id="clientForm">
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                QR URL
              </label>
              <input
                name="sluguri"
                onChange={(e) => handleOnchange(e)}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="username"
              >
                Company Name
              </label>
              <input
                name="name"
                onChange={(e) => handleOnchange(e)}
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Email Address
              </label>
              <input
                name="email"
                onChange={(e) => handleOnchange(e)}
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Page URL
              </label>
              <input
                name="reviewuri"
                onChange={(e) => handleOnchange(e)}
                id="passwordConfirmation"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Phone Number
              </label>
              <input
                name="phone"
                onChange={(e) => handleOnchange(e)}
                id="passwordConfirmation"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Date
              </label>
              <input
                name="date"
                onChange={(e) => handleOnchange(e)}
                id="date"
                type="date"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Description
              </label>
              <textarea
                id="textarea"
                type="textarea"
                name="description"
                onChange={(e) => handleOnchange(e)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Brand Logo
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600 items-center">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-indigo-600 rounded-md font-medium text-white hover:font-bold px-2 py-2 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="">Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only "
                      />
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 1MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
                      <button
                          id="submit"
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
              onClick={() => addProject()}
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default CreateEntry;
