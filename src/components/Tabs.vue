<template>
  <div class="payment-tabs">
    <a href="javascript:void(0);">Cart</a>
    <a href="javascript:void(0);">Customer Information</a>
    <a href="javascript:void(0);">Shipping</a>
    <a class="active" href="javascript:void(0);">Payment</a>
  </div>
</template>

<script>
export default {
  name: "Tabs"
}
</script>

<style scoped>

.payment-tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2em;
  padding-right: 2em;
  border-bottom: 1px solid #e1e8ee;
  counter-reset: section;
}

.payment-tabs > a {
  padding: 1.35em 0;
  color: #bdc6cf;
  font-size: 0.9em;
  position: relative;
  transition: all 200ms ease-in-out;
}

.payment-tabs > a:before {
  counter-increment: section;
  content: counter(section);
  display: inline-block;
  width: 1.65em;
  height: 1.65em;
  margin-right: 0.5em;
  border: 0.15em solid #e1e8ee;
  color: #bdc6cf;
  font-size: 0.85em;
  text-align: center;
  line-height: 1.45em;
  border-radius: 50%;
  transition: all 300ms ease-in-out;
}

.payment-tabs > a:after {
  content: "";
  display: block;
  border-bottom: 2px solid transparent;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
}

.payment-tabs > a:hover {
  text-decoration: none;
  color: #91a0af;
}

.payment-tabs > a:hover:before {
  border-color: #91a0af;
  color: #91a0af;
}

.payment-tabs > a.active {
  color: #358ed7;
  font-weight: 500;
}

.payment-tabs > a.active:before {
  border-color: #358ed7;
  color: inherit;
}

.payment-tabs > a.active:after {
  border-bottom: 2px solid #358ed7;
}

.payment-customer {
  display: none;
}

@media (max-width: 479px) {

  .payment-tabs {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .payment-tabs > a {
    font-size: 0.725rem;


  }

  .payment-tabs > a:before {
    display: block;
    margin: 0 auto;
  }

}

</style>