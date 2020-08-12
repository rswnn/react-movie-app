import { Action } from "redux";

export interface ActionWithPayload extends Action {
  payload: {
    data: {
      results: any;
      total_pages: number;
    };
    response: {
      data: TemplatePayload<T>;
    };
  };
}
