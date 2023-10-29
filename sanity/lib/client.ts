import { createClient } from "next-sanity";
import { cache } from "react";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

// 以重用 TypeScript 定义的方式包装缓存函数
export const clientFetch = cache(client.fetch.bind(client));
