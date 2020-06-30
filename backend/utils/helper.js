import { pick } from "lodash";

export const formatErrors = (e, models) => {
    if (e instanceof models.Sequelize.ValidationError) {
        return e.errors.map(x => {
            return pick(x, ['path', 'message'])
        });
    }

    return [{ path: "name", message: "something went wrong" }];
}