<template>
  <div>
    <br />
    <div
      class="col-xs-12 col-sm-10 col-md-8 col-lg-5 center-block"
      style="float: none;"
    >
      <div
        class="widget"
        style="box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.25);"
      >
        <aside
          id="php_text-8"
          class="widget php_text wow fadeInUp"
          data-wow-delay="3.0s"
        >
          <div class="block full2">
            <!--TAB标签-->
            <div class="block-title">
              <ul
                class="nav nav-tabs"
                id="panel-heading"
                style="background-image: linear-gradient( 135deg, #FFF720 10%, #3CD500 100%);"
              >
                <li style="width: 50%;" align="center">
                  <a href="#shop" data-toggle="tab">
                    <span style="font-weight:bold">
                      <i class="fa fa-shopping-bag fa-fw"></i>下单
                    </span>
                  </a>
                </li>
                <li style="width: 50%;" align="center" class>
                  <a href="#search" data-toggle="tab" id="tab-query">
                    <span style="font-weight:bold">
                      <i class="fa fa-search"></i> 查询
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <!--TAB标签-->
            <div class="tab-content">
              <!--在线下单-->

              <div class="tab-pane active in" id="shop">
                <center>
                  <span style="font-size:0.8em;">
                    <strong>
                      <span>
                        <span style="color:#FF0000;">下单先选择商品</span>≯
                        &nbsp;
                      </span>
                      <span style="color:#66CDAA;">
                        选择下单份数
                        <span style="color:#E53333;">≯</span>
                      </span>
                      <span>&nbsp;</span>
                      <span style="color:#EE33EE;">输入抖音链接</span>
                      <strong>
                        ≯ &nbsp;
                        <span style="color:#006600;">支付金额</span>
                      </strong>
                      <strong>
                        <span>
                          &nbsp;≯ &nbsp;
                        </span>
                        <span style="color:#64451D;">购买成功</span>
                      </strong>
                      <strong>
                        <span>
                          &nbsp;≯ &nbsp;
                        </span>
                        <span style="color:#64455D;">查单</span>
                      </strong>
                    </strong>
                  </span>
                </center>
                <div id="goodTypeContents">
                  <!--24小时内到账，不到请联系客服-->
                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-addon">选择商品</div>
                      <select
                        v-model="tid"
                        class="form-control"
                        @change="onGetPrice"
                      >
                        <!-- <option value="0">请选择商品</option> -->
                        <option
                          v-for="item in shoppingList"
                          :key="item.id"
                          :value="item.id"
                        >
                          {{
                            item.name +
                              " " +
                              item.price.toFixed(2) +
                              "元 / " +
                              item.count
                          }}次
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-addon">下单份数</div>
                      <input
                        class="form-control"
                        type="number"
                        min="1"
                        :value="count"
                        @input="onGetCount"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-addon">合计金额</div>
                      <input
                        type="text"
                        class="form-control"
                        disabled
                        :value="total.toFixed(2)"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-addon">抖音链接</div>
                      <input
                        type="text"
                        class="form-control"
                        v-model="shareText"
                        @change="getMediaId"
                        placeholder="请输入从抖音复制的链接内容"
                      />
                    </div>
                  </div>

                  <template v-if="url != ''">
                    <div class="input-group">
                      <div class="input-group-addon">视频链接</div>
                      <span class="form-control">{{ url }}</span>
                    </div>
                    <div class="input-group">
                      <div class="input-group-addon">抖音ID号</div>
                      <span class="form-control">{{ uid }}</span>
                    </div>
                    <div class="input-group">
                      <div class="input-group-addon">抖音昵称</div>
                      <span class="form-control">{{ nickname }}</span>
                    </div>
                    <div class="input-group">
                      <div class="input-group-addon">视频ID号</div>
                      <span class="form-control">{{ video_id }}</span>
                    </div>
                  </template>

                  <!-- <div
                    id="alert_frame"
                    class="alert alert-success animated rubberBand"
                    style="background: linear-gradient(to right, rgb(113, 215, 162), rgb(94, 209, 215)); font-weight: bold; color: white;"
                  >
                    <div
                      id="alert_frame"
                      class="alert alert-success animated rubberBand"
                      style="background: linear-gradient(to right, rgb(113, 215, 162), rgb(94, 209, 215)); font-weight: bold; color: white;"
                    >
                      QQ群941729571
                      <br />
                      <p>
                        <span class="label label-success">联系方式</span>
                        <a href="https://jq.qq.com/?_wv=1027&amp;k=5eoEn0m">
                          <font style="color:#FF0000;"
                            >有订单问题（点击这里
                            加无广告售后群-联系在线客服）戳我&gt;</font
                          >
                        </a>
                      </p>
                      提示：联系客服时直接发送 下单账号+订单问题
                      发其他内容的不处理哦！
                      <p></p>
                    </div>
                  </div> -->
                  <!-- <button type="primary" @click="onShopping">立即购买</button> -->
                  <div class="btn-group btn-group-justified form-group">
                    <a
                      type="submit"
                      id="submit_buy"
                      class="btn btn-block btn-primary"
                      @click="onShopping"
                      >立即购买</a
                    >
                    <!-- <el-button type="submit" class="btn btn-block btn-primary">立即购买</el-button> -->
                  </div>
                </div>
              </div>
              <!--在线下单-->

              <!--查询订单-->
              <div class="tab-pane" id="search">
                <a target="_blank" href="#">
                  <table class="table table-bordered">
                    <tbody>
                      <tr>
                        <td align="center">
                          <img
                            src="http://zs920.cn/imges/renzheng.gif"
                            title="正版认证"
                          />
                          <br />
                          <img
                            src="//q4.qlogo.cn/headimg_dl?dst_uin=3274387892&amp;spec=100"
                            alt="Avatar"
                            width="50"
                            height="50"
                            class="qqlogo"
                          /><br />
                          <div style="height:5px;"></div>
                          <a
                            target="_blank"
                            href="#"
                            class="btn btn-info btn-sm"
                            >站长没有联系方式</a
                          ><br />
                        </td>
                        <td align="center">
                          <img
                            src="http://zs920.cn/imges/renzheng.gif"
                            title="正版认证"
                          />
                          <br />
                          <img
                            src="http://zs920.cn/imges/kefu.jpg"
                            alt="Avatar"
                            width="50"
                            height="50"
                            class="qqlogo"
                          /><br />
                          <div style="height:5px;"></div>
                          <a
                            target="_blank"
                            href="#"
                            class="btn btn-info btn-sm"
                            >订单联系售后客服</a
                          ><br />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </a>
                <div class="col-xs-12 well well-sm animation-pullUp">
                  <a target="_blank" href="#"></a>
                  <center>
                    <a target="_blank" href="#">
                    <font color="#2E8B57"
                          ><i
                            class="glyphicon glyphicon-ok-circle text-success"
                          ></i
                        ></font>
                        已完成：
                        <font color="#2E8B57">如48小时内未到账请联系客服！</font
                        ><br />
                      <font size="2"
                        ><i
                          class="glyphicon glyphicon-refresh text-info fa-spin"
                        ></i>
                        未完成：<font color="#6699FF"
                          >说明订单正在努力完成中！</font
                        ><br />
                        <font color="#f0a63a"
                          ><i class="fa fa-spinner text-warning fa-spin"></i>
                        </font>
                        未支付：<font color="#f0a63a"
                          >请尽快支付，以便及时被接单！</font
                        ><br />
                        <font color="#FF6347"
                          ><i
                            class="glyphicon glyphicon-remove-circle text-danger"
                          ></i
                        ></font>
                        异常：<font color="#FF6347"
                          >说明下单信息错误，联系客服！</font
                        ><br />
                        <font color="#9999FF"><i class="fa fa-vimeo"></i></font>
                        注意：<font color="blue"
                          >状态仅供参考,以实际到账为准！</font
                        ><br />
                        <font color="#9999FF"><i class="fa fa-vimeo"></i></font>
                        注意：<font color="#9999FF"
                          >钻类业务1-48小时内到账 勿催！</font
                        >
                        <hr />
                        <font color="#8B1A1A"><i class="fa fa-qq"></i> </font>
                      </font>
                    </a>
                    <font size="2"
                      ><a
                        href=""
                        style="color:red"
                        >点这里联系官方售后客服 7*14小时为您售后</a
                      ></font
                    >
                  </center>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-btn">
                      <select
                        class="form-control"
                        id="searchtype"
                        style="padding: 6px 4px;width:90px"
                        v-model="selMethod"
                      >
                        <option value="0">抖音网址</option>
                        <option value="1">订单编号</option>
                      </select>
                    </div>
                    <input
                      v-show="selMethod == 0"
                      v-model="searchUrl"
                      class="form-control"
                      placeholder="请输入要查询的抖音网址"
                      @keyup.13="onSearch()"
                    />
                    <input
                      v-show="selMethod == 1"
                      v-model="searchOrder_id"
                      class="form-control"
                      placeholder="请输入要查询的订单编号"
                      @keyup.13="onSearch()"
                    />
                    <span
                      id="submit_query"
                      class="input-group-btn"
                      @click="onSearch()"
                    >
                      <span class="btn">查询</span>
                    </span>
                  </div>
                </div>
                <div
                  v-if="this.tableData.length > 0"
                  id="result2"
                  class="form-group"
                >
                  <center>
                    <small>
                      <font color="#ff0000">手机用户可以左右滑动</font>
                    </small>
                  </center>
                  <div class="table-responsive">
                    <el-table
                      :data="tableData"
                      border
                      stripe
                      style="width: 100%"
                    >
                      <el-table-column prop="id" label="任务ID" width="100">
                      </el-table-column>
                      <el-table-column label="抖音ID" width="160">
                        <template slot-scope="scope">
                          {{ scope.row.dy_id }}
                          <!-- <el-link
            type="primary"
            :href="'/admin/taskuser/list?dy_id=' + scope.row.dy_id"
            target="_blank"
            >{{ scope.row.dy_id }}</el-link
          > -->
                        </template>
                      </el-table-column>
                      <el-table-column prop="nickname" label="抖音昵称">
                      </el-table-column>
                      <el-table-column label="抖音链接">
                        <template slot-scope="scope">
                          <el-link
                            type="primary"
                            :herf="scope.row.url"
                            target="_blank"
                            >{{ scope.row.url }}</el-link
                          >
                        </template>
                      </el-table-column>
                      <el-table-column prop="price" label="费用">
                        <template slot-scope="scope">
                          {{ scope.row.price / 10000 }}元</template
                        >
                      </el-table-column>
                      <el-table-column label="任务类型">
                        <template slot-scope="scope">
                          {{ typedata[scope.row.type].value }}
                        </template>
                      </el-table-column>
                      <el-table-column
                        prop="count"
                        label="任务数量"
                      ></el-table-column>
                      <el-table-column prop="done" label="已完成">
                      </el-table-column>
                      <el-table-column prop="done" label="完成进度">
                        <template slot-scope="scope">
                          {{
                            ((scope.row.done / scope.row.count) * 100).toFixed(
                              2
                            )
                          }}%</template
                        >
                      </el-table-column>
                      <!-- <el-table-column prop="done" label="完成进度" width="150">
        <template slot-scope="scope">
            <el-progress :percentage="+((scope.row.done / scope.row.count * 100).toFixed(2))" :show-text="true"></el-progress>
            {{(scope.row.done / scope.row.count* 100).toFixed(2) }}%
        </template>
      </el-table-column> -->
                      <el-table-column label="状态" width="105">
                        <template slot-scope="scope">
                          <el-button
                            v-if="
                              scope.row.paystatus == 0 ||
                                scope.row.paystatus == 2
                            "
                            type="primary"
                            size="mini"
                            @click="onPay(scope.row)"
                            >点击支付</el-button
                          >

                          <span v-else
                            >{{
                              scope.row.done > scope.row.count ? "已" : "未"
                            }}完成</span
                          >
                        </template>
                      </el-table-column>
                      <el-table-column label="支付方式">
                        <template slot-scope="scope">
                          <span v-if="scope.row.pay !== 0">{{
                            payMethods[scope.row.pay]
                          }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="下单时间" width="160">
                        <template slot-scope="scope">
                          {{
                            scope.row.create_time.formatDate("yMdhms", "-")
                          }}</template
                        >
                      </el-table-column>

                      <!-- <el-table-column label="操作" width="80" fixed="right">
        <template slot-scope="scope">
            <el-button  v-if="scope.row.paystatus===0 || scope.row.paystaus===2" type="primary" size="mini" @click="onPay(scope.row)">支付</el-button>
        </template>
      </el-table-column> -->
                    </el-table>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <template>
      <el-dialog :visible.sync="dialogVisible" title="订单支付">
        <!-- <div class="container"> -->
        <div class="row justify-content-center">
          <!-- <div class="col-lg-5"> -->
          <div class="card">
            <div class="card-header pt-4 pb-4 text-center bg-primary">
              <span>
                <font color="white" size="5"
                  ><b
                    >请选择一种支付方式完成支付￥{{
                      (orderData.price / 10000).toFixed(2)
                    }}元</b
                  ></font
                >
              </span>
            </div>
            <div class="card-body">
              <div class="text-center w-75 m-auto">
                <h4 class="text-dark-50 text-center mt-0 font-weight-bold"></h4>
              </div>
              <div class="form-group mb-3">
                <p class="form-control">
                  商品名称: {{ orderData.nickname }}_{{ orderData.dy_id }}
                </p>
                <p class="form-control">
                  创建时间:
                  {{ orderData.create_time.formatDate("yMdhms", "-") }}
                </p>
                <p class="form-control">交易订单号: {{ orderData.order_id }}</p>
              </div>
              <div class="form-group mb-3">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="checkbox-signin"
                    checked=""
                    required=""
                  />
                  <label class="custom-control-label" for="checkbox-signin"
                    >确认订单信息无误，开始支付</label
                  >
                </div>
              </div>
              <div class="form-group mb-0 text-center">
                <a
                  class="btn btn-primary"
                  :href="
                    '/api/index/order/pay?pay=alipay&order_id=' +
                      orderData.order_id
                  "
                  target="_blank"
                  ><img
                    src="//shepay.ayunx.com/assets/icon/alipay.ico"
                    width="25px"
                  />支付宝</a
                >
                <a
                  class="btn btn-primary"
                  :href="
                    '/api/index/order/pay?pay=qqpay&order_id=' +
                      orderData.order_id
                  "
                  target="_blank"
                  ><img
                    src="//shepay.ayunx.com/assets/icon/qqpay.ico"
                    width="25px"
                  />QQ钱包</a
                ><br /><br />
                <a
                  class="btn btn-primary"
                  :href="
                    '/api/index/order/pay?pay=wxpay&order_id=' +
                      orderData.order_id
                  "
                  target="_blank"
                  ><img
                    src="//shepay.ayunx.com/assets/icon/wechat.ico"
                    width="25px"
                  />微信支付</a
                >
                <a
                  class="btn btn-primary"
                  :href="
                    '/api/index/order/pay?pay=tenpay&order_id=' +
                      orderData.order_id
                  "
                  target="_blank"
                  ><img
                    src="//shepay.ayunx.com/assets/icon/tenpay.ico"
                    width="25px"
                  />财付通</a
                >
              </div>
            </div>
          </div>
          <!-- </div> -->
        </div>
        <!-- </div> -->
      </el-dialog>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,

      shoppingList: {},

      tid: "",
      count: 1,
      shareText: "",

      selMethod: 0,

      url: "",
      uid: "",
      nickname: "",
      video_id: "",
      searchUrl: "",
      searchOrder_id: "",

      tableData: [],
      typedata: {
        1: {
          value: "关注"
        },
        2: {
          value: "点赞"
        }
      },

      payMethods: {
        1: "微信",
        2: "支付宝",
        3: "QQ钱包",
        4: "财付通"
      },
      paystatusData: {
        0: "未支付",
        1: "已支付",
        2: "支付异常",
        3: "无需支付"
      },
      orderData: {
        create_time: 0
      }
    };
  },

  async mounted() {
    await this.getShoppingList();
  },

  computed: {
    total: function() {
      return this.tid ? this.shoppingList[this.tid].price * this.count : 0;
    }
  },

  methods: {
    async getShoppingList() {
      let res = await this.$api.index.list();
      if (res.code == 0) {
        // console.log(res);
        for (let item of res.data) {
          item.price = item.price / 10000;
          this.$set(this.shoppingList, item.id, item);
        }
      }
    },

    onGetPrice() {
      // console.log(this.tid);
    },
    onGetCount(e) {
      this.count = e.target.value;
    },

    async getMediaId() {
      var regexp = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g,
        arr = this.shareText.match(regexp);

      if (
        arr == null ||
        arr.length == 0 ||
        this.shareText == "" ||
        this.shareText.indexOf("v.douyin.com") == -1
      ) {
        this.$message.error("请填写正确的作品链接");
        this.shareText = "";
        return;
      }

      var url = arr[0],
        data = await this.$api.method.getmediaid({
          url
        });

      this.shareText = "";
      if (data.code == 0) {
        this.url = data.data.url;
        this.video_id = data.data.media_id;
        this.uid = data.data.uid;
        this.nickname = data.data.nickname;
      } else {
        this.url = "";
        this.video_id = "";
        this.$message.error(data.msg);
      }
    },

    //立即购买
    async onShopping() {
      if (!this.tid) {
        this.$message({
          message: "请先选择商品",
          type: "error"
        });
        return;
      }
      if (!this.url) {
        this.$message({
          message: "请先输入抖音链接",
          type: "error"
        });
        return;
      }

      let dataObj = {
          task_id: this.tid,
          count: this.count,
          url: this.url
        },
        res = await this.$api.index.create(dataObj);
      if (res.code == 0) {
        // console.log(res);
        this.dialogVisible = true;
        this.orderData = res.data;
      }
    },

    //支付
    onPay(data) {
      this.dialogVisible = true;
      this.orderData = data;
    },

    //查询
    async onSearch() {
      let res = "";
      if (this.selMethod == 0) {
        if (!this.searchUrl) {
          this.$message({
            message: "请输入要搜索的抖音网址",
            type: "error"
          });
          return;
        }
        res = await this.$api.index.mylist({
          url: this.searchUrl
        });
      }

      if (this.selMethod == 1) {
        if (!this.searchOrder_id || isNaN(this.searchOrder_id*1)) {
          this.searchOrder_id = '';
          this.$message({
            message: "请输入要搜索的订单编号",
            type: "error"
          });
          return;
        }
        
        res = await this.$api.index.mylist({
          order_id: this.searchOrder_id
        });
      }
      if (res.code == 0) {
        // console.log(res);
        this.tableData = res.data;
      }else{
        this.$message({
          message:res.msg,
          type:"error"
        })
      }
    }
  }
};
</script>

