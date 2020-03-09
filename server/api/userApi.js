// 后端接口
var models = require('../db')
var express = require('express')
var mysql = require('mysql')
var $sql = require('../sqlMap')
var jwt = require('jsonwebtoken')

var router = express.Router()

// 测试api
router.get('/test', function (req, res) {
  return res.json({
    code: 0,
    data: 'hello'
  })
})
// 连接数据库
var conn = mysql.createConnection(models.mysql)
conn.connect()

// 如果ret[结果集]里有东西就传到前台去
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

router.post('/getUser', (req, res) => {
  var sql = $sql.user.get
  var params = req.body
  conn.query(sql, params.username, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result.length) {
      const data = JSON.parse(JSON.stringify(result))
      result = data[0]
      if (params.username === result.username && params.password === result.password) {
        res.json({
          username: result.username,
          code: 200,
          token: jwt.sign({ username: result.username }, 'luluear', {
            // 过期时间
            expiresIn: '60s'
          })
        })
      } else {
        res.json({
          status: '-1',
          msg: '密码错误'
        })
      }
    } else {
      res.json({
        status: '0',
        msg: '用户名不存在'
      })
    }
  })
})

// 增加用户接口
router.post('/addUser', (req, res) => {
  const sql = $sql.user.add
  const username = req.body.username
  const password = req.body.password
  conn.query(sql, [username, password], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

// router.post('/queryAll', (req, res) => {
//   var sql = $sql.user.queryAll
//   conn.query(sql, function (err, result) {
//     if (err) {
//       console.log(err)
//     }
//     if (result) {
//       jsonWrite(res, result)
//     }
//   })
// })

module.exports = router
