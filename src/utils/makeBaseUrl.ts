export const makeBaseUrl = (str: string) => {
  const urlArray: string[] = `${process.env.NEXTAUTH_URL}${str}`?.split("/")!;

  for (let i = 0; i < urlArray.length; i++) {
    const element = urlArray[i];
    if (element === "undefined") {
      urlArray.splice(i, 1);
    }
  }

  return urlArray.join("/");
};
