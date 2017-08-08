<template>
  <div class="model">
    <div class="mask" @click.self="hide">
      <div class="content">
        <h1 class="title">你还没有填写任何信息</h1>
        <div class="iptBox">
          <p class="part_s">
            <input class="ipt" v-model="name" type="text" placeholder="姓名">
            <span class="line"></span>
          </p>
          <p class="part_s">
            <input class="ipt" v-model="mobile" type="text" placeholder="手机号码">
          </p>
        </div>
        <div class="iptBox">
          <p class="part">
            <input id="address" class="ipt area" type="text" @click.stop="showSelect" v-model="area" readonly placeholder="请选择区域">
            <i class="arrow"></i>
          </p>
        </div>
        <div class="iptBox">
          <p class="part">
            <input class="ipt" v-model="details" type="text" placeholder="请填写详细街道地址">
          </p>
        </div>
        <a href="####" @click="submit" class="checkOver">确定</a>
      </div>
    </div>
    <yd-cityselect v-model="show1" :done="result1" :items="district"></yd-cityselect>
  </div>
</template>


<script>
  import District from 'ydui-district/dist/jd_province_city_area_id'

  export default {
    name: 'Model',
    data () {
      return {
        name: '',
        mobile: '',
        area: '',
        details: '',
        msg: 'qweqweqwe',
        show1: false,
        district: District
      }
    },
    methods: {
      hide(){
        this.$emit('hideModel');
      },
      result1(ret){
          this.area = ret.itemName1+' '+ret.itemName2+' '+ret.itemName3;
      },
      submit(){
        let reg = /^[1][34578][0-9]{9}$/;
        if(this.name == ''){
            alert("姓名不能为空");
            return false;
        }else if(!reg.test(this.mobile)){
            alert("手机号码不正确");
            return false;
        }else if(this.area == ''){
            alert('请选择区域！');
            return false;
        }else if(this.details == ''){
            alert("请填写详细地址！");
            return false;
        }else{
            let info = {
                name: this.name,
                mobile: this.mobile,
                area: this.area,
                details: this.details
            };
            this.$emit('transInfo',info);
            this.hide();
        }
      },
      showSelect(){
          this.show1 = true;
          let address = document.getElementById("address");
          address.blur();
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @line-color: #dfdfdf;
  .mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content{
    width: 6rem;
    background: #FFF;
    border-radius: 5px;
    overflow: hidden;
    .title{
      text-align: center;
      font-size: .32rem;
      font-weight: normal;
      line-height: 1rem;
      border-bottom: 1px solid @line-color;
    }
    .iptBox{
      border-bottom: 1px solid @line-color;
      display: flex;
      width: 6rem;
      flex-direction: row;
      .part{
        width: 100%;
        box-sizing: border-box;
        padding-left: .5rem;
        height: .8rem;
        position: relative;
        .arrow{
          position: absolute;
          right: .3rem;
          top: .23rem;
          width: .4rem;
          height: .4rem;
          background: url("../assets/arrow.png") no-repeat center;
          background-size: cover;
        }
      }
      .part_s{
        width: 50%;
        box-sizing: border-box;
        padding-left: .5rem;
        height: .8rem;
        overflow: hidden;
        position: relative;
        .line{
          position: absolute;
          right: 0;
          top: 0;
          height: .8rem;
          width: 0;
          border-right: 1px solid @line-color;
        }
      }
      .ipt{
        border: none;
        line-height: .8rem;
        width: 5rem;
        font-size: .3rem;
        &.area{
          &::-webkit-input-placeholder {
            color: #000;
          }
        }
      }
    }
    .checkOver{
      display: block;
      width: 100%;
      line-height: .8rem;
      margin-top: 1rem;
      font-size: .3rem;
      background: #F13160;
      color: #FFF;
      text-align: center;
      letter-spacing: 5px;
    }
  }


</style>
