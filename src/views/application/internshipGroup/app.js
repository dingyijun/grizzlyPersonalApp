import Vue from 'vue';
import App from './app.vue';
import 'muse-ui/lib/styles/base.less';
// import 'muse-ui/lib/styles/theme.less';
import 'assets/css/global.less';
import 'assets/fonts/iconfont.css';

if (process.env !== 'development') {
  window.apiready = function () { document.body.addEventListener('touchstart',function(){});
    new Vue({
      el: '#app',
      render: h => h(App)
    });
  };
} else {
  new Vue({
    el: '#app',
    render: h => h(App)
  });
}
