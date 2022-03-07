const dateFormat = (date) => {
    const split = date.split('.');
    let [month, day, year] = split;
    const temp = month;
    month = day;
    day = temp;
    return [month, day, year].join('.');
  };
  
  const getDayName = (number) => {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[number.getDay()];
  };
  
  const getWeekNum = (date) => {
    const currentDate = date.getDate();
    const weekOfMonth = Math.ceil(((currentDate) / 7));
    return weekOfMonth;
  };
  
  const getMonthName = (number) => {
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
      'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    return months[number.getMonth()];
  };
  
  const getYearNum = (number) => number.getFullYear();
  
  const getDayInfo = (date) => {
    const formatDate = dateFormat(date);
    const newDate = new Date(formatDate);
    const day = getDayName(newDate);
    const week = getWeekNum(newDate);
    const month = getMonthName(newDate);
    const year = getYearNum(newDate);
  
    return console.log(`${day}, ${week} неделя ${month} ${year} года`);
  };


getDayInfo('01.01.2022') // Суббота, 1 неделя Января 2022 года
getDayInfo('15.12.2021') // Среда, 3 неделя Декабря 2021 года
