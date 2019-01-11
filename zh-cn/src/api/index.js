import request from '../utils/request'

export function fetchData () {
  return request('/h5/Annual_report/my_data', {
    body: {}
  })
}

export function draw () {
  return request('/h5/Annual_report/luck_draw', {
    body: {}
  })
}
