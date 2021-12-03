import { Request, Response } from "express";

import { CreateComplimentService } from "../services/CreateComplimentService"

class CreateComplimentController {
	async handle(req: Request, res: Response) {
		const { tagId, userReceiver, message } = req.body;
		const { user_id } = req;

		const createComplimentService = new CreateComplimentService();

		const compliment = await createComplimentService.execute({ tagId, userSender: user_id, userReceiver, message });

		return res.json(compliment)
	}
}

export { CreateComplimentController };
