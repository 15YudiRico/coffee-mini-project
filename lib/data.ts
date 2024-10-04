import { prisma } from "@/lib/prisma";

// ===================== TABLE CATALOGUE ======================
// READ Catalogue
export const getCatalogues = async () => {
  try {
    const catalogue = await prisma.catalogue.findMany();
    return catalogue;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Failed to fetch Catalogue data");
  }
};

// ====================== TABLE Distributor ======================
export const getDistributors = async () => {
  try {
    const distributors = await prisma.distributor.findMany();
    return distributors;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Failed to fetch Distributor data");
  }
};

// get data by id from DB (Update by ID)
export const getDistributorByID = async (id: string) => {
  try {
    const contact = await prisma.distributor.findUnique({
      where: { id },
    });
    return contact;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Failed to fetch Distributor data");
  }
};
