"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";
import { IoAddSharp } from "react-icons/io5";
import clsx from "clsx";

// ================ Distributor Button ==================
export const CreateButton = () => {
  return (
    <Link href="/distributor/create" className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] mt-5 rounded-sm text-sm">
      <IoAddSharp size={20} />
      Create
    </Link>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link href={`/distributor/edit/${id}`} className=" rounded-sm border p-1 hover:bg-gray-100">
      {/* <IoPencil size={20} /> */}
      Edit
    </Link>
  );
};

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  // clsx() mempunyai dua parameter yaitu default dan kondisi tertentu
  const classname = clsx("text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center", {
    "opacity-50 cursor-progress": pending,
  });

  return (
    <button type="submit" className={classname} disabled={pending}>
      {label === "save" ? <span>{pending ? "Saving..." : "Save"}</span> : <span>{pending ? "Updating..." : "Update"}</span>}
    </button>
  );
};

// ============= MENU ==================
export const HomeButton = () => {
  return (
    <Link href="/home" className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">
      Home
    </Link>
  );
};

export const CatalogueButton = () => {
  return (
    <Link href="/catalogue" className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">
      Catalogue
    </Link>
  );
};

export const OrderButton = () => {
  return (
    <Link href="/order" className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">
      Order Status
    </Link>
  );
};

export const DistributorButton = () => {
  return (
    <Link href="/distributor" className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">
      Distributor
    </Link>
  );
};

export const UploadButton = () => {
  return (
    <Link href="/upload" className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">
      Upload
    </Link>
  );
};
