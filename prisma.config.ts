// @ts-expect-error Prisma config types are not exposed by the installed Prisma version.
import { definePrismaConfig } from "prisma/config";

export default definePrismaConfig({
  skills: {
    agents: ["claude", "cursor", "agents", "devin"],
  },
});
