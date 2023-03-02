import { IApiClient } from '../utils/apiClient'
import ApiClient from '../utils/apiClient'
import { Data } from '../contracts/data'

interface IDataApiClient {
  getDataList(): Promise<Data[] | undefined>
  getData(id: string): Promise<Data | undefined>
  createData(dataCreateRequest: Data): Promise<Data | undefined>
  updateData(id: string, data: Data): Promise<Data | undefined>
}

class DataApiClient implements IDataApiClient {
  dataAPIClient: IApiClient
  entityPath: string

  constructor(dataApiClient: IApiClient) {
    this.dataAPIClient = dataApiClient
    this.entityPath = '/data'
  }

  async getDataList(): Promise<Data[] | undefined> {
    try {
      const response = await this.dataAPIClient.get<{ data: Data[] }>(
        this.entityPath
      )
      return response.data
    } catch (exception) {
      console.error(exception)
    }
  }

  async getData(): Promise<Data | undefined> {
    try {
      const response = await this.dataAPIClient.get<{ data: Data }>(
        this.entityPath
      )
      return response.data
    } catch (exception) {
      console.error(exception)
    }
  }

  async createData(createRequest: Data): Promise<Data | undefined> {
    try {
      const response = await this.dataAPIClient.post<Data, { data: Data }>(
        this.entityPath,
        createRequest
      )
      return response.data
    } catch (exception) {
      console.error(exception)
    }
  }

  async updateData(id: string, updateRequest: Data): Promise<Data | undefined> {
    try {
      const response = await this.dataAPIClient.post<Data, { data: Data }>(
        this.entityPath,
        updateRequest
      )
      return response.data
    } catch (exception) {
      console.error(exception)
    }
  }
}

class DataService {
  dataApiClient: IDataApiClient

  constructor(dataApiClient: IDataApiClient) {
    this.dataApiClient = dataApiClient
  }

  async getDataList(): Promise<Data[] | undefined> {
    return this.dataApiClient.getDataList()
  }

  async getData(id: string): Promise<Data | undefined> {
    return this.dataApiClient.getData(id)
  }

  async createData(dataCreateRequest: Data): Promise<Data | undefined> {
    return this.dataApiClient.createData(dataCreateRequest)
  }

  async updateData(
    id: string,
    dataUpdateRequest: Data
  ): Promise<Data | undefined> {
    return this.dataApiClient.updateData(id, dataUpdateRequest)
  }
}

const dataApiClient = new DataApiClient(new ApiClient({ accessToken: '' }))

export const dataService = new DataService(dataApiClient)
