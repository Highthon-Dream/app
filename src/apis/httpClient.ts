import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { requestInterceptors, responseInterceptors } from "./utils";
import Storage from "./storage";

export interface HttpClientConfig {
  baseURL?: string;
  timeout?: number;
  headers?: { identify?: string };
}

export class HttpClient {
  private api: AxiosInstance;

  private static clientConfig: HttpClientConfig;

  constructor(url: string, axiosConfig: HttpClientConfig) {
    this.api = axios.create({
      ...axiosConfig,
      baseURL: `${axiosConfig.baseURL}${url}`,
    });
    HttpClient.clientConfig = { headers: { identify: "" } };
    this.setting();
  }

  get(requestConfig?: AxiosRequestConfig) {
    return this.api.get("", { ...HttpClient.clientConfig, ...requestConfig });
  }

  getById(requestConfig?: AxiosRequestConfig) {
    return this.api.get("/:id", {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  putById(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.put("/:id", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  post(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.post("", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  put(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.put("", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  delete(requestConfig?: AxiosRequestConfig) {
    return this.api.delete("", {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  private setting() {
    HttpClient.setCommonInterceptors(this.api);
  }

  static setAccessToken() {
    const accessToken = Storage.getItem("identify");
    HttpClient.clientConfig.headers = {
      ...HttpClient.clientConfig.headers,
      identify: accessToken || undefined,
    };
  }

  static removeAccessToken() {
    Storage.setItem("identify", "");
  }

  private static setCommonInterceptors(instance: AxiosInstance) {
    instance.interceptors.request.use(requestInterceptors as any);
    instance.interceptors.response.use(responseInterceptors);
  }
}

const axiosConfig: HttpClientConfig = {
  baseURL: "http://192.168.10.231:8080",
  timeout: 100000,
};

export default {
  bucketList: new HttpClient("/bucket-list", axiosConfig),
  questionList: new HttpClient("/question", axiosConfig)
};
