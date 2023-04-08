export interface IFaqsType {
    id: number,
    question: string,
    answer: string,
}

export interface IComic {
    id : number,
    description: string,
    images: [{extension: string, path: string}],
    title: string
}

export interface IComicResponse {
    message: string;
    status: string;
    code: number | string;
    data: {
      offset: number;
      limit: number;
      total: number;
      count: number;
      results: IComic[];
    };
}
