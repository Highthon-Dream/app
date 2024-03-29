import { AxiosRequestConfig, AxiosResponse } from "axios";
import { getDateParsedData } from "./date";
import Storage from "./storage";

export const requestInterceptors = (requestConfig: AxiosRequestConfig) => {
  const accessToken = Storage.getItem("identify");
  if (requestConfig.headers) {
    (requestConfig.headers as any)["USER-IDENTIFY"] = accessToken;
  }

  const urlParams = requestConfig.url?.split("/:") || [];
  if (urlParams.length < 2) return requestConfig;

  const paramParsedUrl = urlParams
    ?.map((paramKey) => {
      return requestConfig.params[paramKey];
    })
    .join("/");

  urlParams?.forEach((paramKey: string) => {
    delete requestConfig.params[paramKey];
  }, {});

  return {
    ...requestConfig,
    url: paramParsedUrl,
  };
};

export const responseInterceptors = (originalResponse: AxiosResponse) => {
  return {
    ...originalResponse,
    data: getDateParsedData(originalResponse.data),
  };
};
