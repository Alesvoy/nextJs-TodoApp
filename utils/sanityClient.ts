import { createClient } from "next-sanity";

const client = createClient({
  projectId: "oe2z6qkw",
  dataset: "production",
  apiVersion: "2023-01-31",
  useCdn: true,
  token:
    "sk4EHKSw9pEzHogR5t8QetS0bEIGTEKEndqOyuOCaREhGvty2Eak73FPc8ttJMAE71hsTWkBHFSfQixK34V5tThVAuJDMlWwqhvLboUMRXB1DPNmhIBectO5KtIJwrMS0LYSXPdUNhCJpDHPk4T3KbuNyjQo1wM2MpUYRuy2ok9twrGEBywD",
});

export default client;
