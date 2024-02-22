/**
 * 环境配置文件
 */
//当前环境
const env = import.meta.env.MODE || 'prod';

const EnvConfig = {
  development: {
    baseApi: '/api',
    mockApi: 'https://mock.presstime.cn/mock/65d36e6ca07c65d1ba4511c4/api'
  },
  test: {
    baseApi: '/api',
    mockApi:
      'https://www.fastmock.site/mock/93f1f55bc4718d6e552e53225ee15530/api/home/getTableData'
  },
  pro: {
    baseApi: '/api',
    mockApi:
      'https://www.fastmock.site/mock/93f1f55bc4718d6e552e53225ee15530/api/home/getTableData'
  }
};

export default {
  env,
  mock: true,
  ...EnvConfig[env]
};
