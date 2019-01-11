<template>
  <div id="swiper" ref="mainContainer">
    <img data-load style="display: none;" src="./company.png">
    <img data-load style="display: none;" src="./share.png">
    <img data-load style="display: none;" src="./getGift.png">
    <img data-load style="display: none;" src="./frame.png">
    <img data-load style="display: none;" src="https://app-public-cdn.ninebot.cn/2018annals/vehicle/1.png">
    <img data-load style="display: none;" src="https://app-public-cdn.ninebot.cn/2018annals/vehicle/2.png">
    <img data-load style="display: none;" src="https://app-public-cdn.ninebot.cn/2018annals/vehicle/3.png">
    <img data-load style="display: none;" src="https://app-public-cdn.ninebot.cn/2018annals/vehicle/4.png">
    <img data-load style="display: none;" src="https://app-public-cdn.ninebot.cn/2018annals/vehicle/5.png">
    <img data-load style="display: none;" src="https://app-public-cdn.ninebot.cn/2018annals/vehicle/6.png">
    <img data-load style="display: none;" src="https://app-public-cdn.ninebot.cn/2018annals/vehicle/7.png">
    <img data-load style="display: none;" src="https://app-public-cdn.ninebot.cn/2018annals/aliase/en/cool.png">
    <img data-load style="display: none;" src="./bg-nodata.png">
    <transition name="fade">
      <div v-if="!load.canShow" class="preload">
        <div class="load-img">
          <img data-load src="./loading.png">
        </div>
        <div class="progress">
          <div class="ruler">
            <div class="bar" :style="{ width: load.progress + '%' }"></div>
          </div>
          {{load.progress}}%
        </div>
        <div class="summary">你的专属年报正在生成中...</div>
      </div>
    </transition>
    <div class="arrow">
      <img src="./arrow.png">
    </div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section page-1">
        <img data-load style="display: none;" src="./bg1.png">
        <div class="page">
          <div class="flash">
            <img data-load src="./star.png">
          </div>
          <div class="content">
            <div class="user">
              <div class="avatar ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0s">
                <img :src="data.avatar">
              </div>
              <div class="name ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.1s">Hi, <span>{{data.username}}</span></div>
            </div>
            <div class="date ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.3s">{{parseTime(data.first_time, '{y}.{m}.{d}')}}</div>
            <div class="info">
              <div class="header ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.4s">You activated </div>
              <div class="body ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s">{{data.first_vehicle}}</div>
              <div class="footer ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.6s">and that’s when we met for the first time.</div>
            </div>
            <div class="duration ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.7s">
              Till now, we have companied each other for <span>{{duration}}</span> months.
            </div>
          </div>
          <div class="devices">
            <img class="ani" swiper-animate-effect="zoomInDown" swiper-animate-duration="1s" swiper-animate-delay="0.8s" :src="data.first_vehicle_pic">
          </div>
        </div>
      </div>
      <div class="section page-2">
        <img data-load style="display: none;" src="./bg2.png">
        <div class="page">
          <div class="people">
            <img data-load src="./people.png">
          </div>
          <div class="content">
            <div class="wrapper">
              <div class="header">
                <div class="title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.1s">We have recorded every ride you made:</div>
                <div class="sub-title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.2s">Your accumulated riding record in 2018</div>
              </div>
              <div class="body">
                <div class="data">
                  <div class="date ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.3s"><span class="ani" swiper-animate-effect="flipInX" swiper-animate-duration="1s" swiper-animate-delay="0.5s">{{data.riding_day}}</span>days</div>
                  <div class="mile ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.4s"><span class="ani" swiper-animate-effect="flipInX" swiper-animate-duration="1s" swiper-animate-delay="0.5s">{{data.riding_kilometre}}</span>km</div>
                </div>
                <div class="energy">
                  <div class="carbon ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s">Equivalent to reducing carbon emissions by <span>{{data.carbon_emission}} </span></div>
                  <div class="ranking ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.6s">Leading world’s <span>{{data.lead_percentage}}%</span> Fans</div>
                </div>
              </div>
              <div class="footer">
                <div class="title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.7s">
                  On <span>{{parseTimeEn(data.highest_time, '{d} {m}')}}</span> you rode <span>{{data.highest_mileage}}km</span>
                </div>
                <div class="summary ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.8s">
                  It’s the longest ride you made in 2018. Well done!
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.8s">
              <span>{{parseTimeEn(data.latest_time, '{d} {m}')}}</span> you were still riding,
            </div>
            <div class="summary ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.9s">
              A night rider under the stars.
            </div>
          </div>
        </div>
      </div>
      <div class="section page-3">
        <img data-load style="display: none;" src="./bg3.png">
        <div class="page">
          <div class="devices">
            <img class="car" :src="data.first_vehicle_pic">
            <img data-load class="heart" src="./heart.png">
          </div>
          <div class="content">
            <div class="header ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0s">You made Fans Moments a warm place to be.</div>
            <div class="data">
              <div class="row ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.1s">
                <div class="col">You signed in for </div>
                <div class="col num">
                  <span>{{data.sign_day}}</span> days
                </div>
              </div>
              <div class="row ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.2s">
                <div class="col">commented</div>
                <div class="col num">
                  <span>{{data.count_comment}}</span> times
                </div>
              </div>
              <div class="row ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.3s">
                <div class="col">and liked</div>
                <div class="col num">
                  <span>{{data.count_fabulous}}</span> times
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section page-4">
        <img data-load style="display: none;" src="./bg4.png">
        <div class="page">
          <div class="content">
            <div class="wrapper">
              <div v-if="data.first_cricle_content !== ''" class="post">
                <div class="header ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0s">
                  Do you remember your first post?
                </div>
                <div class="body">
                  <div class="info ani"  swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.1s">
                    <div class="text ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.2s">{{data.first_cricle_content}}</div>
                    <div v-if="data.first_cricle_pic !== []" class="gallery ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.3s">
                      <img data-load v-for="item in data.first_cricle_pic" :key="item.width" :src="item.img_url">
                    </div>
                  </div>
                  <div class="comment">
                    <div class="top ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.4s">You got your first like from <span>{{data.first_cricle_fabulous}}</span></div>
                    <div class="bottom ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s"><span>{{data.first_follow}}</span> is the first person you follow</div>
                  </div>
                </div>
                <div class="footer ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.6s">Do not forget to contact your friends~</div>
              </div>
              <div v-else class="no-post">
                <div class="no-data">
                  <div class="msg ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0s">Pains you take</div>
                  <div class="msg ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.1s">Joys you feel</div>
                  <div class="msg ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.2s">Streets you cross</div>
                  <div class="msg ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.3s">People you meet</div>
                  <div class="msg ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.4s">……</div>
                </div>
                <div class="tips">
                  <div class="tip ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s">Don't just keep them to yourself.</div>
                  <div class="tip ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.6s">Share them on Fans Moment.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section page-5">
        <img data-load style="display: none;" src="./bg5.png">
        <div class="page">
          <div class="content">
            <div class="star">
              <img src="./star.png">
            </div>
            <div class="wrapper">
              <div class="header">
                <div class="title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0s">Congratulations!</div>
                <div class="sub-title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.1s">You are our 2018’s</div>
              </div>
              <div class="body">
                <div class="award ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.2s">
                  <img :src="data.honor_title"/>
                </div>
              </div>
              <div class="footer">
                <div class="thanks ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.3s">Thank you</div>
                <div class="com ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.4s">for being with us in 2018.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section page-6">
        <img data-load style="display: none;" src="./bg6.png">
        <div class="page">
          <div class="content">
            <div class="wrapper">
              <div class="header">
                <img data-load class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0s" src="./2019.png">
              </div>
              <div class="body ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.1s">
                <div class="playground">
                  <transition name="gift-transition" enter-active-class="animated bounceInDown" leave-active-class="animated fadeOut">
                    <div class="container before" v-if="!giftStatus">
                      <img data-load v-if="data.luck_draw_times > 0" src="./gift.png">
                      <img data-load v-else src="./nogift.png">
                    </div>
                  </transition>
                  <transition name="gift-transition" enter-active-class="animated bounceInDown" leave-active-class="animated fadeOut">
                    <div class="container after" v-if="giftStatus">
                      <div class="m-header">Congratulations</div>
                      <div class="m-body">
                        <div class="icon">
                          <img data-load v-if="gift.type === 2" src="./ncoin.png">
                          <img data-load v-if="gift.type === 1" src="./medal.png">
                        </div>
                        <div v-if="gift.type === 2" class="data"><span>{{gift.data}}</span> N-Coins</div>
                        <div v-if="gift.type === 1" class="data">{{gift.data.title}}</div>
                      </div>
                      <div class="m-footer"> Rewards will be sent to your account within 48 hours</div>
                    </div>
                  </transition>
                </div>
                <div class="tip">
                  You' ve got <span>{{data.luck_draw_times}}</span> chances
                </div>
                <div class="oper">
                  <div class="btn" :class="{ disabled: data.luck_draw_times === '0' || data.luck_draw_times === '0' }" @click="handlerDraw"></div>
                </div>
              </div>
              <div class="footer">
                <div class="share ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.3s">
                  <div class="btn" @click="handlerShare"></div>
                  <div class="tip">
                    <span>22</span> Fans shared their report
                  </div>
                </div>
                <div class="company ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.4s">
                  <div class="btn" @click="handlerCompany"></div>
                  <div class="tip">
                    <div class="legal" @click="handlerLegal">* Statistics Description</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import { swiperAnimate } from '../../utils/fullpage-animate'
