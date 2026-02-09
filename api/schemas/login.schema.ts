interface ReqresLoginResponse {
  token: string;
}

interface ReqresUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface ReqresUsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: ReqresUser[];
}

interface ReqresCreateUserResponse {
  id: string;
  name: string;
  job: string;
  createdAt: string;
}

export type { ReqresLoginResponse, ReqresUsersResponse, ReqresCreateUserResponse };
