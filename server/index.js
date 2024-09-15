const express=require('express')
const mongoose = require('mongoose')
const config = require('./config/index')
const FakeDb = require('./fake-db')

const productRoutes = require('./routes/products')
const path = require('path')

mongoose.connect(config.DB_URI).then(
    () => {
        if (process.env.NODE_ENV !== 'production'){ 
            const fakeDb = new FakeDb()
            // fakeDb.initDb()  //開発環境の時でかつデータベースを初期化したい時だけコメントアウトを外して使う   
        }
    }
);

const app = express()

app.use('/api/v1/products', productRoutes)

// app.get('/products', function(req, res){
//     res.json({'success': true})
// })


if (process.env.NODE_ENV === 'production'){ //本番環境の時だけ走らせたい
    // 上記の /api/vi/products 以外のパスのリクエストがあった場合（*で示している）、../dist/reservation-app5/index.html を返す　ことで、メインを表示する
    const appPath = path.join( __dirname, '..','dist','reservation-app5')
    app.use(express.static(appPath))
    app.get("*",function(req,res){
        res.sendFile(path.resolve(appPath, 'index.html'))
    })
}


const PORT = process.env.PORT || '3001'

app.listen(PORT,function() {
    console.log('I am running.')
})


