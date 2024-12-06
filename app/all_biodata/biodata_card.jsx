import MenCardIcon from "@/public/Images/MenCardIcon.png";
import WomenCardIcon from "@/public/Images/WomenCardIcon.png";
import Image from "next/image";
import Link from "next/link";

export default function BiodataCard({ dataName, dataObj }) {
  console.log(dataObj);

  const {
    id,
    date,
    boyOrGirl,
    name,
    mobile,
    age,
    height,
    birthID,
    birthDate,
    address,
    marriedStatus,
    division,
    education,
    occupation,
    monthlyIncome,
    personalDetails,
    familyDetails,
    partnerDetails,
    fbLink,
    extra,
  } = dataObj;

  return (
    <div className="border rounded-3xl hover:ring-4 hover:ring-blue-600">
      {/* Header */}
      <div className="w-full flex justify-center   bg-purple-700 py-4 rounded-t-3xl">
        {boyOrGirl === "পাত্র" ? (
          <Image
            src={MenCardIcon}
            alt="Men Card Icon"
            placeholder="blur"
            height={100}
            className="p-2 bg-white rounded-full mt-1"
          />
        ) : (
          <Image
            src={WomenCardIcon}
            alt="Women Card Icon"
            placeholder="blur"
            height={110}
            className="p-2 bg-white rounded-full mt-1"
          />
        )}
      </div>
      <div className="bg-purple-700 text-white text-center">
        <p className="text-2xl underline decoration-dotted underline-offset-4">
          বায়োডাটা UID
        </p>
        <p className="text-xl pb-5">{id}</p>
      </div>

      {/* Middle */}
      <div className="bg-white text-black py-6 rounded-md w-full">
        <div className="flex text-xl gap-3 px-3  border py-2">
          <p className="underline decoration-wavy font-bold text-pink-700 pl-4">
            নাম:{""}
          </p>
          <p className="underline text-purple-950">{name}</p>
        </div>
        {/*  */}

        <div className="flex text-xl gap-3 px-3 border border-t-0 py-2 ">
          <p className="underline decoration-wavy font-bold text-pink-700 pl-4">
            বয়স:{""}
          </p>{" "}
          <p className="underline text-purple-950">{age}</p>
        </div>
        {/*  */}
        <div className="flex text-xl gap-3 px-3 border border-t-0  py-2">
          <p className="underline decoration-wavy font-bold text-pink-700 pl-4">
            বিভাগ:{""}
          </p>
          <p className="underline text-purple-950">{division}</p>
        </div>
      </div>
      {/* Footer */}
      <div className="w-full text-center m-6">
        <Link
          href={"/single_biodata"}
          className="text-white p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-xl hover:ring-2 hover:underline"
        >
          বিস্তারিত দেখুন
        </Link>
      </div>
    </div>
  );
}
