async function isApiDown(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(
        `API it's probably down and fetching was not possible: ${response.status} - ${response.statusText}`
      );
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error when obtaining the data: ${error}`);
  }
}

export { isApiDown };
