import { addBlog } from "./addBlog";
import { addFAQS } from "./addFAQS";
import { addProject } from "./addProject";
import { addService } from "./addService";
import { addPlan } from "./appPlan";

export const schemaTypes = [addService, addFAQS, addProject, addBlog, addPlan]
