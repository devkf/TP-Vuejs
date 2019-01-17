<template>
  <div id="app">
      <div class="container">
          <div class="row">
              <div class="col-lg-7">
                  <div class="row">
                      <div class="col-md-6" v-for="product in products" :key="product.id">
                        <Product :product="product" v-on:add-to-cart="addtocart($event)" :isInCart="isInCart(product)"></Product>
                      </div>
                  </div>
              </div>
              <div class="col-lg-5  my-5">
                <Cart :items="cart" v-on:removeItemCart="removeItemCart($event)" v-on:pay="pay()"></Cart>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import products from '@/products.json';
import Product from '@/components/product.vue';
import Cart from '@/components/Cart.vue';



export default {
  name: 'app',
  components: {
    Product,
    Cart
  },
  data(){
    return {
        products,
        cart:[]
    }
  },
  methods: {
    addtocart(product){
       this.cart.push(product)
    },
    isInCart(product){
        const item= this.cart.find(item => item.id === product.id);
        if(item){
            return true;
        }
        return false;
    },
    removeItemCart(event){
       this.cart = this.cart.filter(item => item.id != event.id);
    },
    pay(){
        this.cart = [];
        alert("Shoping completed")
    }
  }
}
</script>

<style>
body {
    background-color: #FBF8F3;
}
</style>
