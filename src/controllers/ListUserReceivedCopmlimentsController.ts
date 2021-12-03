import { ListUserReceivedComplimentsService } from "../services/ListUserReceivedComplimentsService";
import { Request, Response } from "express";

class ListUserReceivedComplimentsController {

	async handle(req: Request, res: Response) {
		const { user_id } = req;

		const listUserReceivedComplimentsService = new ListUserReceivedComplimentsService();

		const compliments = await listUserReceivedComplimentsService.execute(user_id);

		return res.json(compliments);
	}
	
}

export { ListUserReceivedComplimentsController };
