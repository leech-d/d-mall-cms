import dRequest from '@/service'

import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return dRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

export function createPageData(url: string, data: any) {
  return dRequest.post<IDataType>({
    url: url,
    data: data
  })
}

export function editPageData(url: string, data: any) {
  return dRequest.patch<IDataType>({
    url: url,
    data: data
  })
}

// url: /users/id
export function deletePageData(url: string) {
  return dRequest.delete<IDataType>({
    url: url
  })
}
