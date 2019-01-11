<template>
  <div class="section">
    <div class="page">
      <div class="container">
        <div class="header">数据统计说明</div>
        <div class="body">
          <ul class="list">
            <li>1. The above statistics are from vehicles connected to the Segway-Ninebot APP in 2018. The actual data may be much higher.</li>
            <li>2. Personal riding data comes from "Identified vehicle" as of 24:00, 31 December, 2018.</li>
            <li>3. The data in this report is provided by Big Data Team of Segway-Ninebot APP. It is collected and analyzed in an anonymous manner, and Segway-Ninebot's User Privacy Policy is strictly adhered to, and no information or privacy of the user is disclosed.</li>
            <li>4. Release time: January 2019.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .section
    width 100%
    height 100vh
    .page
      width 100%
      height 100%
      background-image url("./bg5.png")
      background-size cover
      background-position center
      background-repeat no-repeat
      .container
        padding-top 0.42rem
        padding-left 0.32rem
        padding-right 0.32rem
        .header
          height 0.18rem
          font-size 0.18rem
          font-weight 400
          color rgba(255,255,255,1)
          text-align center
        .body
          width 100%
          margin-top 0.3rem
          .list
            list-style none
            margin 0
            padding 0
            li
              font-size 0.13rem
              line-height 0.22rem
              color rgba(255,255,255,0.8)
              margin-bottom 0.3rem
</style>
