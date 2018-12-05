const wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var columnChart = null;
var chartData = {
  main: {
    title: '温度展示',
    data1: [33, 32.5, 32.3, 32.1, 32],
    data2: [62, 58, 56, 55, 53],
    data3: [28, 25, 23, 24, 26],
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

  },
  onReady: function (e) {
    var that = this;
    setTimeout(function () {
      wx.navigateTo({
        url: '../chart2/chart2',
      })
    }, 2000)
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
        min: 20
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
  },


}); 