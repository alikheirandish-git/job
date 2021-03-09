db.createUser({
  user: 'gyl_db',
  pwd: 'password',
  roles: [
    {
      role: 'readWrite',
      db: 'gylloo'
    }
  ]
});