<style lang="less" scoped>
@media (max-width: 768px) {
  /deep/.el-dialog {
    width: 100%;
  }
}

.elevator_item .hd-time-limited {
  display: block;
  position: fixed;
  right: 0;
  bottom: 445px;
  width: 40px;
  height: 140px;
  background-color: skyblue;
}

.elevator_item {
  position: fixed;
  right: 0;
  bottom: 95px;
  z-index: 11;
}

.elevator_item .feedback {
  width: 36px;
  height: 41px;
  font-size: 12px;
  padding: 5px 6px;
  display: block;
  border-radius: 5px;
  text-align: center;
  margin-top: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
  cursor: pointer;
}

.graHover {
  position: relative;
  overflow: hidden;
}

.input-group-addon {
  background: linear-gradient(135deg, #fff68f, #fff68f, #16c3f7, #fda6c0);
}

.btn {
  border-radius: 100px;
  background: linear-gradient(135deg, #16c3f7, #fda6c0);
}

#container-box-1 {
  color: #526372;
  text-transform: uppercase;
  width: 100%;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
}

#flip-box-1 {
  overflow: hidden;
  height: 50px;
}

#flip-box-1 div {
  height: 50px;
}

#flip-box-1 > div > div {
  color: #fff;
  display: inline-block;
  text-align: center;
  height: 50px;
  width: 100%;
}

#flip-box-1 div:first-child {
  animation: show 8s linear infinite;
}

.flip-box-1-1 {
  background-color: #ff7e40;
}

.flip-box-1-2 {
  background-color: #c166ff;
}

.flip-box-1-3 {
  background-color: #737373;
}

.flip-box-1-4 {
  background-color: #4ec7f3;
}

.flip-box-1-5 {
  background-color: #42c58a;
}

.flip-box-1-6 {
  background-color: #f1617d;
}

@keyframes show {
  0% {
    margin-top: -300px;
  }

  5% {
    margin-top: -250px;
  }

  16.666% {
    margin-top: -250px;
  }

  21.666% {
    margin-top: -200px;
  }

  33.332% {
    margin-top: -200px;
  }

  38.332% {
    margin-top: -150px;
  }

  49.998% {
    margin-top: -150px;
  }

  54.998% {
    margin-top: -100px;
  }

  66.664% {
    margin-top: -100px;
  }

  71.664% {
    margin-top: -50px;
  }

  83.33% {
    margin-top: -50px;
  }

  88.33% {
    margin-top: 0px;
  }

  99.996% {
    margin-top: 0px;
  }

  100% {
    margin-top: 300px;
  }
}
</style>
