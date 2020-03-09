// SQL映射语句，供给Api调用
var sqlMap = {
  // 用户
  user: {
    add: 'INSERT INTO user_login (username,password) VALUES (?,?)',
    get: 'select * from user_login where username = ?',
    queryAll: 'select * from user'
  },
  plant: {
    querySorts: 'select * from sort',
    queryPlants: 'select * from plant where plant_sort = ?'
  }
}

module.exports = sqlMap
