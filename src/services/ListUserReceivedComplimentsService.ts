import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { getCustomRepository } from "typeorm";

class ListUserReceivedComplimentsService {
	async execute(user_id: string) {
		const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

		const compliments = await complimentsRepositories.find({
			where: {
				userReceiver: user_id
			},
			relations: ["user_sender", "user_receiver", "tag"]
		});

		return compliments;
	}
}

export { ListUserReceivedComplimentsService };
