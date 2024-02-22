/**
 * 整个项目的api管理
 */

import request from './request';

/**
 * 首页表格数据
 * @param {} params
 * @returns
 */
export const getTableData = (params) => {
  return request({
    url: 'home/getTableData',
    method: 'get',
    data: params,
    mock: true
  });
};

/**
 * 首页Count数据
 * @param {} params
 * @returns
 */
export const getCountData = (params) => {
  return request({
    url: 'home/getCountData',
    method: 'get',
    data: params,
    mock: true
  });
};
