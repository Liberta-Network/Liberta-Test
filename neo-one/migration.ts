import { MigrationContracts } from "../src/neo-one"

export default ({ posts }: MigrationContracts, _network: string) => {
  posts.deploy();
}