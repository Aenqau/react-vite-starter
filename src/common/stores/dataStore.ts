import { atom, selector, selectorFamily } from 'recoil'
import { dataService } from '../services/dataService'

export const forceDataUpdate = atom({
  key: 'forceDataUpdate',
  default: 0,
})

export const dataQuery = selector({
  key: 'dataQuery',
  get: async ({ get }) => {
    get(forceDataUpdate)
    return await dataService.getDataList()
  },
})

export const dataByIdQuery = selectorFamily({
  key: 'dataByIdQuery',
  get:
    (id: string) =>
    async ({ get }) => {
      get(forceDataUpdate)
      return await dataService.getData(id)
    },
})
