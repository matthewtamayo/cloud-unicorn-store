import HomePage from './home-page'
import ProductPage from './product-page'

export default function Main() {
  // for some reason if you pass a prop to a page, once the url is redirected the props don't get passed
  // for now store states inside the pages and not pass them to other pages

  return <ProductPage />
}
