<template>
  <div>
    <select :value="code" @input="updateCode($event.target.value)" class="form-control" id="ccmonth">
      <slot name="option"></slot>
    </select>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: ["code"],
  methods:{
    updateCode(code) {
      this.$emit('select', code)
    }
  }
}

</script>

<style scoped>


.payment-input select {
  cursor: pointer;
  height: 2.5rem !important;
  padding-right: 2em;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAYAAAARx7TFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCQTA3RjE4NkQ0NkExMUU3QTM3RkRFQjFEOEY3MDM4RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCQTA3RjE4N0Q0NkExMUU3QTM3RkRFQjFEOEY3MDM4RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJBMDdGMTg0RDQ2QTExRTdBMzdGREVCMUQ4RjcwMzhFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJBMDdGMTg1RDQ2QTExRTdBMzdGREVCMUQ4RjcwMzhFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OpMgKgAAAGJJREFUeNpijMssz2VgYDAB4m9AzMiAAP+BmAuIz7AAiWAgtmfADeSYgEQGED/EoQAknglSdAOII4D4C5qCL1DxG0xQgRNA7AHEn6D8T1A+SJyBCUnnUaj7dkPpozAJgAADABogEzO2aGVBAAAAAElFTkSuQmCC");
  background-color: #e1e8ee;
  background-repeat: no-repeat;
  background-position: calc(100% - 1em) center;
  -webkit-appearance: none;
}

.payment-input .form-control {
  border-width: 2px;
}

.payment-input .form-control:not(.is-valid):not(.is-invalid) {
  border-color: #e1e8ee;
}

.payment-input .form-control:focus {
  box-shadow: none;
}

.payment-input .form-control.is-valid, .payment-input .form-control.is-invalid {
  background-position: calc(100% - 1.1em) center;
  background-repeat: no-repeat;
}

.payment-input .form-control.is-valid {
  border-color: #7dc855;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAJCAYAAADpeqZqAAAABGdBTUEAALGPC/xhBQAAAQ5JREFUGBmNUDtOw0AQnTcBiS4n4BgxVEh0NDQg2xUdFQoFEkIoks064IaKJhSkoAAJbN+AE9jbcg6OkJ3MGhwZKUJMMfvmze/Ngv5paR2eCJATcMy+p5Rw8FdvasNYiJ5JZJucqzito/1PS19pE92sazQ2PiJHr5prBwM0ZyF5IaGhiJikiSb9xtRGhwuRd92y4Xkm3E13qpwH4AkA1xaL5EkdXXpsbHiggyqVtOljBu6z3TLxGN6ZJj5dkHvSjW2s/gOCPVWx5fPMeMiC8sJjb99FChIbn+mRs5btOTBm06Ac9yiV+WO3QfGoM1fTPA3CPBsV511N9642dUTShGOVea2S3syouNJ79R9+2xLcA1oZPdllOgAAAABJRU5ErkJggg==");
}

.payment-input .form-control.is-invalid {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAIAAAAmzuBxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowOUZFMTU2OUQ0NjcxMUU3ODREMjk0RUU3NzEwMEVENCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowOUZFMTU2QUQ0NjcxMUU3ODREMjk0RUU3NzEwMEVENCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5RkUxNTY3RDQ2NzExRTc4NEQyOTRFRTc3MTAwRUQ0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA5RkUxNTY4RDQ2NzExRTc4NEQyOTRFRTc3MTAwRUQ0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+eFdNEwAAASBJREFUeNpi+HH91vOi2g+rN/1HBUARoDhQluXj8nVfD5/4evQkExcHr5crAxh83rr7Tc8Uhn//mXi4mXj9PFhEhYGc1819Xw8eA0oDydctfUARoDhQlhFo4M9rN58X1/99+w6ogy/Q+9P6rf++fGUWFpLsbWTXUgepAOr7fv7ym85Jv+49hNjCpiQvUp7HaagLZDNBhIAcXm83BhgAsiHSCBVAMz5v3QVXAWQDRRAqfl69+bKqFWgF0B0CsWFAEsgGigDFQUq+nb143zP8jqnrXQuPLweOAp0FJIFsoAhQHCjLnCep+OPiVQYmRrHaYh5XB5AzFWRZJMW/Hj7+/+t3hn//WPgjAv9+/Mxlbcbr7YrkUtd/3398O3oKKAsQYABi9qDVgBM2nAAAAABJRU5ErkJggg==");
}

</style>