import { fetchData, draw } from '@/api/index'
import { parseTime, parseTimeEn } from '../../utils'

export default {
  name: 'app',
  data () {
    return {
      fullpage: null,
      load: {
        progress: 0,
        num: 0,
        aImg: [],
        aSrc: [],
        canShow: false
      },
      options: {
        licenseKey: '8E9BF116-C2604633-A644E674-FA73C5BF',
        scrollOverflow: false,
        // anchors: [ 'page-1', 'page-2', 'page-3', 'page-4', 'page-5', 'page-6' ],
        // animateAnchor: true,
        sectionsColor: [ '#000000', '#000000', '#000000', '#000000', '#000000', '#000000' ],
        afterLoad: this.afterLoad
      },
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
      },
      giftStatus: false,
      giftTimer: -1,
      gift: {
        type: null,
        data: null
      }
    }
  },
  computed: {
    duration: function () {
      const date = new Date(this.data.regdate * 1000)
      return (2018 - date.getFullYear()) * 12 + (12 - date.getMonth())
    }
  },
  beforeMount () {
    fetchData().then(response => {
      if (response.code === 1) {
        this.data = response.data
      } else {
        this.$router.push({ path: '/noData' })
      }
    })
  },
  mounted () {
    this.load.aImg = this.$refs.fullpage.$el.querySelectorAll('img[data-load]')
    this.load.aImg.forEach((item) => {
      this.load.aSrc.push(item.getAttribute('src'))
    })
    for (let i in this.load.aSrc) {
      const oImg = document.createElement('img')
      oImg.src = this.load.aSrc[i]
      oImg.onload = () => {
        this.load.num++
        this.load.progress = parseInt(this.load.num / this.load.aSrc.length * 100)
        this.handlerCanShow()
      }
      oImg.onError = () => {
        window.location.reload()
      }
    }
  },
  beforeDestroy () {
    this.$refs.fullpage.destroy('all')
  },
  methods: {
    parseTime (time, cFomat) {
      return parseTime(time, cFomat)
    },
    parseTimeEn (time, cFormat) {
      return parseTimeEn(time, cFormat)
    },
    afterLoad (anchorLink, index) {
      swiperAnimate(this.$refs.fullpage.$el, index)
    },
    handlerCanShow () {
      if (this.load.num === this.load.aSrc.length) {
        this.load.canShow = true
      }
    },
    handlerDraw () {
      if (this.data.luck_draw_times <= 0 || this.giftTimer > 0) {
        return false
      } else {
        draw().then(response => {
          if (response.code === 1) {
            this.gift = response.data
            this.data.luck_draw_times = parseInt(this.data.luck_draw_times) - 1
            this.giftStatus = true
            this.giftTimer = window.setTimeout(() => {
              clearTimeout(this.giftTimer)
              this.giftTimer = 0
              this.giftStatus = false
            }, 1500)
          }
        })
      }
    },
    handlerShare () {
      this.$router.push({ path: '/private' })
    },
    handlerCompany () {
      this.$router.push({ path: '/company' })
    },
    handlerLegal () {
      this.$router.push({ path: '/legal' })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #swiper
    background #000
    font-size 0
    .preload
      width 100%
      height 100%
      position absolute
      top 0
      left 0
      background-color rgba(8, 11, 50, 1)
      z-index 9999
      display flex
      flex-direction column
      justify-content center
      align-items center
      font-size 0
      .load-img
        width 1.58rem
        height 1.35rem
        margin-top -1rem
        margin-bottom 0.43rem
        img
          width 100%
          height 100%
      .progress
        width auto
        height 0.48rem
        font-size 0.18rem
        font-weight 600
        color rgba(180, 48, 78, 1)
        display flex
        flex-direction row
        justify-content space-between
        align-items flex-end
        margin-bottom 0.18rem
        .ruler
          width 2.4rem
          height 0.17rem
          border-radius 0.09rem
          background-color RGBA(33, 36, 71, 1)
          margin-right 0.11rem
          .bar
            width 40%
            height 100%
            background linear-gradient(-90deg,rgba(62,130,204,1) 0%,rgba(38,31,177,1) 100%)
            opacity 0.8
            border-radius 0.09rem
            position relative
            &:before
              display block
              width 100%
              height 0
              content ''
              border-top 1px dashed rgba(255,255,255,0.4)
              position absolute
              top 50%
              left 0.05rem
              margin-top -0.01rem
            &:after
              display block
              width 0.26rem
              height 0.47rem
              content ''
              background-image url("./loading-icon.png")
              background-size cover
              background-position center
              background-repeat no-repeat
              position absolute
              right 0
              bottom 0
              margin-right -0.1rem
      .summary
        height 0.18rem
        font-size 0.18rem
        font-weight 400
        color rgba(255,255,255,0.8)
    .arrow
      width 0.39rem
      height 0.28rem
      position absolute
      bottom 0.1rem
      left 50%
      margin-left -0.19rem
      font-size 0
      z-index 999
      img
        width 100%
        animation arrUp 1.5s ease-in-out infinite both
    .section
      width 100%
      height 100vh
      position relative
      font-size 0!important
      .page
        width 100%
        height 100%
        background-size cover
        background-position center
        background-repeat no-repeat
      &.page-1
        .page
          background-image url("./bg1.png")
          .flash
            width 90%
            position absolute
            top 0
            left 5%
            img
              width 100%
              animation flash 2s linear infinite both
          .content
            padding 0.25rem 0.22rem
            .user
              display flex
              flex-direction row
              justify-content flex-start
              align-items baseline
              .avatar
                font-size 0
                margin-right 0.17rem
                img
                  width 0.42rem
                  height 0.42rem
                  border-radius 50%
                  overflow hidden
              .name
                height 0.27rem
                font-size 0.27rem
                font-weight 600
                color #fff
                margin-right 0.13rem
                span
                  height 0.18rem
                  font-size 0.18rem
                  font-weight 400
                  color #fff
              .tile
                height 0.13rem
                font-size 0.13rem
                font-weight 400
                color rgba(255,255,255,0.4)
            .date
              height 0.27rem
              font-size 0.27rem
              font-weight 600
              color rgba(255,255,255,1)
              margin-top 0.48rem
            .info
              margin-top 0.27rem
              .header
                height 0.13rem
                font-size 0.13rem
                font-weight 400
                color rgba(255,255,255,0.6)
                margin-bottom 0.13rem
              .body
                height 0.18rem
                font-size 0.18rem
                font-weight 400
                color rgba(255,255,255,1)
                margin-bottom 0.13rem
              .footer
                height 0.13rem
                font-size 0.13rem
                font-weight 400
                color rgba(255,255,255,0.6)
            .duration
              height 0.18rem
              padding-left 0.24rem
              padding-right 0.23rem
              font-size 0.18rem
              font-weight 400
              color rgba(255,255,255,0.6)
              position absolute
              left 0
              bottom 0.67rem
              span
                font-size 0.18rem
                height 0.18rem
                font-weight 600
                color rgba(255,255,255,1)
          .devices
            width 2.08rem
            height 2.08rem
            position absolute
            bottom 1.18rem
            left 50%
            margin-left -1.04rem
            img
              width 100%
              height 100%
      &.page-2
        .page
          background-image: url("./bg2.png")
          .people
            width 0.46rem
            height 0.76rem
            position absolute
            top 50%
            left 50%
            margin-top -0.38rem
            margin-left -0.46rem
            img
              width 100%
              height 100%
              animation people-move 5s cubic-bezier(.14,.57,.83,.43) infinite both
          .content
            width 100%
            height 75%
            padding 0.15rem 0.22rem
            position relative
            .wrapper
              width 100%
              padding 0.27rem 0.24rem
              .header
                margin-bottom 0.4rem
                .title
                  height 0.13rem
                  font-size 0.13rem
                  font-weight 400
                  color rgba(255,255,255,0.4)
                  margin-bottom 0.1rem
                .sub-title
                  line-height 0.3rem
                  font-size 0.18rem
                  font-weight 400
                  color rgba(255,255,255,1)
              .body
                width 100%
                .data
                  width 100%
                  display flex
                  flex-direction row
                  justify-content space-between
                  align-items center
                  .date, .mile
                    width auto
                    font-size 0.13rem
                    font-weight 400
                    color rgba(255,255,255,0.4)
                    span
                      display inline-block
                      height 0.54rem
                      line-height 0.54rem
                      padding 0 0.15rem
                      margin-right 0.08rem
                      border 1px solid rgba(46, 21, 198, 1)
                      border-radius 0.14rem
                      background-color rgba(46, 21, 198, 0.3)
                      font-size 0.27rem
                      font-weight 600
                      color rgba(255,255,255,1)
                .energy
                  margin-top 0.27rem
                  .carbon, .ranking
                    line-height 0.3rem
                    font-size 0.18rem
                    font-weight 400
                    color rgba(255,255,255,0.6)
                    span
                      color rgba(255,255,255,1)
              .footer
                position absolute
                left 0.46rem
                bottom 0.46rem
                .title, .summary
                  line-height 0.3rem
                  font-size 0.18rem
                  font-weight 400
                  color rgba(255,255,255,0.6)
                  span
                    font-weight 400
                    color rgba(255,255,255,1)
          .bottom
            position absolute
            left 0.41rem
            bottom 0.69rem
            .title, .summary
              height 0.18rem
              font-size 0.18rem
              font-weight 400
              color rgba(255,255,255,0.6)
              margin-bottom 0.12rem
              span
                color rgba(255,255,255,1)
      &.page-3
        .page
          background-image: url("./bg3.png")
          .devices
            width 1.5rem
            height 1.63rem
            position absolute
            right 0
            bottom 0.1rem
            .car
              width 100%
            .heart
              width 0.73rem
              position absolute
              bottom 50%
              left 0
              transform-origin bottom right
              animation flash 2s ease-in-out infinite both
          .content
            width 100%
            padding-top 0.42rem
            padding-left 0.5rem
            padding-right 0.5rem
            display flex
            flex-direction column
            align-items center
            .header
              line-height 0.3rem
              font-size 0.18rem
              font-weight 400
              color rgba(255,255,255,1)
            .data
              margin-top 0.87rem
              width 100%
              .row
                width 100%
                display flex
                flex-direction row
                justify-content space-between
                align-items baseline
                margin-bottom 0.45rem
                .col
                  height 0.27rem
                  font-size 0.18rem
                  font-weight 400
                  color rgba(255,255,255,0.6)
                  &.num
                    font-size 0.13rem
                  span
                    height 0.27rem
                    font-size 0.27rem
                    font-weight 600
                    color rgba(255,255,255,1)
      &.page-4
        .page
          background-image: url("./bg4.png")
          .content
            width 100%
            height 100%
            padding-top 0.42rem
            padding-left 0.42rem
            padding-right 0.42rem
            padding-bottom 0.69rem
            .wrapper
              width 100%
              height 100%
              position relative
              .post, .no-post
                width 100%
                height 100%
                position absolute
                top 0
                left 0
              .post
                display flex
                flex-direction column
                justify-content flex-start
                align-items center
                .header
                  height 0.18rem
                  font-size 0.18rem
                  font-weight 400
                  color rgba(255,255,255,1)
                  margin-bottom 0.35rem
                .body
                  width 100%
                  .info
                    height auto
                    background-color rgba(255,255,255,0.1)
                    border-radius 0.14rem
                    padding 0.2rem 0.25rem
                    .text
                      width 100%
                      height 0.32rem
                      font-size 0.13rem
                      line-height 0.16rem
                      font-weight 400
                      color rgba(255,255,255,0.6)
                      overflow hidden
                      text-overflow ellipsis
                      display -webkit-box
                      -webkit-line-clamp 2
                      -webkit-box-orient vertical
                      margin-bottom 0.12rem
                    .gallery
                      width 100%
                      display flex
                      flex-direction row
                      justify-content space-around
                      align-items center
                      font-size 0
                      img
                        width 0.48rem
                        height 0.48rem
                        border-radius 0.03rem
                        overflow hidden
                  .comment
                    margin-top 0.4rem
                    .top, .bottom
                      height 0.13rem
                      font-size 0.13rem
                      font-weight 400
                      text-align center
                      color rgba(255,255,255,0.6)
                      margin-bottom 0.2rem
                      span
                        font-weight 500
                        color rgba(255,255,255,1)

                .footer
                  width 100%
                  position absolute
                  bottom 0
                  left 0
                  text-align center
                  line-height 0.3rem
                  font-size 0.18rem
                  font-weight 400
                  color rgba(255,255,255,0.6)
              .no-post
                display flex
                flex-direction column
                justify-content center
                align-items center
                .no-data
                  width 1.8rem
                  margin-top -1.53rem
                  margin-bottom 0.48rem
                  .msg
                    font-size 0.13rem
                    line-height 0.24rem
                    fong-weight 400
                    color rgba(255,255,255,0.8)
                    text-align center
                .tips
                  width 1.8rem
                  .tip
                    font-size 0.13rem
                    line-height 0.24rem
                    fong-weight 400
                    color rgba(255,255,255,0.8)
                    text-align center
      &.page-5
        .page
          background-image: url("./bg5.png")
          .content
            width 100%
            height 100%
            padding-top 0.44rem
            padding-left 0.4rem
            padding-right 0.4rem
            padding-bottom 0.77rem
            position relative
            .star
              width 90%
              position absolute
              top 0
              left 5%
              img
                width 100%
            .wrapper
              width 100%
              height 100%
              position relative
              .header
                margin-bottom 0.4rem
                .title, .sub-title
                  height 0.18rem
                  font-size 0.18rem
                  font-weight 400
                  color rgba(255,255,255,1)
                  margin-bottom 0.2rem
                  text-align center
              .body
                width 100%
                display flex
                flex-direction column
                align-items center
                .award
                  width 2.93rem
                  height 3.2rem
                  padding-top 0.48rem
                  background-image url("./frame.png")
                  background-size cover
                  background-position center
                  background-repeat no-repeat
                  display flex
                  flex-direction column
                  justify-content flex-start
                  align-items center
                  img
                    width 2rem
              .footer
                width 100%
                position absolute
                left 0
                bottom 0
                .thanks, .com
                  height 0.18rem
                  font-size 0.18rem
                  font-weight 400
                  color rgba(255,255,255,0.6)
                  margin-bottom 0.14rem
                  text-align center
      &.page-6
        .page
          background-image: url("./bg6.png")
          .content
            width 100%
            height 100%
            padding-top 0.22rem
            padding-left 0.32rem
            padding-right 0.32rem
            .wrapper
              width 100%
              height 100%
              position relative
              .header
                text-align center
                img
                  width 1.58rem
                  height 0.85rem
              .body
                width 100%
                height 2.18rem
                margin-top 0.42rem
                .playground
                  width 100%
                  height 1.4rem
                  position relative
                  .container
                    width 100%
                    height 100%
                    position absolute
                    top 0
                    left 0
                    &.before
                      display flex
                      flex-direction row
                      justify-content center
                      align-items center
                      img
                        width 2.17rem
                        height 1.39rem
                    &.after
                      display flex
                      flex-direction column
                      justify-content space-around
                      align-items center
                      .m-header
                        width 1.98rem
                        height 0.36rem
                        line-height 0.36rem
                        text-align center
                        background-image: url("./m-title.png")
                        background-size cover
                        background-position center
                        background-repeat no-repeat
                        font-size 0.18rem
                        font-weight 400
                        color rgba(255, 91, 63, 1)
                      .m-body
                        width 100%
                        display flex
                        flex-direction row
                        justify-content center
                        align-items center
                        margin-top 0
                        .icon
                          width 0.88rem
                          height 0.7rem
                          img
                            width 100%
                            height 100%
                        .data
                          height 0.27rem
                          font-size 0.18rem
                          font-weight 400
                          color rgba(255, 91, 63, 1)
                          span
                            font-size 0.22rem
                            font-weight 600
                      .m-footer
                        height 0.1rem
                        font-size 0.1rem
                        font-weight 400
                        color rgba(255, 255, 255, 0.3)
                        margin-bottom 0.16rem
                .tip
                  height 0.13rem
                  font-size 0.13rem
                  font-weight 400
                  color rgba(255,255,255,0.3)
                  text-align center
                  span
                    color rgba(234,50,99,1)
                .oper
                  width 100%
                  height 0.67rem
                  display flex
                  flex-direction column
                  justify-content center
                  align-items center
                  .btn
                    width 3.13rem
                    height 0.67rem
                    background-image url("./getGift.png")
                    background-size cover
                    background-position center
                    background-repeat no-repeat
                    &.disabled
                      background-image url("./getGiftDisabled.png")
              .footer
                width 100%
                position absolute
                left 0
                bottom 0.42rem
                .share
                  width 100%
                  height 0.82rem
                  display flex
                  flex-direction column
                  justify-content center
                  align-items center
                  .btn
                    width 3.13rem
                    height 0.67rem
                    background-image url("./share.png")
                    background-size cover
                    background-position center
                    background-repeat no-repeat
                  .tip
                    height 0.13rem
                    font-size 0.13rem
                    font-weight 400
                    color rgba(255,255,255,0.3)
                    text-align center
                    span
                      color rgba(234,50,99,1)
                .company
                  width 100%
                  height 0.82rem
                  display flex
                  flex-direction column
                  justify-content center
                  align-items center
                  .btn
                    width 3.13rem
                    height 0.67rem
                    background-image url("./company.png")
                    background-size cover
                    background-position center
                    background-repeat no-repeat
                  .tip
                    .legal
                      height 0.13rem
                      font-size 0.13rem
                      font-weight 400
                      color rgba(255,255,255,0.3)
                      text-align center
                      text-decoration underline
</style>
