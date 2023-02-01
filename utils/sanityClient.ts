import { createClient } from "next-sanity";

const client = createClient({
  projectId: "oe2z6qkw",
  dataset: "production",
  apiVersion: "2023-01-31",
});

export default client;
