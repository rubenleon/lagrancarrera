function timeDiffCalc(dateFuture, dateNow) {
    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

    // calculate days
    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;
    console.log('calculated days', days);

    // calculate hours
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;
    console.log('calculated hours', hours);

    // calculate minutes
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;
    console.log('minutes', minutes);

     // calculate segundos
    const seg = Math.floor(diffInMilliSeconds)
    console.log('segundos', seg);

    /*
    let difference = '';
    if (days > 0) {
      difference += (days === 1) ? `${days} day, ` : `${days} days, `;
    }

    difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `;

    difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`; 

    return difference;
    */
    return [days,hours,minutes,seg]
  }

  //console.log(timeDiffCalc(new Date('2019/10/1 04:10:00'), new Date('2022/06/1 18:30:00')));
  tiempo = timeDiffCalc(new Date('2022/06/1 17:30:00'), new Date('2022/06/1 18:30:30'))
  console.log(tiempo[3]);


//https://bearnithi.com/2019/11/10/how-to-calculate-the-time-difference-days-hours-minutes-between-two-dates-in-javascript/#:~:text=Calculate%20Hours%20Difference%20between%20Two%20Dates%20in%20JavaScript&text=To%20calculate%20the%20hours%20difference,the%20remainder%20using%20modules%20operator
// the time difference is:
// 1 day, 14 hours, 10 minutes