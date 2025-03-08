import { NextFunction, Request, Response } from "express";
import constantsError from "../errors/errorsconstant";
import { Error } from "mongoose";

export const erroreHandler = (
  _err: Error,
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
/*   console.error(_err); */
  /* console.log(_err.message) */
  let statusCode = _res.statusCode ? _res.statusCode : 500;
  if (_err.message) {
    statusCode = constantsError.BAD_REQUEST_ERROR
  }
  
  switch (statusCode) {
    case constantsError.NOT_FOUND:
      _res.json({
        title: "Not Found",
        message: _err.message,
        stackTrace: _err.stack,
      });
      return next;
    case constantsError.BAD_REQUEST_ERROR:
      _res.json({
        title: "Bad Request Error",
        message: _err.message,
        stackTrace: _err.stack,
      });
      return next;

    case constantsError.CONFLICT_ERROR:
      _res.json({
        title: "Conflict Error",
        message: _err.message,
        stackTrace: _err.stack,
      });
      return next;

    case constantsError.SERVER_ERROR:
      _res.json({
        title: "Server Error",
        message: _err.message,
        stackTrace: _err.stack,
      });
      return next;

    default:
      console.log("Ошибок нет");
      break;
  }
};
