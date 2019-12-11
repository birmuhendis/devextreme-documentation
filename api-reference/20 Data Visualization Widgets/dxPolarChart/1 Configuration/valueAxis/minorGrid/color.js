﻿var dataSource = [
    { arg: "January", day: 6, night: 2 },
    { arg: "February", day: 7, night: 2 },
    { arg: "March", day: 10, night: 3 },
    { arg: "April", day: 14, night: 5 },
    { arg: "May", day: 18, night: 8 },
    { arg: "June", day: 21, night: 11 },
    { arg: "July", day: 22, night: 13 },
    { arg: "August", day: 22, night: 13 },
    { arg: "September", day: 19, night: 11 },
    { arg: "October", day: 15, night: 8 },
    { arg: "November", day: 10, night: 5 },
    { arg: "December", day: 7, night: 3 }];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        series: [
            { valueField: "day", name: "Day", color: "#ba4d51" },
            { valueField: "night", name: "Night", color: "#5f8b95" }
        ],
        commonSeriesSettings: {
            type: "line"
        },
        valueAxis: {
            minorGrid: {
                visible: true,
                color: 'teal'
            },
            minorTickInterval: 1.5
        }
    });
});