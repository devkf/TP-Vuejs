<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="item in items" :key="item.id">
                {{ item.title }} - $ {{ item.price }}
                <button class="btn badge badge-danger float-right" @click="$emit('removeItemCart', item)">Remove from cart</button>
            </li> 
        </ul>

        <div class="card p-3 my-5">
            <h4 class="text-center">$ {{total}}</h4>
        </div>

        <button class="btn btn-info form-control" @click="$emit('pay')" :disabled="items.length === 0">Pay Now</button>
    </div>
</template>

<script>
export default {
    props:['items'],
    computed: {
        total(){
            return this.items.reduce((acc, item) => acc + Number(item.price), 0);
        }
    }

}
</script>

