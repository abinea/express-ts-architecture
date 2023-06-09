import Sequelize, { Model } from "sequelize"
export default (
	sequelize: Sequelize.Sequelize,
	DataTypes: typeof Sequelize.DataTypes
) => {
	class Shop extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models: any) {
			// define association here
		}
	}
	Shop.init(
		// 实际返回的数据
		{
			name: DataTypes.STRING,
			hacked: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "Shop",
			tableName: "shop",
		}
	)
	return Shop
}
