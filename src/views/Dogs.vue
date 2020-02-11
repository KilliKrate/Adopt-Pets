<template>
  <div>
    <h1>Dogs for Adoption</h1>
    <b-table striped hover :items="dogs">
      <template v-slot:cell(name)="data">
        <a :href="`/pets/dogs/${data.index}`">{{data.value}}</a>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>
