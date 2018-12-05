const wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var columnChart = null;
var chartData = {
  main: {
    title: '温度展示',
    data1: [,,,,],
    data2: [,,,,],
    data3: [, , , ,],
    categories: ['1', '2', '3', '4', '5']
  }
};
Page({

  data: {
    chartTitle: '历史温度数据展示',
    chartTitle1: '历史湿度数据展示',
    chartTitle2: '历史二氧化碳数据展示',
    isMainChartDisplay: true,
  },
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'https://iotgogogo.info:10155/wx_control_analysis/',
      data: JSON.stringify({
        roomid: that.data.roomid, 
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log(JSON.stringify(res)); 
    that.setData({
         'data1[0].text':res.data.wd1,
         'data1[1].text': res.data.wd2,
         'data1[2].text': res.data.wd3,
         'data1[3].text': res.data.wd4,
         'data1[4].text': res.data.wd5,
         'data2[0].text': res.data.sd1,
         'data2[1].text': res.data.sd2,
         'data2[2].text': res.data.sd3,
         'data2[3].text': res.data.sd4,
         'data2[4].text': res.data.sd5,
         'data3[0].text': res.data.eyht1,
         'data3[1].text': res.data.eyht2,
         'data3[2].text': res.data.eyht3,
         'data3[3].text': res.data.eyht4,
         'data3[4].text': res.data.eyht5, 
        })
      } 
    })
  },
  onReady: function (e) {
    var windowWidth = 700;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    columnChart = new wxCharts({
      canvasId: 'columnCanvas',
      type: 'column',
      animation: true,
      categories: chartData.main.categories,
      series: [{
        name: '历史温度',
        color: 'black',
        data: chartData.main.data1,
        format: function (val, name) {
          return val.toFixed(2) + '度';
        }
      }],
      yAxis: {
        format: function (val) {
          return val + '度';
        },
        min: 0
      },
      xAxis: {
        disableGrid: false,
        type: 'calibration'
      },
      extra: {
        column: {
          width: 25,
        },
        legendTextColor: '#000000'
      },
      width: windowWidth,
      height: 200,
    });

    columnChart = new wxCharts({
      canvasId: 'columnCanvas1',
      type: 'column',
      animation: true,
      categories: chartData.main.categories,
      series: [{
        name: '历史湿度',
        color: 'balck',
        data: chartData.main.data2,
        format: function (val, name) {
          return val.toFixed(2) + 'ppm';
        }
      }],
      yAxis: {
        format: function (val) {
          return val + '%';
        },
        min: 0
      },
      xAxis: {
        disableGrid: false,
        type: 'calibration'
      },
      extra: {
        column: {
          width: 25,
        },
        legendTextColor: '#000000'
      },
      width: windowWidth,
      height: 200,
    })
    columnChart = new wxCharts({
      canvasId: 'columnCanvas2',
      type: 'column',
      animation: true,
      categories: chartData.main.categories,
      series: [{
        name: '历史二氧化碳浓度',
        color: 'balck',
        data: chartData.main.data3,
        format: function (val, name) {
          return val.toFixed(2) + 'ppm';
        }
      }],
      yAxis: {
        format: function (val) {
          return val + 'ppm';
        },
        min: 0
      },
      xAxis: {
        disableGrid: false,
        type: 'calibration'
      },
      extra: {
        column: {
          width: 25,
        },
        legendTextColor: '#000000'
      },
      width: windowWidth,
      height: 200,
    })
  } 

}) 