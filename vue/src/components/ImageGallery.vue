<template>
  <div class="image-container">
    <img v-for="url in imageUrls" :src="url" :key="url" alt="图片" />
  </div>
</template>

<script>
export default {
  name: 'ImageGallery',
  props: {
    imageUrls: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.image-container img {
  width: 200px;
  height: 200px;
  margin: 10px;
}
</style>
