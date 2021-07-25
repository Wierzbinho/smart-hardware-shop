
export const getProducts = async ({page}) => {
  const respProducts = await fetch(`http://localhost:8080/products?_page=${page}&_limit=20`);
  return respProducts.json();
}