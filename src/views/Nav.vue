<template>
  <div class="nav">
    <!-- top -->
    <div class="top">
      <div class="top-classify" @click="jumpClassify">
        <span><van-icon name="coupon-o" /></span>
        <p>分类</p>
      </div>
      <div class="search">
        <span><van-icon name="search" /></span>
        <input type="text" placeholder="搜索商品" />
      </div>
      <div class="top-news" @click="jumpMine">
        <span><van-icon name="chat-o" /></span>
        <p>消息</p>
      </div>
    </div>
    <!-- 轮播 -->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="#F56456">
        <van-swipe-item
          ><img src="../assets/img/banner1.jpg" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../assets/img/banner2.jpg" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../assets/img/banner3.jpg" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../assets/img/banner4.jpg" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../assets/img/banner1.jpg" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <!-- 100%正品 -->
    <div class="real">
      <img src="../assets/img/real.webp" alt="" />
    </div>
    <!-- 蔬菜礼包 -->
    <div class="gift">
      <img src="../assets/img/gift.webp" alt="" />
    </div>
    <!-- 数据渲染 图片列表-->
    <div class="list">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <img :src="item.url" alt="" />
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </div>
    <!-- 滚动广告 -->
    <div class="rolling wrap">
      <img src="../assets/img/rolling.png" alt="" />
      <van-swipe style="height: 1rem" vertical :autoplay="3000" duration="1000">
        <van-swipe-item><span>价格</span>最新鸡蛋价格3.2元/500g</van-swipe-item>
        <van-swipe-item><span>价格</span>最新鸡蛋价格125元/20kg</van-swipe-item>
      </van-swipe>
    </div>
    <!-- 主体内容 商品 -->
    <div class="goods" v-html="str1"></div>
    <p class="waring">到底啦~~亲~</p>
  </div>
</template>

<script>
// 4个列表图片 需要引入才能用
import pic1 from "../assets/img/class1.webp";
import pic2 from "../assets/img/class2.webp";
import pic3 from "../assets/img/class3.webp";
import pic4 from "../assets/img/class4.webp";
// 引入css文件 改不了样式 外部创建一个css改4个列表图片的样式
import "../assets/css/nav.css";
export default {
  data() {
    return {
      str1: "",
      list: [],
      showlist: [],
      arr: [pic1, pic2, pic3, pic4],
    };
  },
  created() {
    // var that = this;   用不上
    this.axios
      .get("http://localhost:3000/list")
      .then((res) => {
        // console.log(res.data.data);
        this.list = this.list.concat(res.data.data);
        console.log(this.list);
      })
      .catch((err) => {
        console.log(err);
      });
    this.axios
      .get("http://localhost:3000/show")
      .then((res) => {
        console.log(111, res.data.data);
        this.showlist = this.showlist.concat(res.data.data);
        console.log(111, this.showlist);
      })
      .catch((err) => {
        console.log(err);
      }),
      // 必须要加一个计时器 否则渲染不上 异步同步的问题
      setTimeout(() => {
        this.set();
      }, 1000);
  },
  methods: {
    set() {
        var str = "";
        for (var i = 0; i < 4; i++) {
          // console.log(11321, i);
                 str += `
                    <div class="greens">
                      <img src="${this.arr[i]}" class="show">
                      <ul>`;
          for (var j = 6 * i; j < (i + 1) * 6; j++) {
                 str += `
                          <li>
                          <img src="${this.showlist[j].url}"/>
                          <p class="title">${this.showlist[j].title}</p>
                          <p class="price">${this.showlist[j].price}</p>
                          </li>
                        `;
          }
                 str += `
                        </ul>
                        </div>                    
                      `;
        }
        this.str1 = str;
    },
     jumpClassify(){
      this.$router.push('/Classify')
    },
    jumpMine(){
      this.$router.push('/Mine')
    }
  },
};
</script>

<style scoped>
.nav {
  height: 17.866667rem;
  overflow: auto;
}
/* 版心 */
.wrap {
  width: 9.466667rem;
  margin: auto;
}
/* 顶部搜索 */
.top {
  width: 100%;
  height: 1.333333rem;
  background-color: #f56456;
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 0.32rem;
  color: white;
  margin-bottom: 0.04rem;
}
.top .search {
  width: 7.626667rem;
  height: 0.8rem;
  line-height: 0.8rem;
  margin-top: 0.266667rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.533333rem;
  display: flex;
  justify-content: space-between;
}
.top .search input {
  width: 6rem;
  height: 0.8rem;
  outline: none;
  border: none;
  background-color: transparent;
  color: white;
  font-size: 0.373333rem;
}
/* placeholder 中调整文字样式 兼容不同浏览器*/
input::-webkit-input-placeholder {
  color: white;
  font-size: 0.373333rem;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: white;
  font-size: 0.373333rem;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: white;
  font-size: 0.373333rem;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: white;
  font-size: 0.373333rem;
}
/* placeholder兼容结束 */
.top .search span {
  font-size: 0.6rem;
  margin: 0.16rem 0 0 0.2rem;
}
.top > div {
  width: 0.64rem;
  height: 1.2rem;
  margin: 0.133333rem 0.266667rem 0;
  text-align: center;
}
.top p {
  margin: -0.18rem 0 0;
  height: 0.266667rem;
}
.top span {
  font-size: 0.7rem;
}
/* 轮播 */
.banner img {
  width: 100%;
  height: auto;
}
.van-swipe__indicator {
  width: 1rem;
}
.van-swipe__track {
  width: 1rem;
}
/* 引入框架时样式穿透 解决 >>> 加上三个箭头就可以 */
.banner >>> .van-swipe__indicator--active {
  display: inline-block;
  width: 0.32rem;
  height: 0.16rem;
  border-radius: 0.1rem;
}
/* 两张单独的图片 */
.real img,
.gift img {
  width: 100%;
  height: auto;
}
/* 图片列表渲染 */
/* 清除vant自带的效果  */
p {
  margin: 0;
}
.list ul {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.list li {
  height: 1.866667rem;
  width: 2rem;
  text-align: center;
  margin: 0.266667rem 0;
}
.list img {
  width: 1.066667rem;
  height: 1.066667rem;
  margin-bottom: 0.133333rem;
}
.list p {
  font-size: 0.373333rem;
  color: #666;
}
/* 滚动广告 */
.rolling {
  display: flex;
  height: 1.066667rem;
  margin-top: 0.266667rem;
  margin-bottom: 0.266667rem;
  font-size: 0.373333rem;
  color: #666;
  overflow: hidden;
}
.rolling img {
  width: 1.946667rem;
  height: 0.426667rem;
  /* margin-top: -.1rem; */
  vertical-align: middle;
}
.rolling span {
  color: #f23030;
  border: 0.026667rem solid #f23030;
  margin: 0 0.133333rem;
  border-radius: 0.08rem;
}
.rolling >>> .van-swipe__indicator {
  display: none;
}
/* 商品列表 在这加不上样式 单独建了个css文件*/


</style>