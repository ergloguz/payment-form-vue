<template>

  <div class="payment">
    <PaymentTabs/>
    <div class="payment-method">
      <CustomText size="title" tag="h2">Choose your payment method</CustomText>
      <div class="pm-item">
        <input v-model="form.method" value="Paypal" id="mpp" type="radio" name="payment-method"/>
        <label class="pm-label">
          <div class="pm-text">
            <CustomText size="method" tag="h5">Paypal</CustomText>
            <CustomText tag="p">Safe payment online. Credit card needed. Paypal account is not necessary.</CustomText>
          </div>
          <div class="pm-thumb">
            <img src="../assets/icons/paypal.png" alt="paypal">
          </div>
        </label>
      </div>
      <div class="pm-item">
        <input id="mcc" v-model="form.method" value="Credit Card" type="radio" name="payment-method" checked="checked"/>
        <label class="pm-label">


          <div class="pm-text">
            <CustomText size="method" tag="h5">Credit Card</CustomText>
            <CustomText tag="p">Safe money transfer using your bank account. Safe payment online. Credit card needed.
              Visa, Maestro,
              Discover, American Express
            </CustomText>
          </div>

          <div class="pm-thumb">
            <IconVisa/>
          </div>

          <div class="pm-thumb">
            <IconMasterCard/>
          </div>
        </label>
      </div>
    </div>
    <b-form @submit.stop.prevent="onSubmit" class="payment-input">


      <div class="form-group">
        <label>Credit Card Number</label>
        <b-form-input
            name="example-input-1"
            class="form-control"
            v-model="$v.form.number.$model"
            :state="validateState('number')"
        ></b-form-input>
      </div>


      <div class="form-group half pr-3">
        <label>Expiry Date</label>
        <div class="row mx-0">
          <div class="col-6 pl-0 pr-2">
            <b-form-select
                name="example-input-2"
                v-model="$v.form.month.$model"
                :options="months"
                :state="validateState('month')"
            ></b-form-select>
          </div>
          <div class="col-6 pl-2 pr-0">
            <b-form-select
                name="example-input-3"
                v-model="$v.form.year.$model"
                :options="years"
                :state="validateState('year')"
            ></b-form-select>
          </div>
        </div>
      </div>

      <div class="form-group half pl-3">
        <label>CVV Code <span class="question">?</span></label>
        <b-form-input
            name="example-input-4"
            class="form-control"
            v-model="$v.form.cvv.$model"
            :state="validateState('cvv')"
        ></b-form-input>
      </div>

      <div class="form-group">
        <label>Name on Card</label>
        <b-form-input
            name="example-input-5"
            class="form-control"
            v-model="$v.form.name.$model"
            :state="validateState('name')">
        </b-form-input>
      </div>
    </b-form>
    <FormFooter @onClick="onSubmit"/>
  </div>
</template>

<script>
import CustomText from "./CustomText";
import Tabs from "./Tabs";
import PaymentTabs from "./Tabs";
import IconArrow from "../assets/icons/arrow.svg";
import IconVisa from "../assets/icons/visa.svg";
import IconMasterCard from "../assets/icons/master-card.svg";
import {validationMixin} from "vuelidate";
import {required} from "vuelidate/lib/validators";
import FormFooter from "./FormFooter";

export default {
  name: 'PaymentForm',
  mixins: [validationMixin],
  components: {
    FormFooter,
    PaymentTabs,
    IconMasterCard,
    IconVisa,
    Tabs,
    CustomText,
    IconArrow
  },
  data() {
    return {
      form: {
        method: "Paypal",
        name: "",
        cvv: "",
        number: "",
        month: "",
        year: "",
      },
      years: [2020, 2021, 2022, 2023, 2024, 2025],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
  },
  validations: {
    form: {
      name: {
        required,
      },
      cvv: {
        required
      },
      month: {
        required
      },
      year: {
        required
      },
      number: {
        required
      }
    }
  },
  methods: {
    validateState(name) {
      const {$dirty, $error} = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        this.$swal({
          position: 'center',
          icon: "error",
          title: "Something went wrong!",
          text: "Please check your payment informations",
          showCloseButton: true,
          confirmButtonText: 'Close'
        });
        return;
      }
      this.$swal({
        position: 'center',
        icon: "success",
        title: "Submitted",
        text: "We saved your payment details!",
        showCloseButton: true,
        confirmButtonText: 'Close'
      });
    }

  }
}
</script>
