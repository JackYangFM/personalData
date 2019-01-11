<template>
  <div class="section">
    <div class="page">
      <div class="container">
        <div class="header">数据统计说明</div>
        <div class="body">
          <ul class="list">
            <li>1. 以上数据统计来自2018年内连接过Segway-Ninebot APP的硬件产品，真实数据可能远高于此。</li>
            <li>2. 个人骑行里程数据的统计来自2018年12月31日24点时刻，在个人账号“车主认证”下的“已认证车辆”。</li>
            <li>3. 本报告数据由Segway-Ninebot大数据提供，数据的收集和分析均使用匿名方式，并严格遵守Segway-Ninebot的用户隐私政策，不会泄露用户的任何资料和隐私。</li>
            <li>4. 发布时间：2019年1月。</li>
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
