<template>
  <div class="primary icon-container">
    <v-tooltip right
               color="primary">
      <v-card-media :src="getIconSrc()"
                    class="border-50"
                    contain
                    slot="activator">
      </v-card-media>
      <div>{{category.pluralName}}</div>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: 'VenueCategoryIcon',
  props: {
    categories: {
      required: true,
      type: Array,
    },
  },
  methods: {
    getIconSrc() {
      return `${this.category.icon.prefix}32${this.category.icon.suffix}`;
    },
  },
  computed: {
    category() {
      return this.categories.find(category => category.primary);
    },
  },
};
</script>

<style lang="scss">
.icon-container {
  height: 100%;
  position: relative;
  * {
    height: 100%;
  }
  .v-card__media {
    * {
      min-height: 100px;
    }
  }
  .border-50 {
    border-radius: 50%;
  }
}
</style>
