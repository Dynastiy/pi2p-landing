<template>
  <div id="pi-transaction">
    <div class="pi-transaction">
      <div class="spacer info d-flex flex-column" style="gap: 20px">
        <div class="d-flex align-items-center" style="gap: 10px">
          <span class="name-icon">H</span>
          <h5>John Peter</h5>
        </div>
        <hr class="m-0 w-50 mx-auto" />
        <div class="ads">
          <span class="item-header">Rate per Pi:</span>
          <!-- <span class="item-content">{{
              item.rate + " " + item.acceptedCurrency.symbol
            }}</span> -->
        </div>
        <div class="ads">
          <span class="item-header">Pi Quantity:</span>
          <!-- <span class="item-content">{{ item.amount }}</span> -->
        </div>
        <div class="ads">
          <span class="item-header">Min/Max:</span>
          <!-- <span class="item-content">{{
              item.maxAmount + " " + "/" + " " + item.minAmount
            }}</span> -->
        </div>
      </div>

      <div class="spacer container">
        <label for="">Payment method</label>
        <div
          class="d-flex align-items-center justify-content-between payment-method"
        >
          <span>Wallet</span>
          <span>
            <i-icon icon="prime:angle-right" width="30px" />
          </span>
        </div>
      </div>

      <div class="amount-box">
        <div class="mb-3">
          <label for="">Enter Pi Amount</label>
          <div class="enter-amount">
            <span>Min</span>
            <input type="text" placeholder="0" />
            <span>Max</span>
          </div>
        </div>
        <div class="mb-3">
          <label for="">Amount in Naira</label>
          <div class="enter-amount">
            <span>NGN</span>
            <input type="text" placeholder="0" />
            <span>All</span>
          </div>
          <div class="text-center wallet-balance">
            <span>Wallet Balance: <span class="balance"> 0880909</span> NGN</span>
          </div>
        </div>
        <div>
            <label for="">Enter Wallet Address</label>
            <div class="enter-wallet-address">
          <input type="text" placeholder="PIXXXXXXXXXXXXXXXXXXXXXXX" />
        </div>
        </div>
      </div>

      <div class="note d-flex" style="gap:12px">
        <span>
            <i-icon icon="quill:warning" width="20px"/>
        </span>
        <p>QUICK NOTE ! Please make sure you are certain of the transaction before you proceed to Buy.</p>
      </div>

      <div class="text-center mt-4">
        <button class="button primary-btn w-50 py-3">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.note {
    background: var(--error-50);
    color: var(--error-500);
    padding: 20px;
}

.note p {
    font-size: 13.6px;
    margin-bottom: 0;
}
.amount-box {
    background: var(--gray-50);
    padding: 20px;
}
.wallet-balance{
    font-size: 12.5px;
}
.balance {
    font-weight: 800;
    font-size: 15px;
}
.enter-amount,
.enter-wallet-address {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  align-items: center;
  gap: 6px;
  border: 1.5px solid var(--gray-400);
  padding: 0 10px;
}

.enter-amount input,
.enter-wallet-address input {
  font-weight: 700;
  font-size: 18px;
  border: transparent;
}

.enter-amount input::placeholder,
.enter-wallet-address input::placeholder {
    font-weight: 400;
    color: var(--gray-200);
}
.enter-amount input {
  text-align: center;
}

.enter-amount span, .enter-wallet-address span {
  font-size: 14px;
}
.payment-method {
  background: var(--gray-50);
  padding: 8px 12px;
  border-radius: 12px;
}
.info {
  background: var(--gray-50);
}
.item-header {
  font-size: 15px;
  font-weight: 400;
}

.item-content {
  font-size: 15px;
  font-weight: 800;
}
h5,
label {
  font-weight: 600;
}

label {
  font-size: 14px;
  margin-bottom: 0;
}
#pi-transaction {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  justify-content: center;
}
.pi-transaction {
  background: var(--white);
  width: 40%;
  padding: 20px;
}

@media (max-width: 990px) {
  .pi-transaction {
    width: 90%;
  }
}
</style>
