// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


Number.prototype.formatDate = function (_format, conn = null) {

    _format = _format ? _format : 'hms';


    var _num = this;
    // _num = _num < 1000000000 ? (_num + Date.now() / 1000) : _num;
    _num = _num > 10000000000 ? _num : _num * 1000;
    var _date = new Date(_num),
        _time = {
            // day : _date.getDate(),
            // hour : _date.getHours(),
            minute: _date.getMinutes(),
            second: _date.getSeconds(),
            month:_date.getMonth() + 1,
            date:_date.getDate()
        };
    _time.minute = _time.minute < 10 ? '0' + _time.minute : _time.minute;
    _time.second = _time.second < 10 ? '0' + _time.second : _time.second;
    _time.month = _time.month < 10 ? '0' + _time.month : _time.month;
    _time.date = _time.date < 10 ? '0' + _time.date : _time.date;

    var _str = '';
    if (_format.indexOf('y') > -1) {
        _str += _date.getFullYear() + (conn == null ? '年' : conn);
    }
    if (_format.indexOf('M') > -1) {
        _str += _time.month + (conn == null ? '月' : conn);
    }
    if (_format.indexOf('d') > -1) {
        _str += _time.date + (conn == null ? '日' : '');
    }
    if (_format.indexOf('d') > -1 && _format.indexOf('h') > -1) {
        _str += ' ';
    }
    if (_format.indexOf('h') > -1) {
        _str += _date.getHours();
    }
    if (_format.indexOf('h') > -1 && _format.indexOf('m') > -1) {
        _str += ':';
    }
    if (_format.indexOf('m') > -1) {
        _str += _time.minute;
    }
    if (_format.indexOf('m') > -1 && _format.indexOf('s') > -1) {
        _str += ':';
    }
    if (_format.indexOf('s') > -1) {
        _str += _time.second;
    }
    // console.log(_format);

    return _str;

    // return _time.day + '日 ' + _time.hour + ':' + _time.minute + ':' + _time.second;
};

String.prototype.formatDate = function (_format, conn) {
    return (this * 1).formatDate(_format, conn);
};

Number.prototype.getDate = function (){
    var _num = this;
    // _num = _num < 1000000000 ? (_num + Date.now() / 1000) : _num;
    _num = _num > 10000000000 ? _num : _num * 1000;
    var log_date = new Date(_num), data={};

    data.year = log_date.getFullYear();
    data.day = log_date.getDate(); // data.log_time.formatDate('d','');
    data.dayStr = data.day < 10 ? ('0' + data.day) : data.day;
    data.month = log_date.getMonth() + 1; // data.log_time.formatDate('M','');
    data.monthStr = data.month < 10 ? ('0' + data.month) : data.month;
    data.hour = log_date.getHours(); // data.log_time.formatDate('hm');
    data.hourStr = data.hour < 10 ? ('0' + data.hour) : data.hour;
    data.minute = log_date.getMinutes(); // 
    data.minuteStr = data.minute < 10 ? ('0' + data.minute) : data.minute;
    data.date = data.year * 10000 + data.month * 100 ;
    
    return data;
}

String.prototype.getDate = function () {
    return (this * 1).getDate();
};