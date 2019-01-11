<script src="../../utils/request.js"></script>
<template>
  <div class="section">
    <div class="page">
      <div class="container">
        <div class="info">
          <img :src="data.avatar" width="42" height="42">
          <div class="user">
            <span>Hi,</span>
            <span>{{data.username}}</span>
          </div>
        </div>
        <div class="nodata">
          啊哦~<br/>
          没有获取到你2018年的骑行数据，<br/>
          可能是未认证或已解绑车辆<br/>
        </div>
        <div class="content">
          想要记录骑行数据，请先用APP连接车辆，<br/>
          连接后在设置中完成“车主认证”，每次<br/>
          骑行完成记得连接APP哦！<br/>
        </div>
        <div class="safe">
          <img src="./safego.png" width="217" height="19">
          <img src="./dunk.png" width="140" height="19">
        </div>
        <div class="btn-com">
          <span>Segway-Ninebot</span>
          <span>2018年度报告</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchData } from '../../api'

export default {
  name: 'noData',
  data () {
    return {
      data: {
        uid: 1,
        username: '',
        avatar: null,
        first_time: '',
        first_vehicle: '',
        first_vehicle_pic: '',
        regdate: '',
        riding_day: 0,
        riding_kilometre: 0,
        carbon_emission: 0,
        lead_percentage: 0,
        highest_time: '',
        highest_mileage: '',
        latest_time: '',
        sign_day: '',
        count_comment: '',
        count_fabulous: '',
        first_cricle_pic: '',
        first_cricle_video: '',
        first_cricle_content: '',
        first_cricle_fabulous: '',
        first_follow: '',
        honor_title: '',
        luck_draw_times: 0,
        if_share: '',
        if_get_medal: '',
        client_ver: '',
        share_number: ''
      }
    }
  },
  beforeMount () {
    fetchData().then(response => {
      if (response.code === 2) {
        this.data = response.data
      }
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .section
    width 100%
    height 100vh
    .page
      background-image url("./bg-nodata.png")
      background-size cover
      background-repeat no-repeat
      height 100%
      .container
        height 100%
        .info
          display flex
          padding .45rem 0 0 .52rem
          img
            width .42rem
            height .42rem
            border-radius .21rem
          .user
            display flex
            justify-content center
            align-items center
            margin-left .17rem
            span:nth-child(1)
              font-size .27rem
              color #fff
              font-family PingFangSC-Semibold
              font-weight 600
            span:nth-child(2)
              font-size .18rem
              color #fff
        .nodata
          font-size .18rem
          color #fff
          line-height .35rem
          font-family PingFangSC-Regular
          font-weight 400
          display flex
          justify-content center
          margin-top .40rem
        .content
          font-size .15rem
          color rgba(255,255,255,.5)
          line-height .30rem
          font-family PingFangSC-Regular
          font-weight 400
          display flex
          justify-content center
          margin-top .32rem
        .safe
          display flex
          flex-direction column
          align-items center
          img:nth-child(1)
            margin-top 1.03rem
          img:nth-child(2)
            margin-top .19rem
        .btn-com
          width 2.69rem
          margin 0 auto
          background-image url("./btn-bg.png")
          background-size cover
          background-repeat no-repeat
          height .99rem
          display flex
          flex-direction column
          justify-content center
          align-items center
          margin-top .22rem
          span
            font-size .18rem
            font-family PingFangSC-Regular
            font-weight 400
            color rgba(255,255,255,.7)
            line-height .26rem
</style>
