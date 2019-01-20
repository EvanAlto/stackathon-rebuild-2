module.exports = {
        typeDefs: /* GraphQL */ `type AggregateBookmark {
  count: Int!
}

type AggregateComment {
  count: Int!
}

type AggregateLike {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Bookmark {
  id: ID!
  post: Post!
  bookmarkedBy: User!
}

type BookmarkConnection {
  pageInfo: PageInfo!
  edges: [BookmarkEdge]!
  aggregate: AggregateBookmark!
}

input BookmarkCreateInput {
  post: PostCreateOneInput!
  bookmarkedBy: UserCreateOneWithoutBookmarksInput!
}

input BookmarkCreateManyWithoutBookmarkedByInput {
  create: [BookmarkCreateWithoutBookmarkedByInput!]
  connect: [BookmarkWhereUniqueInput!]
}

input BookmarkCreateWithoutBookmarkedByInput {
  post: PostCreateOneInput!
}

type BookmarkEdge {
  node: Bookmark!
  cursor: String!
}

enum BookmarkOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BookmarkPreviousValues {
  id: ID!
}

input BookmarkScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [BookmarkScalarWhereInput!]
  OR: [BookmarkScalarWhereInput!]
  NOT: [BookmarkScalarWhereInput!]
}

type BookmarkSubscriptionPayload {
  mutation: MutationType!
  node: Bookmark
  updatedFields: [String!]
  previousValues: BookmarkPreviousValues
}

input BookmarkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookmarkWhereInput
  AND: [BookmarkSubscriptionWhereInput!]
  OR: [BookmarkSubscriptionWhereInput!]
  NOT: [BookmarkSubscriptionWhereInput!]
}

input BookmarkUpdateInput {
  post: PostUpdateOneRequiredInput
  bookmarkedBy: UserUpdateOneRequiredWithoutBookmarksInput
}

input BookmarkUpdateManyWithoutBookmarkedByInput {
  create: [BookmarkCreateWithoutBookmarkedByInput!]
  delete: [BookmarkWhereUniqueInput!]
  connect: [BookmarkWhereUniqueInput!]
  disconnect: [BookmarkWhereUniqueInput!]
  update: [BookmarkUpdateWithWhereUniqueWithoutBookmarkedByInput!]
  upsert: [BookmarkUpsertWithWhereUniqueWithoutBookmarkedByInput!]
  deleteMany: [BookmarkScalarWhereInput!]
}

input BookmarkUpdateWithoutBookmarkedByDataInput {
  post: PostUpdateOneRequiredInput
}

input BookmarkUpdateWithWhereUniqueWithoutBookmarkedByInput {
  where: BookmarkWhereUniqueInput!
  data: BookmarkUpdateWithoutBookmarkedByDataInput!
}

input BookmarkUpsertWithWhereUniqueWithoutBookmarkedByInput {
  where: BookmarkWhereUniqueInput!
  update: BookmarkUpdateWithoutBookmarkedByDataInput!
  create: BookmarkCreateWithoutBookmarkedByInput!
}

input BookmarkWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  post: PostWhereInput
  bookmarkedBy: UserWhereInput
  AND: [BookmarkWhereInput!]
  OR: [BookmarkWhereInput!]
  NOT: [BookmarkWhereInput!]
}

input BookmarkWhereUniqueInput {
  id: ID
}

type Comment {
  id: ID!
  createdAt: DateTime!
  text: String!
  author: User!
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
  post: Post!
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  text: String!
  author: UserCreateOneInput!
  likes: LikeCreateManyWithoutCommentInput
  post: PostCreateOneWithoutCommentsInput!
}

input CommentCreateManyWithoutPostInput {
  create: [CommentCreateWithoutPostInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateOneWithoutLikesInput {
  create: CommentCreateWithoutLikesInput
  connect: CommentWhereUniqueInput
}

input CommentCreateWithoutLikesInput {
  text: String!
  author: UserCreateOneInput!
  post: PostCreateOneWithoutCommentsInput!
}

input CommentCreateWithoutPostInput {
  text: String!
  author: UserCreateOneInput!
  likes: LikeCreateManyWithoutCommentInput
}

type CommentEdge {
  node: Comment!
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CommentPreviousValues {
  id: ID!
  createdAt: DateTime!
  text: String!
}

input CommentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [CommentScalarWhereInput!]
  OR: [CommentScalarWhereInput!]
  NOT: [CommentScalarWhereInput!]
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateInput {
  text: String
  author: UserUpdateOneRequiredInput
  likes: LikeUpdateManyWithoutCommentInput
  post: PostUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateManyDataInput {
  text: String
}

input CommentUpdateManyMutationInput {
  text: String
}

input CommentUpdateManyWithoutPostInput {
  create: [CommentCreateWithoutPostInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutPostInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutPostInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentUpdateOneWithoutLikesInput {
  create: CommentCreateWithoutLikesInput
  update: CommentUpdateWithoutLikesDataInput
  upsert: CommentUpsertWithoutLikesInput
  delete: Boolean
  disconnect: Boolean
  connect: CommentWhereUniqueInput
}

input CommentUpdateWithoutLikesDataInput {
  text: String
  author: UserUpdateOneRequiredInput
  post: PostUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateWithoutPostDataInput {
  text: String
  author: UserUpdateOneRequiredInput
  likes: LikeUpdateManyWithoutCommentInput
}

input CommentUpdateWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutPostDataInput!
}

input CommentUpsertWithoutLikesInput {
  update: CommentUpdateWithoutLikesDataInput!
  create: CommentCreateWithoutLikesInput!
}

input CommentUpsertWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutPostDataInput!
  create: CommentCreateWithoutPostInput!
}

input CommentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  author: UserWhereInput
  likes_every: LikeWhereInput
  likes_some: LikeWhereInput
  likes_none: LikeWhereInput
  post: PostWhereInput
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

type Like {
  id: ID!
  createdAt: DateTime!
  liker: User!
  post: Post
  comment: Comment
}

type LikeConnection {
  pageInfo: PageInfo!
  edges: [LikeEdge]!
  aggregate: AggregateLike!
}

input LikeCreateInput {
  liker: UserCreateOneWithoutLikesInput!
  post: PostCreateOneWithoutLikesInput
  comment: CommentCreateOneWithoutLikesInput
}

input LikeCreateManyWithoutCommentInput {
  create: [LikeCreateWithoutCommentInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateManyWithoutLikerInput {
  create: [LikeCreateWithoutLikerInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateManyWithoutPostInput {
  create: [LikeCreateWithoutPostInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateWithoutCommentInput {
  liker: UserCreateOneWithoutLikesInput!
  post: PostCreateOneWithoutLikesInput
}

input LikeCreateWithoutLikerInput {
  post: PostCreateOneWithoutLikesInput
  comment: CommentCreateOneWithoutLikesInput
}

input LikeCreateWithoutPostInput {
  liker: UserCreateOneWithoutLikesInput!
  comment: CommentCreateOneWithoutLikesInput
}

type LikeEdge {
  node: Like!
  cursor: String!
}

enum LikeOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LikePreviousValues {
  id: ID!
  createdAt: DateTime!
}

input LikeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [LikeScalarWhereInput!]
  OR: [LikeScalarWhereInput!]
  NOT: [LikeScalarWhereInput!]
}

type LikeSubscriptionPayload {
  mutation: MutationType!
  node: Like
  updatedFields: [String!]
  previousValues: LikePreviousValues
}

input LikeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LikeWhereInput
  AND: [LikeSubscriptionWhereInput!]
  OR: [LikeSubscriptionWhereInput!]
  NOT: [LikeSubscriptionWhereInput!]
}

input LikeUpdateInput {
  liker: UserUpdateOneRequiredWithoutLikesInput
  post: PostUpdateOneWithoutLikesInput
  comment: CommentUpdateOneWithoutLikesInput
}

input LikeUpdateManyWithoutCommentInput {
  create: [LikeCreateWithoutCommentInput!]
  delete: [LikeWhereUniqueInput!]
  connect: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutCommentInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutCommentInput!]
  deleteMany: [LikeScalarWhereInput!]
}

input LikeUpdateManyWithoutLikerInput {
  create: [LikeCreateWithoutLikerInput!]
  delete: [LikeWhereUniqueInput!]
  connect: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutLikerInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutLikerInput!]
  deleteMany: [LikeScalarWhereInput!]
}

input LikeUpdateManyWithoutPostInput {
  create: [LikeCreateWithoutPostInput!]
  delete: [LikeWhereUniqueInput!]
  connect: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutPostInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutPostInput!]
  deleteMany: [LikeScalarWhereInput!]
}

input LikeUpdateWithoutCommentDataInput {
  liker: UserUpdateOneRequiredWithoutLikesInput
  post: PostUpdateOneWithoutLikesInput
}

input LikeUpdateWithoutLikerDataInput {
  post: PostUpdateOneWithoutLikesInput
  comment: CommentUpdateOneWithoutLikesInput
}

input LikeUpdateWithoutPostDataInput {
  liker: UserUpdateOneRequiredWithoutLikesInput
  comment: CommentUpdateOneWithoutLikesInput
}

input LikeUpdateWithWhereUniqueWithoutCommentInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutCommentDataInput!
}

input LikeUpdateWithWhereUniqueWithoutLikerInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutLikerDataInput!
}

input LikeUpdateWithWhereUniqueWithoutPostInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutPostDataInput!
}

input LikeUpsertWithWhereUniqueWithoutCommentInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutCommentDataInput!
  create: LikeCreateWithoutCommentInput!
}

input LikeUpsertWithWhereUniqueWithoutLikerInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutLikerDataInput!
  create: LikeCreateWithoutLikerInput!
}

input LikeUpsertWithWhereUniqueWithoutPostInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutPostDataInput!
  create: LikeCreateWithoutPostInput!
}

input LikeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  liker: UserWhereInput
  post: PostWhereInput
  comment: CommentWhereInput
  AND: [LikeWhereInput!]
  OR: [LikeWhereInput!]
  NOT: [LikeWhereInput!]
}

input LikeWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createBookmark(data: BookmarkCreateInput!): Bookmark!
  updateBookmark(data: BookmarkUpdateInput!, where: BookmarkWhereUniqueInput!): Bookmark
  upsertBookmark(where: BookmarkWhereUniqueInput!, create: BookmarkCreateInput!, update: BookmarkUpdateInput!): Bookmark!
  deleteBookmark(where: BookmarkWhereUniqueInput!): Bookmark
  deleteManyBookmarks(where: BookmarkWhereInput): BatchPayload!
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createLike(data: LikeCreateInput!): Like!
  updateLike(data: LikeUpdateInput!, where: LikeWhereUniqueInput!): Like
  upsertLike(where: LikeWhereUniqueInput!, create: LikeCreateInput!, update: LikeUpdateInput!): Like!
  deleteLike(where: LikeWhereUniqueInput!): Like
  deleteManyLikes(where: LikeWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  createdAt: DateTime!
  author: User!
  postImage: String
  description: String!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  author: UserCreateOneWithoutPostsInput!
  postImage: String
  description: String!
  comments: CommentCreateManyWithoutPostInput
  likes: LikeCreateManyWithoutPostInput
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateOneInput {
  create: PostCreateInput
  connect: PostWhereUniqueInput
}

input PostCreateOneWithoutCommentsInput {
  create: PostCreateWithoutCommentsInput
  connect: PostWhereUniqueInput
}

input PostCreateOneWithoutLikesInput {
  create: PostCreateWithoutLikesInput
  connect: PostWhereUniqueInput
}

input PostCreateWithoutAuthorInput {
  postImage: String
  description: String!
  comments: CommentCreateManyWithoutPostInput
  likes: LikeCreateManyWithoutPostInput
}

input PostCreateWithoutCommentsInput {
  author: UserCreateOneWithoutPostsInput!
  postImage: String
  description: String!
  likes: LikeCreateManyWithoutPostInput
}

input PostCreateWithoutLikesInput {
  author: UserCreateOneWithoutPostsInput!
  postImage: String
  description: String!
  comments: CommentCreateManyWithoutPostInput
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  postImage_ASC
  postImage_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  postImage: String
  description: String!
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  postImage: String
  postImage_not: String
  postImage_in: [String!]
  postImage_not_in: [String!]
  postImage_lt: String
  postImage_lte: String
  postImage_gt: String
  postImage_gte: String
  postImage_contains: String
  postImage_not_contains: String
  postImage_starts_with: String
  postImage_not_starts_with: String
  postImage_ends_with: String
  postImage_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateDataInput {
  author: UserUpdateOneRequiredWithoutPostsInput
  postImage: String
  description: String
  comments: CommentUpdateManyWithoutPostInput
  likes: LikeUpdateManyWithoutPostInput
}

input PostUpdateInput {
  author: UserUpdateOneRequiredWithoutPostsInput
  postImage: String
  description: String
  comments: CommentUpdateManyWithoutPostInput
  likes: LikeUpdateManyWithoutPostInput
}

input PostUpdateManyDataInput {
  postImage: String
  description: String
}

input PostUpdateManyMutationInput {
  postImage: String
  description: String
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateOneRequiredInput {
  create: PostCreateInput
  update: PostUpdateDataInput
  upsert: PostUpsertNestedInput
  connect: PostWhereUniqueInput
}

input PostUpdateOneRequiredWithoutCommentsInput {
  create: PostCreateWithoutCommentsInput
  update: PostUpdateWithoutCommentsDataInput
  upsert: PostUpsertWithoutCommentsInput
  connect: PostWhereUniqueInput
}

input PostUpdateOneWithoutLikesInput {
  create: PostCreateWithoutLikesInput
  update: PostUpdateWithoutLikesDataInput
  upsert: PostUpsertWithoutLikesInput
  delete: Boolean
  disconnect: Boolean
  connect: PostWhereUniqueInput
}

input PostUpdateWithoutAuthorDataInput {
  postImage: String
  description: String
  comments: CommentUpdateManyWithoutPostInput
  likes: LikeUpdateManyWithoutPostInput
}

input PostUpdateWithoutCommentsDataInput {
  author: UserUpdateOneRequiredWithoutPostsInput
  postImage: String
  description: String
  likes: LikeUpdateManyWithoutPostInput
}

input PostUpdateWithoutLikesDataInput {
  author: UserUpdateOneRequiredWithoutPostsInput
  postImage: String
  description: String
  comments: CommentUpdateManyWithoutPostInput
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertNestedInput {
  update: PostUpdateDataInput!
  create: PostCreateInput!
}

input PostUpsertWithoutCommentsInput {
  update: PostUpdateWithoutCommentsDataInput!
  create: PostCreateWithoutCommentsInput!
}

input PostUpsertWithoutLikesInput {
  update: PostUpdateWithoutLikesDataInput!
  create: PostCreateWithoutLikesInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  author: UserWhereInput
  postImage: String
  postImage_not: String
  postImage_in: [String!]
  postImage_not_in: [String!]
  postImage_lt: String
  postImage_lte: String
  postImage_gt: String
  postImage_gte: String
  postImage_contains: String
  postImage_not_contains: String
  postImage_starts_with: String
  postImage_not_starts_with: String
  postImage_ends_with: String
  postImage_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  likes_every: LikeWhereInput
  likes_some: LikeWhereInput
  likes_none: LikeWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  bookmark(where: BookmarkWhereUniqueInput!): Bookmark
  bookmarks(where: BookmarkWhereInput, orderBy: BookmarkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bookmark]!
  bookmarksConnection(where: BookmarkWhereInput, orderBy: BookmarkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookmarkConnection!
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  like(where: LikeWhereUniqueInput!): Like
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like]!
  likesConnection(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LikeConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  bookmark(where: BookmarkSubscriptionWhereInput): BookmarkSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  like(where: LikeSubscriptionWhereInput): LikeSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  fullName: String!
  username: String!
  bio: String
  email: String!
  password: String!
  userImage: String
  following(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  followers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
  bookmarks(where: BookmarkWhereInput, orderBy: BookmarkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bookmark!]
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  fullName: String!
  username: String!
  bio: String
  email: String!
  password: String!
  userImage: String
  following: UserCreateManyWithoutFollowersInput
  followers: UserCreateManyWithoutFollowingInput
  likes: LikeCreateManyWithoutLikerInput
  bookmarks: BookmarkCreateManyWithoutBookmarkedByInput
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateManyWithoutFollowersInput {
  create: [UserCreateWithoutFollowersInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutFollowingInput {
  create: [UserCreateWithoutFollowingInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutBookmarksInput {
  create: UserCreateWithoutBookmarksInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLikesInput {
  create: UserCreateWithoutLikesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBookmarksInput {
  fullName: String!
  username: String!
  bio: String
  email: String!
  password: String!
  userImage: String
  following: UserCreateManyWithoutFollowersInput
  followers: UserCreateManyWithoutFollowingInput
  likes: LikeCreateManyWithoutLikerInput
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateWithoutFollowersInput {
  fullName: String!
  username: String!
  bio: String
  email: String!
  password: String!
  userImage: String
  following: UserCreateManyWithoutFollowersInput
  likes: LikeCreateManyWithoutLikerInput
  bookmarks: BookmarkCreateManyWithoutBookmarkedByInput
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateWithoutFollowingInput {
  fullName: String!
  username: String!
  bio: String
  email: String!
  password: String!
  userImage: String
  followers: UserCreateManyWithoutFollowingInput
  likes: LikeCreateManyWithoutLikerInput
  bookmarks: BookmarkCreateManyWithoutBookmarkedByInput
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateWithoutLikesInput {
  fullName: String!
  username: String!
  bio: String
  email: String!
  password: String!
  userImage: String
  following: UserCreateManyWithoutFollowersInput
  followers: UserCreateManyWithoutFollowingInput
  bookmarks: BookmarkCreateManyWithoutBookmarkedByInput
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateWithoutPostsInput {
  fullName: String!
  username: String!
  bio: String
  email: String!
  password: String!
  userImage: String
  following: UserCreateManyWithoutFollowersInput
  followers: UserCreateManyWithoutFollowingInput
  likes: LikeCreateManyWithoutLikerInput
  bookmarks: BookmarkCreateManyWithoutBookmarkedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  fullName_ASC
  fullName_DESC
  username_ASC
  username_DESC
  bio_ASC
  bio_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  userImage_ASC
  userImage_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  fullName: String!
  username: String!
  bio: String
  email: String!
  password: String!
  userImage: String
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  fullName: String
  fullName_not: String
  fullName_in: [String!]
  fullName_not_in: [String!]
  fullName_lt: String
  fullName_lte: String
  fullName_gt: String
  fullName_gte: String
  fullName_contains: String
  fullName_not_contains: String
  fullName_starts_with: String
  fullName_not_starts_with: String
  fullName_ends_with: String
  fullName_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  bio: String
  bio_not: String
  bio_in: [String!]
  bio_not_in: [String!]
  bio_lt: String
  bio_lte: String
  bio_gt: String
  bio_gte: String
  bio_contains: String
  bio_not_contains: String
  bio_starts_with: String
  bio_not_starts_with: String
  bio_ends_with: String
  bio_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  userImage: String
  userImage_not: String
  userImage_in: [String!]
  userImage_not_in: [String!]
  userImage_lt: String
  userImage_lte: String
  userImage_gt: String
  userImage_gte: String
  userImage_contains: String
  userImage_not_contains: String
  userImage_starts_with: String
  userImage_not_starts_with: String
  userImage_ends_with: String
  userImage_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  fullName: String
  username: String
  bio: String
  email: String
  password: String
  userImage: String
  following: UserUpdateManyWithoutFollowersInput
  followers: UserUpdateManyWithoutFollowingInput
  likes: LikeUpdateManyWithoutLikerInput
  bookmarks: BookmarkUpdateManyWithoutBookmarkedByInput
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateInput {
  fullName: String
  username: String
  bio: String
  email: String
  password: String
  userImage: String
  following: UserUpdateManyWithoutFollowersInput
  followers: UserUpdateManyWithoutFollowingInput
  likes: LikeUpdateManyWithoutLikerInput
  bookmarks: BookmarkUpdateManyWithoutBookmarkedByInput
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateManyDataInput {
  fullName: String
  username: String
  bio: String
  email: String
  password: String
  userImage: String
}

input UserUpdateManyMutationInput {
  fullName: String
  username: String
  bio: String
  email: String
  password: String
  userImage: String
}

input UserUpdateManyWithoutFollowersInput {
  create: [UserCreateWithoutFollowersInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFollowersInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFollowersInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutFollowingInput {
  create: [UserCreateWithoutFollowingInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFollowingInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFollowingInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutBookmarksInput {
  create: UserCreateWithoutBookmarksInput
  update: UserUpdateWithoutBookmarksDataInput
  upsert: UserUpsertWithoutBookmarksInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutLikesInput {
  create: UserCreateWithoutLikesInput
  update: UserUpdateWithoutLikesDataInput
  upsert: UserUpsertWithoutLikesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutBookmarksDataInput {
  fullName: String
  username: String
  bio: String
  email: String
  password: String
  userImage: String
  following: UserUpdateManyWithoutFollowersInput
  followers: UserUpdateManyWithoutFollowingInput
  likes: LikeUpdateManyWithoutLikerInput
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutFollowersDataInput {
  fullName: String
  username: String
  bio: String
  email: String
  password: String
  userImage: String
  following: UserUpdateManyWithoutFollowersInput
  likes: LikeUpdateManyWithoutLikerInput
  bookmarks: BookmarkUpdateManyWithoutBookmarkedByInput
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutFollowingDataInput {
  fullName: String
  username: String
  bio: String
  email: String
  password: String
  userImage: String
  followers: UserUpdateManyWithoutFollowingInput
  likes: LikeUpdateManyWithoutLikerInput
  bookmarks: BookmarkUpdateManyWithoutBookmarkedByInput
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutLikesDataInput {
  fullName: String
  username: String
  bio: String
  email: String
  password: String
  userImage: String
  following: UserUpdateManyWithoutFollowersInput
  followers: UserUpdateManyWithoutFollowingInput
  bookmarks: BookmarkUpdateManyWithoutBookmarkedByInput
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutPostsDataInput {
  fullName: String
  username: String
  bio: String
  email: String
  password: String
  userImage: String
  following: UserUpdateManyWithoutFollowersInput
  followers: UserUpdateManyWithoutFollowingInput
  likes: LikeUpdateManyWithoutLikerInput
  bookmarks: BookmarkUpdateManyWithoutBookmarkedByInput
}

input UserUpdateWithWhereUniqueWithoutFollowersInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFollowersDataInput!
}

input UserUpdateWithWhereUniqueWithoutFollowingInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFollowingDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutBookmarksInput {
  update: UserUpdateWithoutBookmarksDataInput!
  create: UserCreateWithoutBookmarksInput!
}

input UserUpsertWithoutLikesInput {
  update: UserUpdateWithoutLikesDataInput!
  create: UserCreateWithoutLikesInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithWhereUniqueWithoutFollowersInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFollowersDataInput!
  create: UserCreateWithoutFollowersInput!
}

input UserUpsertWithWhereUniqueWithoutFollowingInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFollowingDataInput!
  create: UserCreateWithoutFollowingInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  fullName: String
  fullName_not: String
  fullName_in: [String!]
  fullName_not_in: [String!]
  fullName_lt: String
  fullName_lte: String
  fullName_gt: String
  fullName_gte: String
  fullName_contains: String
  fullName_not_contains: String
  fullName_starts_with: String
  fullName_not_starts_with: String
  fullName_ends_with: String
  fullName_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  bio: String
  bio_not: String
  bio_in: [String!]
  bio_not_in: [String!]
  bio_lt: String
  bio_lte: String
  bio_gt: String
  bio_gte: String
  bio_contains: String
  bio_not_contains: String
  bio_starts_with: String
  bio_not_starts_with: String
  bio_ends_with: String
  bio_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  userImage: String
  userImage_not: String
  userImage_in: [String!]
  userImage_not_in: [String!]
  userImage_lt: String
  userImage_lte: String
  userImage_gt: String
  userImage_gte: String
  userImage_contains: String
  userImage_not_contains: String
  userImage_starts_with: String
  userImage_not_starts_with: String
  userImage_ends_with: String
  userImage_not_ends_with: String
  following_every: UserWhereInput
  following_some: UserWhereInput
  following_none: UserWhereInput
  followers_every: UserWhereInput
  followers_some: UserWhereInput
  followers_none: UserWhereInput
  likes_every: LikeWhereInput
  likes_some: LikeWhereInput
  likes_none: LikeWhereInput
  bookmarks_every: BookmarkWhereInput
  bookmarks_some: BookmarkWhereInput
  bookmarks_none: BookmarkWhereInput
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    