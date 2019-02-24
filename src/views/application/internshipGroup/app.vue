<template>
  <Container class="myinternship" ref="container">
    <LoadMore @refresh="refresh" :refreshing="refreshing">
    <ExpansionPanel expand>
      <div slot="header" class="myschool">
        <div class="schoollogo">
          <Avatar size=22>
            <img src="../../../assets/img/headpic.png">
          </Avatar>
        </div>
        <div class="schoolname">
          江苏科技大学 <span class="studyyear">2018届</span>
        </div>
      </div>
      <div class="cname">
        镇江创博工业集团(实习中)
      </div>
      <div class="iscontent">
        <div class="iscmenu">实习周志</div><div class="iscmenu">实习计划</div><div class="iscmenu">实习协议</div>
      </div>
      <div class="iscontent">
        <div class="iscmenu">实习报告</div><div class="iscmenu">实习考核</div><div class="iscmenu">实习总结</div>
      </div>
      <div class="cname">
        江苏傲天计科技有限公司(已离职)
      </div>
      <div class="iscontent">
        <div class="iscmenu">实习周志</div><div class="iscmenu">实习计划</div><div class="iscmenu">实习协议</div>
      </div>
    </ExpansionPanel>
    <ExpansionPanel>
      <div slot="header" class="myschool">
        <div class="schoollogo">
          <Avatar size=22>
            <img src="../../../assets/img/headpic.png">
          </Avatar>
        </div>
        <div class="schoolname">
          镇江润州职业技术学院 <span class="studyyear">2015届</span>
        </div>
      </div>
      dfsdf
    </ExpansionPanel>
    </LoadMore>
    
  </Container>
</template>

<script>
import { Row, Col, Container } from 'muse-ui/lib/Grid';
import tool from 'util/tools';
import service from 'service';
import { Toast } from 'mint-ui';
import { LoadMore ,Avatar, ExpansionPanel } from 'muse-ui';
export default {
  data () {
    return {
      
      refreshing: false
    };
  },
  components: {
    Row,
    Avatar,
    ExpansionPanel,
    Col,
    Container,
    LoadMore
  },
  methods: {
    refresh () {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
      }, 200);
    },
    
  },
  mounted () {
    // this.internshipAgreement();
    
  }
};
</script>
<style lang="less" scoped>
@import url("../../../assets/css/base.less");
.container {
  margin: 0;
  padding: 0;
}
.myinternship{
  .myschool{
    display: flex;
    .schoollogo{
      width: 30px;
    }
    .schoolname{
      font-size: 16px;
      line-height: 22px;
      flex: 1;
      .studyyear{
        color: darkcyan;
        font-size: 10px;
      }
    }
  }
    .cname{
      font-size: 14px;
      font-weight:bold;
      line-height: 30px;
      border-bottom: 1px dashed #cccccc;
      margin-bottom: 10px;
    }
    .iscontent{
      display: flex;
      padding: 0 10px;
      .iscmenu{
        background: #00bfa5;
        color: #ffffff;
        flex: 1;
        padding: 5px 10px;
        font-size: 12px;
        border: 1px solid #eeeeee;
        text-align: center;
        margin: 10px;
        border-radius: round(5px);
      }
    }
}
</style>
