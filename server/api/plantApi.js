var models = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap')

// 连接数据库
var conn = mysql.createConnection(models.mysql)

conn.connect()
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

// 查找所有植物分类
router.post('/querySorts', (req, res) => {
  var sql = $sql.plant.querySorts
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

// 查询植物信息[通过分类]
router.post('/queryPlantsBySort', (req, res) => {
  var sql = $sql.plant.queryPlants
  var params = req.body
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err)
    } if (result) {
      jsonWrite(res, result)
    }
  })
})

module.exports = router
