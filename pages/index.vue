<script setup>
const query = gql`
  query Pokemons {
    pokemons(orderBy: id_ASC, first: 50) {
      createdAt
      description
      id
      nom
      publishedAt
      slug
      updatedAt
      image {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: crop, height: 256, width: 256 } }
          }
        )
      }
    }
  }
`;

const pokemons = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
pokemons.value = data.value.pokemons;
</script>

<template>
  <ul
    v-if="pokemons"
    class="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6"
  >
    <li
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      class="flex flex-col items-center border-4 border-green-500 rounded-lg bg-white w-fit"
    >
      <NuxtLink :to="`/pokemon/${pokemon.slug}`">
        <NuxtImg :src="pokemon.image.url" :alt="pokemon.nom" />
        <h2 class="text-lg text-center font-serif">{{ pokemon.nom }}</h2>
      </NuxtLink>
    </li>
  </ul>
  <ul v-else>
    <li>Loading...</li>
  </ul>
</template>
