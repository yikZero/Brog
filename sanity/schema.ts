import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import menu from './schemas/menu'
import post from './schemas/post'
import project from './schemas/project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [menu, post, project, category, blockContent],
}
