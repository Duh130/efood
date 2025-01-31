import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Defina os tipos corretos
interface Restaurante {
  id: string;
  nome: string;
  capa: string;
  descricao: string;
}

interface Produto {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
  preco: number;
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getCardapio: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getProduto: builder.query<Produto[], string>({
      query: (id) => `restaurantes/${id}/cardapio`
    })
  })
});

export const {
  useGetRestaurantesQuery,
  useGetCardapioQuery,
  useGetProdutoQuery
} = api;
export default api;
