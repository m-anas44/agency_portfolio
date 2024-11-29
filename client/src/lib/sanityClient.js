import { createClient } from '@sanity/client';

export const sanityClient = createClient({
    projectId: "j907sdzv",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});
