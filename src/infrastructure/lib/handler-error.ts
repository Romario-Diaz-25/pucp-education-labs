import { AppError } from "./app-error";
import { LOG_LEVEL } from "./constant";
import { HttpCode, statusResponse } from "./http-status-codes";

export const badRequestError = (
  err: string,

  isOperational: boolean = true
) => {
  return new AppError(
    statusResponse.BAD_REQUEST,
    HttpCode.BAD_REQUEST,
    err,
    isOperational
  );
};

export const internalServerError = (
  err: string,
  isOperational: boolean = true
) => {
  return new AppError(
    statusResponse.INTERNAL_SERVER_ERROR,
    HttpCode.INTERNAL_SERVER_ERROR,
    err,
    isOperational
  );
};

export const notFoundError = (err: string, isOperational: boolean = true) => {
  return new AppError(
    statusResponse.NOT_FOUND,
    HttpCode.NOT_FOUND,
    err,
    isOperational
  );
};

export const conflictError = (err: string, isOperational: boolean = true) => {
  return new AppError(
    statusResponse.CONFLICT,
    HttpCode.CONFLICT,
    err,
    isOperational
  );
};

export const notModifiedError = (
  err: string,
  isOperational: boolean = true
) => {
  return new AppError(
    statusResponse.NOT_MODIFIED,
    HttpCode.NOT_MODIFIED,
    err,
    isOperational
  );
};

export const unauthorizedError = (
  err: string,
  isOperational: boolean = true
) => {
  return new AppError(
    statusResponse.UNAUTHORIZED,
    HttpCode.UNAUTHORIZED,
    err,
    isOperational
  );
};
