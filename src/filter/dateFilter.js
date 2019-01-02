export function formatDate(val, format){
    //format为过滤器中传过来的值
    let date = new Date(val);
    if(format == 'date'){
        let month = date.getMonth()+1;
        let day = date.getDate();
        return month + '月' + day + '日';
    }
    else if(format == 'week'){
        let weekArr = ['一', '二', '三', '四', '五', '六', '日'];
        let week = date.getDay();
        return '星期'+weekArr[week-1];
    }
}