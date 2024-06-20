export interface ResponseError {
	error:
		| {
				message: string;
				status: number;
		  }
		| {
				Errors: {
					Message: string;
					Status: string;
				};
		  };
}
