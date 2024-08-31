import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};
export interface TSlot {
  _id: string;
  service: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked?: string;
}
export interface TReview {
  _id: string;
  name: string;
  title: string;
  rating: number;
  image: string;
  review: string;
  date: string;
}

export interface TService {
  _id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  duration: number;
  isDeleted: boolean;
  reviewsCollection?: [];
}

export interface VehiclesData {
  [vehicleType: string]: {
    [brand: string]: string[];
  };
}

export type VehicleType = keyof VehiclesData;
export type BrandType<T extends VehicleType> = keyof VehiclesData[T];
