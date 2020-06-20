// uploadCdn.js
// 引入模块
const COS = require('cos-nodejs-sdk-v5');
const glob = require('glob');
const path = require('path');

const BUCKETNAME = process.env.BUCKETNAME //jiketown-1256165375
const REGIONNAME = process.env.REGIONNAME // ap-shanghai
const SECRETID = process.env.SECRETID // AKIDeBXjiWgYrzvhHgxKTQAvUr9IFC3iIW9c
const SECRETKEY = process.env.SECRETKEY // IVWVIvOsANTTPH3qRr580KUdyDUix64R

// 使用永久密钥创建实例
const cos = new COS({
    SecretId: SECRETID,
    SecretKey: SECRETKEY
});

const isWindow = /^win/.test(process.platform)
// process.env.NODE_ENV === 'production'
let pre = path.resolve(__dirname, './dist/')+ (isWindow ? '\\' : '')
const files = glob.sync(
    `${path.join(
        __dirname,
        './dist/**/*.*'
    )}`
)
pre = pre.replace(/\\/g, '/')
async function uploadFileCDN (files) {
    files.map(async file => {
        const key = getFileKey(pre, file)
        try {
            await uploadFIle(key, file)
            console.log(`上传成功 key: ${key}`)
        } catch (err) {
            console.log('error', err)
        }
    })
}
async function uploadFIle (key, localFile) {
    return new Promise((resolve, reject) => {
        // 分片上传
        cos.sliceUploadFile({
            Bucket: BUCKETNAME,
            Region: REGIONNAME,
            Key: '/'+key,
            FilePath: localFile
        }, function (err, data) {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        });
    })
}
function getFileKey (pre, file) {
    if (file.indexOf(pre) > -1) {
        const key = file.split(pre)[1]
        return key.startsWith('/') ? key.substring(1) : key
    }
    return file
}

async function deleteOldFile(){
    cos.getBucket({
        Bucket: BUCKETNAME,
        Region: REGIONNAME,
    }, function(err, data) {
        if(err) {
            console.log(err)
        } else {
            var Objects=data.Contents.map(item=>{
                return {
                    Key: item.Key
                }
            })
            if(Objects.length===0) return false
            cos.deleteMultipleObject({
                Bucket: BUCKETNAME,
                Region: REGIONNAME,
                Objects:Objects
            }, function(err, data) {
                if(err) {
                    console.log(err)
                    console.log(data)
                }
            });
        }
    });
}

(async () => {
    console.time('清除上一次的cdn文件')
    await deleteOldFile()
    console.timeEnd('清除上一次的cdn文件')
    console.time('上传文件到cdn')
    await uploadFileCDN(files)
    console.timeEnd('上传文件到cdn')

})()
