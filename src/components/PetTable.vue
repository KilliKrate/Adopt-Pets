<template>
  <div>
    <h1>{{ capitalizeFirstLetter(species) }} for Adoption</h1>
    <b-table striped hover :items="pets">
      <template v-slot:cell(name)="data">
        <a :href="`/pets/${species}/${data.index}`">{{data.value}}</a>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    species: String,
    pets: Array
  },
  methods: {
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>
