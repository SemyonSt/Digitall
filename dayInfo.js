const normolizeDate = (date) => {
    const masDate = date.split('.')
    const [number, mounth, year] = masDate;
    return [mounth, number, year]
};

const getDayInfo = (day) => {
    const [mounth, number, year] = normolizeDate(day)
    const date = new Date(normolizeDate(day));

    const startTime = new Date(`${mounth}.01.${year}`).getTime();
    const nowTime = date.getTime();
    const pastTime = nowTime - startTime;

    const hourOfMillisecs = 3600000;
    const hoursOfOneWeek = 168;
    
    const week = pastTime / hourOfMillisecs / hoursOfOneWeek + 1;

    
    const monthA = 'Января,Февраля,Марта,Апреля,Мая,Июня,Июля,Агуста,Сентября,Октябя,Ноября,Декабря'.split(',');
    const weekDay = 'Понедельник,Вторник,Среда,Четверг,Пятница,Суббота,Воскресенье'.split(',');
    
    console.log(`${weekDay[date.getDay()-1]}, ${week} неделя ${monthA[date.getMonth()]} ${year} года`); 
};


getDayInfo('01.01.2022') // Суббота, 1 неделя Января 2022 года
getDayInfo('15.12.2021') // Среда, 3 неделя Декабря 2021 года
