export default defineEventHandler(async (event) => {
  
  const { data } = await $fetch('https://dummyjson.com/products')

  return data
});