import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }
  
  type BoardReturn {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [BoardReturn]
  }

  type Mutation {
    createBoard(writer: String, title: String, contents: String): String
    createBoard2(createBoardInput: CreateBoardInput!): String
  }
`;

const resolvers = {
  Query: {
    fetchBoards: () => {
      //1. 데어터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
      const result = [
        {number: 1, writer: '철수', title: '제목입니다~~', contents: '내용이에요@@@'},
        {number: 2, writer: '영희', title: '영희 제목입니다~~', contents: '영희 내용이에요@@@'},
        {number: 3, writer: '훈이', title: '훈이 제목입니다~~', contents: '훈이 내용이에요@@@'},
      ];
      //2. 꺼내온 결과 응답 주기
      return result
    }
  },

  Mutation: {
    createBoard: (_, args) => {
      //1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
      console.log(args);

      //2. 저장결과 알려주기!!
      return "등록에 성공하였습니다"
    },

    createBoard2: (_, args) => {
      //1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
      console.log(args);

      //2. 저장결과 알려주기!!
      return "등록에 성공하였습니다"
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});