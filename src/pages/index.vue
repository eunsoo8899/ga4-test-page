<template>
  <div class="index_container">
    <div class="ad_container"/>
    <button class="test_btn" @click="testBtn()">test</button>
    <button class="test_btn3" @click="getTest3()">test3</button>
    <button class="test_btn4" @click="getTest4()">test4</button>
    <div class="waiting_container">
      <div class="doing_num_container">
        <div class="doing_num_title_container">
          <div class="doing_num_title">세차중</div>
        </div>
        <div class="doing_num_number_container">
          <div class="doing_num_number">12가 3456</div>
          <div class="doing_num_number">12가 3456</div>
          <div class="doing_num_number">12가 3456</div>
          <div class="doing_num_number">12가 3456</div>
        </div>
      </div>
      <div class="waiting_num_container">
        <div class="waiting_num_title_container">
          <div class="waiting_num_title">대기중</div>
        </div>
        <div class="waiting_num_number_container">
          <div class="waiting_num_number">12가 3456</div>
          <div class="waiting_num_number">12가 3456</div>
          <div class="waiting_num_number">12가 3456</div>
          <div class="waiting_num_number">12가 3456</div>
          <div class="waiting_num_number">12가 3456</div>
        </div>
      </div>
    </div>
    <diag01 v-if="state.diag01open === true"/>
  </div>
</template>

<script>
import axios from "axios"
import diag01 from '@/components/diag01.vue'
import { reactive } from 'vue'

export default {
  components: {
    diag01
  },
  setup () {
    const state = reactive({
      diag01open: false
    })
    const getTest = async () => {
      console.log('axios 호출')
      await axios.get('test/test2').then(res => {
        console.log(res)
      })
    }
    const getTest3 = async () => {
      // console.log('axios 호출')
      await axios.post('test/test3').then(res => {
        console.log(res)
      })
    }
    const getTest4 = async () => {
      // console.log('axios 호출')
      const data = {
        adminId : 'admin'
      }
      await axios.post('test/test4', data).then(res => {
        console.log(res.data)
      })
    }
    const testBtn = () => {
      console.log(state.diag01open)
      state.diag01open === false ? state.diag01open = true : state.diag01open = false
      console.log(state.diag01open)
    }
    getTest()
    return {
      state,
      getTest,
      getTest3,
      getTest4,
      testBtn
    }
  }

}
</script>
<style>

</style>