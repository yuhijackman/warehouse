<template>
<div class="card">
  <div class="list-content">
    <h3 class="card__title">{{project.title}}</h3>
    <p class="card__deadline">{{project.deadline}}</p>
    <p class="card__status">{{project.status}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "Card",
  props: {
    project: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
  }
}
</script>


<style lang="scss" scoped>
.card {
  border-radius: 10px;
  text-align: center;
  display: flex;
  padding: 0.5em;
	width: 100%;
}


.list-content {
  background:rgb(232, 91, 70);
  display: flex;
  flex-direction: column;
  padding: 1em;
	width: 100%;
}

.list-content p {
	flex: 1 0 auto;
}

@screen sm {
  .card {
    width: 50%;
  }
}

@screen xl {
  .card {
    width: 33.33%;
  }
}
</style>

