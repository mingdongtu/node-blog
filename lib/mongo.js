const config = require('config-lite')(__dirname)
const Mongolass = require('mongolass')
const mongolass = new Mongolass()
mongolass.connect(config.mongodb)

// 存储名称、密码、头像、性别
exports.User = mongolass.model('Users',{
    name:{type:'string',required:true},
    password:{type:'string',required:true},
    avatar:{type:'string',required:true},
    gender:{type:'string',enum:['m','f','x'],default:'x'},
    bio:{type:'string',required:true}
})

exports.User.index({ name :1 },{unique:true}).exec()
