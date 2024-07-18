import { useParams, Link } from "react-router-dom"

export function Product() {
  const { slug } = useParams();

  return (
    <>
      <h2>Página de Produtos!</h2>
      <h1>Nome do produto: {slug}</h1>

      <Link to='/product/Dark Souls'>Dark Souls</Link>
      <Link to='/product/Elden Ring'>Elden Ring</Link>
    </>
  )
}