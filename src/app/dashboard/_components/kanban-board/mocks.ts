const mockGrants: {
  id: string;
  avgAmount: number;
  foundationName: string;
  grantName: string;
  deadline: string;
  location: string;
  updateDate: string;
}[] = [
  {
    id: "1",
    avgAmount: 25000,
    foundationName: "Waiki Wako Foundation",
    grantName: "Community Development Grant",
    deadline: "2025-03-15T00:00:00Z",
    location: "California, USA",
    updateDate: "2025-02-01T00:00:00Z"
  },
  {
    id: "2",
    avgAmount: 35000,
    foundationName: "Looking Out Foundation",
    grantName: "Education Innovation Fund",
    deadline: "2025-03-20T00:00:00Z",
    location: "New York, USA",
    updateDate: "2025-02-01T00:00:00Z"
  },
  {
    id: "3",
    avgAmount: 15000,
    foundationName: "Tech Forward Initiative",
    grantName: "Digital Literacy Program",
    deadline: "2025-04-01T00:00:00Z",
    location: "Remote",
    updateDate: "2025-02-01T00:00:00Z"
  },
  {
    id: "4",
    avgAmount: 50000,
    foundationName: "Green Earth Foundation",
    grantName: "Environmental Impact Grant",
    deadline: "2025-03-30T00:00:00Z",
    location: "Global",
    updateDate: "2025-02-01T00:00:00Z"
  }
];

const mockOrganization: { id: string; name: string } = {
  id: "1",
  name: "Tech For Good Inc."
};

const mockMatches: {
  matchDate: string;
  organization: { id: string; name: string };
  id: string;
  grant: { id: string; avgAmount: number; foundationName: string; grantName: string; deadline: string; location: string; updateDate: string }
}[] = mockGrants.map((grant, index) => ({
  id: `match-${index + 1}`,
  matchDate: "2025-02-01T00:00:00Z",
  grant,
  organization: mockOrganization
}));

export const mockApplications: {
  id: string;
  match: typeof mockMatches[0];
  createdAt: string;
  updatedAt: string;
  progress?: number;
}[] = [
  {
    id: "app-1",
    match: mockMatches[0],
    createdAt: "2025-02-01T00:00:00Z",
    updatedAt: "2025-02-01T00:00:00Z"
  },
  {
    id: "app-2",
    match: mockMatches[1],
    createdAt: "2025-02-01T00:00:00Z",
    updatedAt: "2025-02-01T00:00:00Z"
  },
  {
    id: "app-3",
    match: mockMatches[2],
    createdAt: "2025-02-05T00:00:00Z",
    updatedAt: "2025-02-10T00:00:00Z",
    progress: 65
  },
  {
    id: "app-4",
    match: mockMatches[3],
    createdAt: "2025-02-07T00:00:00Z",
    updatedAt: "2025-02-12T00:00:00Z",
    progress: 80
  },
  {
    id: "app-5",
    match: {
      ...mockMatches[0],
      id: "match-5"
    },
    createdAt: "2025-02-10T00:00:00Z",
    updatedAt: "2025-02-15T00:00:00Z"
  },
  {
    id: "app-6",
    match: {
      ...mockMatches[1],
      id: "match-6"
    },
    createdAt: "2025-02-12T00:00:00Z",
    updatedAt: "2025-02-17T00:00:00Z"
  },
  {
    id: "app-7",
    match: {
      ...mockMatches[2],
      id: "match-7"
    },
    createdAt: "2025-02-15T00:00:00Z",
    updatedAt: "2025-02-20T00:00:00Z"
  },
  {
    id: "app-8",
    match: {
      ...mockMatches[3],
      id: "match-8"
    },
    createdAt: "2025-02-17T00:00:00Z",
    updatedAt: "2025-02-22T00:00:00Z"
  }
];