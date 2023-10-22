import { format, isAfter, sub } from "date-fns";

type getCacheParams = { storageName: string };
type saveOnCacheParams = {
  storageName: string;
  data: Object[] | String;
  expirationDate: Date;
};

function saveOnCache({
  storageName,
  data,
  expirationDate, //incorporar fecha por defecto de hoy
}: saveOnCacheParams) {
  const storagedObject = {
    expirationDate: format(expirationDate, "yyyy-MM-dd HH:mm:ss"),
    data,
  };

  localStorage.setItem(storageName, JSON.stringify(storagedObject));
}

function getCache({ storageName }: getCacheParams) {
  try {
    let data = localStorage.getItem(storageName);

    if (data === null) {
      // this was previously a console.error. Since it was making the tests resolution filthy on terminal I instead placed a console.log
      // console.log("The data that was searched doesn't exist");
      return { data: null, expirationDate: null, expirated: true };
    }

    let parsedData: { data: Object; expirationDate: string } = JSON.parse(data);

    return {
      data: parsedData.data,
      expirationDate: new Date(parsedData.expirationDate),
      expirated: have24HoursPassed(parsedData.expirationDate),
    };
  } catch (error) {
    return { data: null, expirationDate: null, expirated: true };
  }
}

function have24HoursPassed(dateInString: string) {
  // passing dates to milliseconds for a simpler comparison
  const savedDate = new Date(dateInString).getTime();
  const today = new Date().getTime();

  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

  // the calculus is: if the difference between today and the date you are comparing to is greater that the time a day of 24 hours has, that means that in fact 24 passed
  return today - savedDate > oneDayInMilliseconds;
}

export { saveOnCache, getCache };
