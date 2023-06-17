<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="_container">
        <p>Shop page</p>
        <div class="item__wrapper">
          <ShopItem
            v-for="product in shopList"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ShopItem from "@/components/ShopItem.vue";
export default {
  data() {
    return {
      shopList: null,
    };
  },
  created() {
    this.shopList = this.$store.getters.getShopList;
    console.log(this.shopList);
  },
  components: { ShopItem },
};
</script>
