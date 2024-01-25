import client from "./sanity";
let sanityQuery = (query, params) => client.fetch(query, params);

export const getFeaturedRestro = () => {
  return sanityQuery(
    `*[_type=='featured']{
        ...,
        feature_restro_restaurant[]->
        {...,
            dishes[]->{...,},
            restro_type->{category_name}
        }
    }`
  );
};

export const getCategories = () => {
  return sanityQuery(`
        *[_type == 'category']
    `);
};

export const getFeaturedRestroById = (id) => {
  return sanityQuery(
   `*[_type=='featured' && _id==$id]{
        ...,
        feature_restro_restaurant[]->
        {...,
            dishes[]->{...,},
            restro_type->{category_name}
        }
    }`,
    { id }
  );
};
