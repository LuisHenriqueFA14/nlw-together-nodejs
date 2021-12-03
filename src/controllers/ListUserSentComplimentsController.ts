import { ListUserSentComplimentsService } from "../services/ListUserSentComplimentsService";
import { Request, Response } from "express";

class ListUserSentComplimentsController {

	async handle(req: Request, res: Response) {
		const { user_id } = req;

		const listUserSentComplimentsService = new ListUserSentComplimentsService();

		const compliments = await listUserSentComplimentsService.execute(user_id);

		return res.json(compliments);
	}
	
}

export { ListUserSentComplimentsController };
