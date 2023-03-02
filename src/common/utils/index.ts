import { AxiosError } from 'axios'

export const getApiRoute = (): string => {
  return ''
}

export const handleServiceError = (error: AxiosError): void => {
  console.log(error)
}
