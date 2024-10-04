"use client";

// import Action
import { saveDistributor } from "@/lib/actions";

import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/buttons";

const CreateForm = () => {
  const [state, formAction] = useFormState(saveDistributor, null);

  return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          <label htmlFor="distributor_name" className="block text-sm font-medium text-gray-900">
            Distributor Name
          </label>

          {/* Input Field */}
          <input
            type="text"
            name="distributor_name"
            id="distributor_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Distributor Name..."
          />

          {/* Name Field Error Message */}
          <div id="distributor-name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.distributor_name}</p>
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="city" className="block text-sm font-medium text-gray-900">
            City
          </label>

          {/* Input Fields */}
          <input type="text" name="city" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="City..." />

          {/* city Field Error Message */}
          <div id="city-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.city}</p>
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="region" className="block text-sm font-medium text-gray-900">
            State/region
          </label>

          {/* Input Fields */}
          <input type="text" name="region" id="region" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="State/Region..." />

          {/* region Field Error Message */}
          <div id="region-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.region}</p>
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
            Phone
          </label>

          {/* Input Fields */}
          <input type="text" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Phone Number..." />

          {/* Phone Field Error Message */}
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Email
          </label>

          {/* Input Fields */}
          <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Email..." />

          {/* email Field Error Message */}
          <div id="city-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.email}</p>
          </div>
        </div>

        {/* Error Message */}
        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.message}</p>
        </div>

        <SubmitButton label="save" />
      </form>
    </div>
  );
};

export default CreateForm;
