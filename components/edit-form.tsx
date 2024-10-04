"use client";

// import Action
import { updateDistributor } from "@/lib/actions";

import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/buttons";
import type { Distributor } from "@prisma/client";

const UpdateForm = ({ distributor }: { distributor: Distributor }) => {
  const UpdateDistributorWithID = updateDistributor.bind(null, distributor.id);
  const [state, formAction] = useFormState(UpdateDistributorWithID, null);

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
            defaultValue={distributor.distributor_name}
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
          <input
            type="text"
            name="city"
            id="city"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="City..."
            defaultValue={distributor.city}
          />

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
          <input
            type="text"
            name="region"
            id="region"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="State/Region..."
            defaultValue={distributor.region}
          />

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
          <input
            type="text"
            name="phone"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Phone Number..."
            defaultValue={distributor.phone}
          />

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
          <input
            type="text"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Email..."
            defaultValue={distributor.email}
          />

          {/* email Field Error Message */}
          <div id="city-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.email}</p>
          </div>
        </div>

        {/* Error Message */}
        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.message}</p>
        </div>

        <SubmitButton label="update" />
      </form>
    </div>
  );
};

export default UpdateForm;
