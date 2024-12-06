"use client";
import { useState, useEffect } from "react";
import { get, ref } from "firebase/database";
import { database } from "@/lib/firebase";
import BiodataCard from "./biodata_card";

const DataComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const usersRef = ref(database, "AllBiodata");
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(Object.entries(snapshot.val()));

          console.log(snapshot.val());
        } else {
          alert("Somthing wrong! No data found!!");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  //   useEffect(() => {

  //     fetch(
  //       "https://dindar-patro-patri-b8013-default-rtdb.firebaseio.com/AllBiodata.json"
  //     )
  //       .then((res) => res.json())
  //       .then((res) => {
  //
  //         console.log(res);
  //         // res.map((x) => console.log(x));
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  return (
    <div>
      <div className="w-full text-center">
        <h1 className="px-2 py-4 text-3xl text-purple-800 underline underline-offset-8 decoration-wavy">
          “সমস্ত বায়োডাটা”
        </h1>
        <p className="text-pink-700">
          আপনার কোনো বায়োডাটা পছন্দ হলে আমাদের পেইজে মেসেজ দিন।
        </p>
      </div>

      <div>
        {data ? (
          <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1   mt-3">
            {data.map((singleData) => (
              <div
                key={singleData[0]}
                className="h-max rounded-xl m-2  text-white p-3"
              >
                <BiodataCard dataName={singleData[0]} dataObj={singleData[1]} />
              </div>
            ))}
          </div>
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
};

export default DataComponent;
