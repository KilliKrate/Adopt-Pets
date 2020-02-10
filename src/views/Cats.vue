<template>
  <div>
    <b-table striped hover :cats="cats"></b-table>
  </div>
</template>

<script>
import cats from '@/data/cats'

export default {
  data () {
    return {
      cats
    }
  }
}
</script>
