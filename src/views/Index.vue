<template>
  <div class="index">
    <router-view></router-view>
    <!-- 公共底部 -->
    <div class="index1">
      <ul class="tab">
        <li>
           <span><van-icon name="wap-home-o" /></span>
           <p>首页</p>
        </li>
        <li>
           <span><van-icon name="apps-o" /></span>
           <p>分类</p>
        </li>
        <li>
           <span><van-icon name="location-o" /></span>
           <p>附近商家</p>
        </li>
        <li>
           <span><van-icon name="cart-o" /></span>
           <p>购物车</p>
        </li>
        <li>
           <span><van-icon name="contact" /></span>
           <p>我的</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
  /* 底部tab 层级可以不加 但是必须加背景色 否则会是透明透过了*/
  .index1{
    width: 100%;
    height: 1.333333rem;
    box-sizing: border-box;
    padding: 0 .266667rem;
    position: fixed;
    left: 0;
    bottom: 0;
    /* z-index: 10; */
    background-color: white;
  }
  .list ul,.tab{
    overflow: hidden;
    width: 10rem;
  }
  .list li,.tab li{
    float: left;
    text-align: center;
    width: 2rem;
    height: 2.333333rem;
    font-size: .32rem;
    color: #666;
  }
  .index1 p{
    margin-top: -0.1rem;
  }
  .index1 span{
    font-size: .8rem;
  }
</style>
