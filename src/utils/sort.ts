export const byDate = products =>
  products.filter(({ date }) => Date.parse(date) <= Date.now())

export const byCollection = (products, title, contentType) => {
  const isCollection = contentType === 'collections'

  const byCollection = ({ collections }) =>
    collections &&
    collections.filter(({ collection }) => collection === title).length

  return isCollection ? products.filter(byCollection) : products
}
