<template>
  <div>
    <p>Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>    
</template>

<script>
export default {
  data: function (){
    return {
      status: 'Critical'
    }    
  },
  methods: {
    changeStatus() {
      this.status = 'Normal'
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
