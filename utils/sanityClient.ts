import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-01-31",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_PROJECT_TOKEN,
});

export default client;
