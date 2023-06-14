<template>
  <div id="home-actions">
    <div class="home-action shadow-sm">
       <router-link to="/my-sell-ads">
        <div>
            <span> <i-icon icon="game-icons:sell-card" /> </span>
            <h6>My Ads</h6>
        </div>
       </router-link>
    </div>

    <div class="home-action shadow-sm">
        <router-link to="/withdraw">
        <div>
            <span> <i-icon icon="uil:money-withdrawal" /> </span>
            <h6>Withdraw</h6>
        </div>
        </router-link>
    </div>

    <div class="home-action shadow-sm">
       <router-link to="/trades">
        <div>
            <span> <i-icon icon="icons8:buy" /> </span>
            <h6>Buy Pi</h6>
        </div>
       </router-link>
    </div>

    <div class="home-action shadow-sm">
       <router-link to="/trades/sell">
        <div>
        <span> <i-icon icon="ep:sell" /> </span>
        <h6>Sell Pi</h6>
       </div>
       </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .home-action {
    background-color: var(--white);
    width: 100%;
    border-radius: 5px;
    display: grid;
    display: -ms-grid;
    display: -moz-grid;
    place-items: center;
    text-align: center;
    padding: 8px;
}

.home-action h6 {
    font-size: 12px;
}

.home-action span {
    display: grid;
    display: -ms-grid;
    display: -moz-grid;
    background-color: var(--gray-100);
    place-items: center;
    width: max-content;
    padding: 8px;
    font-size: 20px;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 6px;
    color: var(--primary-800);
}

#home-actions {
    display: grid;
    display: -ms-grid;
    display: -moz-grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

@media (max-width: 990px) {
    #home-actions {
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
    }
}
</style>