"use client";

// import Action
// import { saveDistributor } from "@/lib/actions";

// import { useFormState } from "react-dom";
// import { SubmitButton } from "@/components/buttons";

const UploadForm = () => {
  //   const [state, formAction] = useFormState(saveDistributor, null);

  return (
    <div>
      <form action={"#"}>
        <div className="mb-5">
          <label htmlFor="title" className="block text-sm font-medium text-gray-900">
            Title
          </label>

          {/* Input Field */}
          <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title..." />
        </div>

        <div className="mb-5">
          <label htmlFor="docfile" className="block text-sm font-medium text-gray-900">
            Document File
          </label>

          {/* Input Fields */}
          <input type="file" name="docfile" id="docfile" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="City..." />
          <button className="text-white bg-blue-500 hover:bg-blue-600 font-small rounded-sm text-sm px-1 py-2 text-center">Upload</button>
        </div>

        <div className="mb-5">
          <label htmlFor="author" className="block text-sm font-medium text-gray-900">
            Author
          </label>

          {/* Input Fields */}
          <input type="text" name="author" id="author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Author..." />
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center">
          Add Document
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
