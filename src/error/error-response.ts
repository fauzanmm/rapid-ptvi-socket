class ResponseError extends Error {
  public status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    // this.name = this.constructor.name;
  }
}

class BadRequestError extends ResponseError {
  constructor(message = "Bad Request") {
    super(400, message); // <-- Selalu 400
  }
}

class NotFoundError extends ResponseError {
  constructor(message = "Not Found") {
    super(404, message); // <-- Selalu 404
  }
}

export { ResponseError, BadRequestError, NotFoundError };
