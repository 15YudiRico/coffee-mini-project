"use server";

// import lib to make validation
import { z } from "zod";

import { prisma } from "@/lib/prisma";

// Revalidate data
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Create a schema to init validation
const ContactSchema = z.object({
  distributor_name: z.string().min(1),
  city: z.string().min(1),
  region: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().min(11),
});

// FUNCTION ADD Dristributor | CREATE FUNCION
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveDistributor = async (prevState: any, formData: FormData) => {
  // Cara untuk mengambil value dari form
  const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()));

  // Membuat validasi
  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.distributor.create({
      data: {
        distributor_name: validatedFields.data.distributor_name,
        city: validatedFields.data.city,
        region: validatedFields.data.region,
        phone: validatedFields.data.phone,
        email: validatedFields.data.email,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { message: "Failed to Create Distributor" };
  }

  // Revalidate data
  revalidatePath("/distributor");
  redirect("/distributor");
};

// FUNCTION Update Distributor | CREATE FUNCION
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateDistributor = async (id: string, prevState: any, formData: FormData) => {
  // Cara untuk mengambil value dari form
  const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()));

  // Membuat validasi
  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.distributor.update({
      data: {
        distributor_name: validatedFields.data.distributor_name,
        city: validatedFields.data.city,
        region: validatedFields.data.region,
        phone: validatedFields.data.phone,
        email: validatedFields.data.email,
      },
      where: { id },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { message: "Failed to Update Distributor" };
  }

  // Revalidate data
  revalidatePath("/distributor");
  redirect("/distributor");
};
