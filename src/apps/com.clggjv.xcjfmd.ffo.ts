import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.clggjv.xcjfmd.ffo',
  name: 'Lanerc',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 15000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: [
            'com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity',
          ],
          matches: '[vid="beizi_interstitial_ad_close_container_rl"]',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: ['com.clggjv.xcjfmd.ffo.MainActivity'],
          matches: "[name='android.widget.ImageView'][width=67][height=67]",
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
          matches:
            "[name='android.widget.ImageView' && width>=80 && width<=90 && height>=80 && height<=90]",
        },
      ],
    },
  ],
});
