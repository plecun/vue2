import axios from "axios";
import { Loading, Message } from "element-ui";
import router from "../router";
import store from "@/store";
// 没有token的时候，跳转到登录页
let mLogin = "/login";

// if (process.env.NODE_ENV === 'development') {
//     axios.defaults.baseURL = '/api/user'
// }

axios.defaults.baseURL = "/api";
// 请求超时时间
axios.defaults.timeout = 60000;
// post请求头
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// let loadingInstance;

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    // loadingInstance = Loading.service({
    //   lock: true,
    //   background: 'rgba(0, 0, 0, 0.3)'
    // });
    let token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    // loadingInstance.close();
    let code = response.data.code || response.status;
    switch (code) {
      case 200:
        return Promise.resolve(response);
      case 401:
      case 403:
        store.dispatch("signOut").then(() => {
          location.href = mLogin;
        });
        return Promise.reject({
          ...response,
          data: {
            ...response.data,
            message: "登录超时",
          },
        });
      default:
        return Promise.reject(response);
    }
  },
  (error) => {
    let response = error.response;
    let code = error.response.data.code;
    // loadingInstance.close();
    if (response.status == 500) {
      if (code == 401 || code == 403) {
        console.log(response);
        store.dispatch("signOut").then(() => {
          location.href = mLogin;
        });
        return Promise.reject({
          data: {
            message: "登录超时",
          },
        });
      } else {
        Promise.reject(response);
      }
    } else if (response.status == 401 || response.status == 403) {
      store.dispatch("signOut").then(() => {
        location.href = mLogin;
      });
      return Promise.reject({
        ...response,
        data: {
          ...response.data,
          message: "登录超时",
        },
      });
    } else {
      Promise.reject(response);
    }
  }
);

const handlePromise = (promise, resolve, reject) => {
  promise
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      if (err && err.data && err.data.message) {
        Message.error(err.data.message);
        reject(err.data);
      } else if (err && err.data && err.data.code && err.data.msg) {
        Message.error(err.data.msg);
        reject(err.data);
      } else {
        Message.error("系统错误");
        reject(err);
      }
      // loadingInstance.close();
    });
};

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    handlePromise(
      axios.get(url, {
        params: params,
      }),
      resolve,
      reject
    );
  });
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function getIds(url, params) {
  return new Promise((resolve, reject) => {
    handlePromise(
      axios.get(url, {
        data: params,
      }),
      resolve,
      reject
    );
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, data = {}, params) {
  return new Promise((resolve, reject) => {
    handlePromise(
      axios.post(url, data, {
        params: params,
      }),
      resolve,
      reject
    );
  });
}

/**
 * put方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function put(url, params) {
  return new Promise((resolve, reject) => {
    handlePromise(axios.put(url, params), resolve, reject);
  });
}

/**
 * delete方法，对应delete请求
 * @param {String} url [请求的url地址]
 */
export function del(url, params) {
  return new Promise((resolve, reject) => {
    handlePromise(
      axios.delete(url, {
        params: params,
      }),
      resolve,
      reject
    );
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {File} file [上传的文件]
 * @param {Object} params [请求时携带的参数]
 */
export function postFile(url, file, params) {
  return new Promise((resolve, reject) => {
    handlePromise(axios.post(url, file, params), resolve, reject);
  });
}

/**
 * post下载方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function postDownload(url, params) {
  return new Promise((resolve, reject) => {
    handlePromise(
      axios.post(url, params, {
        responseType: "blob",
      }),
      resolve,
      reject
    );
  });
}

/**
 * get下载方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function getDownload(url, params) {
  return new Promise((resolve, reject) => {
    handlePromise(
      axios.get(url, {
        params,
        responseType: "blob",
      }),
      resolve,
      reject
    );
  });
}
