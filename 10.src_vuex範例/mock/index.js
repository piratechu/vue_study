const Mock = require('mockjs')

//格式 Mock.mock(url, 'post' |'get', 返回數據)
Mock.mock('/api/goods','get',require('./data/goods.json'))
Mock.mock('/api/students','get',{
    'list|1-10':[{
        'id': '@id',
        'name' : '@name',
        "city" : '@county(true)',
        "age": "@integer(10,60)"

    }]
})
