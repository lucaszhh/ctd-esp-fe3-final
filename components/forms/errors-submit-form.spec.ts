import ERROR_MESSAGES_CHECKOUT from "./errors-submit-form";
import catchError from "./handle-checkout-errors";

describe('catchError', () => {
  it('should return the correct error message for CARD_DATA_INCORRECT', () => {
    const response = {
      error: "CARD_DATA_INCORRECT",
      message: "some message"
    };
    const errorMessage = catchError(response);
    expect(errorMessage).toEqual(ERROR_MESSAGES_CHECKOUT.CARD_DATA_INCORRECT.message);
  });

  it('should return the correct error message for CARD_WITHOUT_FUNDS', () => {
    const response = {
      error: "CARD_WITHOUT_FUNDS",
      message: "some message"
    };
    const errorMessage = catchError(response);
    expect(errorMessage).toEqual(ERROR_MESSAGES_CHECKOUT.CARD_WITHOUT_FUNDS.message);
  });

  it('should return the correct error message for CARD_WITHOUT_AUTHORIZATION', () => {
    const response = {
      error: "CARD_WITHOUT_AUTHORIZATION",
      message: "some message"
    };
    const errorMessage = catchError(response);
    expect(errorMessage).toEqual(ERROR_MESSAGES_CHECKOUT.CARD_WITHOUT_AUTHORIZATION.message);
  });

  it('should return the correct error message for INCORRECT_ADDRESS', () => {
    const response = {
      error: "INCORRECT_ADDRESS",
      message: "some message"
    };
    const errorMessage = catchError(response);
    expect(errorMessage).toEqual(ERROR_MESSAGES_CHECKOUT.INCORRECT_ADDRESS.message);
  });

  it('should return the correct error message for any other error', () => {
    const response = {
      error: "SOME_OTHER_ERROR",
      message: "some message"
    };
    const errorMessage = catchError(response);
    expect(errorMessage).toEqual(ERROR_MESSAGES_CHECKOUT.SERVER_ERROR.message);
  });
});
