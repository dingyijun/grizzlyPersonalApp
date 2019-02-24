<template>
  <Container>
    <Row class="mytitle"><strong>招聘活动</strong></Row>
    <Row class="mymenu">
      <Col span='3'>
      <div class="grid-cell" style="background:Teal">
          <i class='iconfont icon-details'></i>
        </div>
          <div class="icon_name">招聘</div>
      </Col>
      <Col span='3'>
      <div class="grid-cell" style="background:Purple">
          <i class='iconfont icon-renkoujishu'></i>
        </div>
          <div class="icon_name">双选会</div>
      </Col>
      <Col span='3'>
      <div class="grid-cell" style="background:orange">
          <i class='iconfont icon-kaohepingjia'></i>
        </div>
          <div class="icon_name">宣讲会</div>
      </Col>
    </Row>
    <Row class="mytitle"><strong>实习管理</strong></Row>
    <Row class="mymenu">
      <Col span='3' @click='handleto("internshipGroup","顶岗实习管理","./application/internshipGroup.html",)'>
        <div class="grid-cell" style="background:Brown">
          <i class='iconfont icon-tianyekaogu'></i>
        </div>
          <div class="icon_name">顶岗实习</div>
      </Col>
    </Row>
    <!--
    <Stepper :active-step="0" orientation="vertical" :linear="false" v-if='companys.length>0'>
      <template v-for='company in companys'>
        <Step :key='company.id' @click='Internship(company.id,company.companyName,company.department,company.group)'>
          <StepLabel  class='comStepper'>
            <Card>
              <p>{{company.practiceTime}}</p>
              <CardHeader :title="company.companyName" :sub-title="company.department + '  ' +company.group"></CardHeader>
            </Card>
            <span class='status'>{{company.practicesStatus}}</span>
            <Icon class='iconfont icon-jinru' right size="12" value=":mudocs-icon-communication-voicemail"></Icon>
          </StepLabel>
        </Step>
      </template>
    </Stepper>
     <div v-else class='notJoined'>你还未加入企业实习，立即去 <Button color="#009688" @click="hotJobListAll">投递职位</Button>
       <br>
       <br>
       <div @click="refresh" class='refreshBtn'>
          点击刷新
       </div>
     </div>
     </-->
  </Container>
</template>
<script>
import { Card, Icon, Button,Avatar } from 'muse-ui';
import { CardHeader } from 'muse-ui/lib/Card';
import { Stepper, Step, StepLabel } from 'muse-ui/lib/Stepper';
import { Container , Row , Col} from 'muse-ui/lib/Grid';
import tool from 'util/tools';
import service from 'service';
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
      companys: []
    };
  },
  components: {
    Container,
    Row,
    Col,
    Card,
    Avatar,
    CardHeader,
    Stepper,
    Step,
    StepLabel,
    Icon,
    Button
  },
  methods: {
    handleto (name,title,furl) {
      tool.openWin({
        name: name,
        url: '../win.html',
        title: title,
        fname: name+'_f',
        furl: furl,
        hasLeft: 1,
        hasRight: 0
      });
    },


    //暂废=====================================================================
    /*
    // 列表数据
    async listsData () {
      const response = await service.internshipCompany({});
      switch (response.code) {
        case 0:
          this.companys = response.result.lists;
          break;
        default:
          Toast({
            position: 'top',
            message: '加载失败，请稍后重试！！'
          });
          break;
      }
    },


    Internship (id, companyName, department, group) {
      tool.openWin({
        name: 'Internship_' + id,
        url: '../win.html',
        title: '校外实习',
        fname: 'Internship_f_' + id,
        furl: './application/Internship.html',
        hasLeft: 1,
        data: {
          companyId: id,
          companyName: companyName,
          department: department,
          group: group
        }
      });
    },
    hotJobListAll () {
      tool.openWin({
        name: 'jobSearchList',
        url: '../win.html',
        title: '热门职位',
        fname: 'jobSearchList_f',
        furl: './hr/jobSearchList.html',
        hasLeft: 1,
        hasRight: 0,
        data: {
          istj: 1 // 1是推荐 0是不推荐
        }
      });
    },
    refresh(){
      this.listsData();
    }*/
  },
  mounted () {
    //this.listsData();
  }
};
</script>
<style lang="less">
@import url("../../../assets/css/base.less");
.iconfont{
  color:#FFFFFF;
  font-size: 30px;
}
.icon_name{
  font-size: 12px;
}
.mymenu{
  padding: 10px;
}
.mytitle{
  line-height: 30px;
  font-size: 16px;
  padding-top: 15px;
}
.grid-cell {
  margin: 10px auto;
  align-items: center;
  line-height: 50px;
  width: 50px;
  height: 50px;
  border-radius:round(8px);
  justify-content: space-between;
  color: #333;
}

.mu-card {
  box-shadow: none;
  background: none;
  width: 75%;
}

.mu-card-header-title {
  padding-right: 10px;
}

.status {
  width: 15%;
  color: #999;
}

.mu-stepper{
  background:#fff;
   padding: 30px 0;
}

.mu-card-header {
  padding: 0;
}

.mu-card p {
  margin: 0;
  font-size: 12px;
}

.notJoined{
 padding: 50px 0 30px;
}

.container {
  text-align: center;
}

.mu-step-label.completed .mu-step-label-circle, .mu-step-label.active .mu-step-label-circle{
  background: #009688;
}

.mu-step-label.completed .status , .mu-step-label.active .status,.refreshBtn{
color: #009688;
}
</style>
