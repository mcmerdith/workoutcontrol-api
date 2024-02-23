import { NextResponse } from "next/server";

namespace Response {
  export const OK = 200;
  export const BAD_REQUEST = 400;
  export const UNAUTHORIZED = 401;
  export const FORBIDDEN = 403;
  export const INTERNAL_SERVER_ERROR = 500;
  export const NOT_IMPLEMENTED = 501;

  export type HttpCode =
    | typeof OK
    | typeof BAD_REQUEST
    | typeof UNAUTHORIZED
    | typeof FORBIDDEN
    | typeof INTERNAL_SERVER_ERROR
    | typeof NOT_IMPLEMENTED;

  export function response(code: HttpCode | number, data: any) {
    return NextResponse.json({ data }, { status: code });
  }

  export function ok(data?: any) {
    return response(OK, data);
  }

  export function bad_request(error?: any) {
    return response(BAD_REQUEST, error);
  }

  export function json_error(error: any) {
    if (error instanceof SyntaxError) {
      return bad_request({ error: "Invalid JSON", details: error.message });
    } else if (error instanceof Error) {
      throw error;
    } else {
      throw new Error(error);
    }
  }

  export function unauthorized(error?: any) {
    return response(UNAUTHORIZED, error);
  }

  export function forbidden(error?: any) {
    return response(FORBIDDEN, error);
  }

  export function internal_server_error(error?: any) {
    return response(INTERNAL_SERVER_ERROR, error);
  }

  export function not_implemented(error?: any) {
    return response(NOT_IMPLEMENTED, error);
  }
}

export default Response;
