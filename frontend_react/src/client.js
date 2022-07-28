import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// export const client = sanityClient({
//   projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
//   dataset: 'production',
//   apiVersion: '2022-02-01',
//   useCdn: true,
//   token: process.env.REACT_APP_SANITY_TOKEN,
// });

export const client = sanityClient({
  projectId: 'j1k187tc',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skAZQiplQphdcIkblDUtLARCHRacJ6WEMfvgLAA63TYB1NBFmAw89o0ySL8DrRhk4LlNMQKuiGN5Z7LaWmIVC6m4zMK5lr0xFDYsOzAfD8OFsgs9GP3XP7BtQvQbkekaI2d57JpZVxMA2pxxc1z6bHWsKot6TKPyl9idfJKJxrkYCtKvGA4e'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

