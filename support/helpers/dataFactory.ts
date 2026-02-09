const makeUser = () => ({
  firstName: 'QA',
  lastName: `User${Date.now()}`,
  postalCode: '10101',
});

const makeApiUser = () => ({
  name: `qa-user-${Date.now()}`,
  job: 'automation-engineer',
});

export { makeUser, makeApiUser };
