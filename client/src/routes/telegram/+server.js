import { redirect } from "@sveltejs/kit";

export const GET = async ({ url }) => {
  console.log(url);
  throw redirect(303, "/");
};
