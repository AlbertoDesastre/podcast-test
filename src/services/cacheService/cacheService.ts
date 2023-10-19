import { format, isAfter } from "date-fns";

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
      console.error("The data that was searched doesn't exist");
      return { data: null, expirationDate: null, expirated: false };
    }

    let parsedData: { data: Object; expirationDate: string } = JSON.parse(data);

    return {
      data: parsedData.data,
      expirationDate: new Date(parsedData.expirationDate),
      expirated: have24HoursPassed(parsedData.expirationDate),
    };
  } catch (error) {
    console.error(error);
  }
}

function have24HoursPassed(dateInString: string) {
  const savedDate = new Date(dateInString);
  const today = new Date();

  return isAfter(today, savedDate);
}

export { saveOnCache, getCache };
