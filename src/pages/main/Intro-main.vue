<template>

  <div>
  </div>

</template>
<style>
  p {
    white-space: normal;
  }
  @media all and (max-width: 768px){
    .intro-body .box{
      position: sticky;
      top: 17vh;
    }

    .intro-body .box p img{
      width: 80%;
    }

    .intro-body .box p{
      font-size: 2vh;
    }

    .intro-footer p{
      font-size: 1vh;
    }
    .introFtWb{
      padding: 0 10px;
      word-break: keep-all;
    }
    .IntroPText{
      word-break: keep-all;
      font-size: 3vw !important;
    }
  }
</style>
<script>

export default {
  data () {
    return {
      errorMessage: '',
      terms: false,
      termsHtml: null,
      termsTitle: null,
      uuidFromDB: '',
      autoLoginFromDB: '',
      uuidTtlRedis: ''
    }
  }
}
</script>
