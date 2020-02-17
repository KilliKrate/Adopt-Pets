<template>
  <div class="home">
    <h1>Adopt a new best friend!</h1>
    <!-- {{getAllCats.length}}
    {{animalsCount}} -->
    <button class="btn btn-primary mt-5" @click="togglePetForm" v-if="!showPetForm">Add new pet</button>
    <b-form class="mt-5" @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-2" label="Pet Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-2">
        <b-form-select id="input-2" v-model="formData.species" :options="['cats', 'dogs']" required></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet Age:" label-for="input-3">
        <b-form-input id="input-3" type="number" v-model="formData.age" required></b-form-input>
      </b-form-group>

      <b-button class="mx-2" type="submit" variant="primary">Submit</b-button>
      <b-button class="mx-2" @click="togglePetForm">Cancel</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats'
    ])
  },
  methods: {
    ...mapActions(['addPet']),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)
      this.showPetForm = false
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>
