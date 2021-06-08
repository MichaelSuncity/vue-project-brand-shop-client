<template>
  <div>
    <main>
    <div class="containerWrap checkOutWrap">
        <details class="checkOutDetails" open>
            <summary>
                <span class="checkOutHeader">01. Shipping address</span>
            </summary>
            <div class="checkOutData">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus maiores nisi ad neque asperiores consectetur in pariatur ipsum accusamus dignissimos. Voluptas debitis ad culpa quasi corrupti quidem maiores, veritatis ipsum?
            </div>
        </details>
        <details class="checkOutDetails">
            <summary>
                <span class="checkOutHeader">02. Billing information</span>
            </summary>
            <div class="checkOutData">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus maiores nisi ad neque asperiores consectetur in pariatur ipsum accusamus dignissimos. Voluptas debitis ad culpa quasi corrupti quidem maiores, veritatis ipsum?
            </div>
        </details>
        <details class="checkOutDetails">
            <summary>
                <span class="checkOutHeader">03. Shipping information</span>
            </summary>
            <div class="checkOutData">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus maiores nisi ad neque asperiores consectetur in pariatur ipsum accusamus dignissimos. Voluptas debitis ad culpa quasi corrupti quidem maiores, veritatis ipsum?
            </div>
        </details>
        <details class="checkOutDetails">
            <summary>
                <span class="checkOutHeader">04. Shipping method</span>
            </summary>
            <div class="checkOutData">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus maiores nisi ad neque asperiores consectetur in pariatur ipsum accusamus dignissimos. Voluptas debitis ad culpa quasi corrupti quidem maiores, veritatis ipsum?
            </div>
        </details>
        <details class="checkOutDetails">
            <summary>
                <span class="checkOutHeader">05. Payment method</span>
            </summary>
            <div class="checkOutData">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus maiores nisi ad neque asperiores consectetur in pariatur ipsum accusamus dignissimos. Voluptas debitis ad culpa quasi corrupti quidem maiores, veritatis ipsum?
            </div>
        </details>
        <details class="checkOutDetails">
            <summary>
                <span class="checkOutHeader">06. Order review</span>
            </summary>
            <div class="checkOutData">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus maiores nisi ad neque asperiores consectetur in pariatur ipsum accusamus dignissimos. Voluptas debitis ad culpa quasi corrupti quidem maiores, veritatis ipsum?
            </div>
        </details>
    </div>
    </main>
  </div>
</template>

<script>
export default {
    metaInfo() {
        return {
            title: this.$title('Checkout')
        }
    },
    name: 'checkout',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/checkoutPage.scss';
</style>