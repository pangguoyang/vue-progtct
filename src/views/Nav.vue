<template>
  <div class="nav">
      <!-- top -->
    <div class="top">
      <div class="top-classify">
        <span><van-icon name="coupon-o" /></span>
        <p>分类</p>
      </div>
      <div class="search">
        <span><van-icon name="search" /></span>
        <input type="text" placeholder="搜索商品">
      </div>
      <div class="top-news">
        <span><van-icon name="chat-o" /></span>
        <p>消息</p>
      </div>
    </div>
    <!-- 轮播 -->
    <div class="banner">
       <van-swipe class="my-swipe" :autoplay="2000" indicator-color="#F56456">
          <van-swipe-item><img src="../assets/img/banner1.jpg" alt=""></van-swipe-item>
          <van-swipe-item><img src="../assets/img/banner2.jpg" alt=""></van-swipe-item>
          <van-swipe-item><img src="../assets/img/banner3.jpg" alt=""></van-swipe-item>
          <van-swipe-item><img src="../assets/img/banner4.jpg" alt=""></van-swipe-item>
          <van-swipe-item><img src="../assets/img/banner1.jpg" alt=""></van-swipe-item>
       </van-swipe>
    </div>
    <!-- 100%正品 -->
    <div class="real">
      <img src="../assets/img/real.webp" alt="">
    </div>
    <!-- 蔬菜礼包 -->
    <div class="gift">
      <img src="../assets/img/gift.webp" alt="">
    </div>
    <!-- 数据渲染 图片列表-->
    <div class="list">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <img :src="item.url" alt="">
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
    <!-- 滚动广告 -->
    <div class="rolling wrap">
      <img src="../assets/img/rolling.png" alt="">
      <van-swipe style="height: 1rem;" vertical :autoplay="3000" duration="1000">
        <van-swipe-item><span>价格</span>最新鸡蛋价格3.2元/500g</van-swipe-item>
        <van-swipe-item><span>价格</span>最新鸡蛋价格125元/20kg</van-swipe-item>
     </van-swipe>
    </div>
    <!-- 主体内容 商品 -->
    <div class="goods">
        <div class="greens">
          <img src="../assets/img/class1.webp" alt="" class="show">
          <ul>
            <li></li>
          </ul>
        </div>
        <div class="oil">
          <img src="../assets/img/class2.webp" alt="" class="show">
        </div>
        <div class="fruit">
          <img src="../assets/img/class3.webp" alt="" class="show">
        </div>
        <div class="delicious">
          <img src="../assets/img/class4.webp" alt="" class="show">
        </div>
    </div>
  </div>
</template>

<script>
export default {
 data(){
    return {
      list:[],
      showlist:[]
    }
  },
  created(){
    this.axios.get("http://localhost:3000/list").then(res=>{
        // console.log(res.data.data);
        this.list = this.list.concat(res.data.data)
        console.log(this.list);
      }).catch(err=>{
        console.log(err);
      })
      this.axios.get("http://localhost:3000/show").then(res=>{
        // this.showlist = this.showlist.concat(res.data.data)
        console.log(res)
        // console.log(this.showlist);
      }).catch(err=>{
        console.log(err);
      })
    },
    methods:{
      arr:[],
      set(){
        var str = '';
        for(var i = 0;i<4;i++){
            str+=`
                  <div class="greens">
                    <img src="{{arr[i]}}" alt="" class="show">
                    <ul>`
                    for(var j = i * 6;j<(i+1)*6;j++){
                      str+=`
                      <li></li>
                      `
                    }
                      

           
        }
      }
        
  }

  }
  
  
</script>

<style scoped>
.nav{
  height: 17.866667rem;
  overflow: auto;
}
/* 版心 */
.wrap{
  width: 9.466667rem;
  margin: auto;
}
/* 顶部搜索 */
.top{
  width: 100%;
  height: 1.333333rem;
  background-color: #F56456;
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: .32rem;
  color: white;
  margin-bottom: .04rem;
}
.top .search{
  width: 7.626667rem;
  height: .8rem;
  line-height: .8rem;
  margin-top: .266667rem;
  background-color: rgba(255,255,255,.2);
  border-radius: .533333rem;
  display: flex;
  justify-content: space-between;
}
.top .search input{
  width: 6rem;
  height: .8rem;
  outline: none;
  border: none;
  background-color: transparent;
  color: white;
  font-size: .373333rem;
}
/* placeholder 中调整文字样式 兼容不同浏览器*/
input::-webkit-input-placeholder{
            color:white;
            font-size: .373333rem;
        }
        input::-moz-placeholder{   /* Mozilla Firefox 19+ */
            color:white;
            font-size: .373333rem;
        }
        input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
            color:white;
            font-size: .373333rem;
        }
        input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
            color:white;
            font-size: .373333rem;
        }
/* placeholder兼容结束 */
.top .search span{
  font-size: .6rem;
  margin: .16rem 0 0 .2rem;
}
.top>div{
  width: .64rem;
  height: 1.2rem;
  margin: .133333rem .266667rem 0;
  text-align: center;
}
.top p{
  margin: -.18rem 0 0;
  height: .266667rem;
}
.top span{
  font-size: .7rem;
}
/* 轮播 */
  .banner img{
    width: 100%;
    height: auto;
  }
.van-swipe__indicator{
  width: 1rem;
}
.van-swipe__track{
  width: 1rem;
}
/* 引入框架时样式穿透 解决 >>> 加上三个箭头就可以 */
.banner >>> .van-swipe__indicator--active{
  display: inline-block;
  width: 0.32rem;
  height: .16rem;
  border-radius: 0.1rem;
}
  /* 两张单独的图片 */
  .real img,.gift img{
    width: 100%;
    height: auto;
  }
  /* 图片列表渲染 */
  /* 清除vant自带的效果  */
  p{
    margin: 0;
  }
  .list li{
    height: 1.866667rem; 
  }
  .list img{
    width: 1.066667rem;
    height: 1.066667rem;
    margin-bottom: .133333rem;
  }
  /* 滚动广告 */
  .rolling{
    display: flex;
    height: 1.066667rem;
    margin-bottom: .266667rem;
    font-size: .373333rem;
    color: #666;
    overflow: hidden;
  }
  .rolling img{
    width: 1.946667rem;
    height: .426667rem;
    /* margin-top: -.1rem; */
    vertical-align: middle;
  }
  .rolling span{
    color: #F23030;
    border: .026667rem solid #F23030;
    margin: 0 .133333rem;
    border-radius: .08rem;
  }
  .rolling >>> .van-swipe__indicator{
      display: none;
  }
  /* 商品列表 */
  /* .goods{

  } */
  .show{
    width: 100%;
    height: auto;
  }
</style>