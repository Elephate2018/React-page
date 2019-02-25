const NewsAPI = require('newsapi');

const fs = require('fs');
//To Home
//create fetch api from https://newsapi.org/docs/client-libraries/node-js
function fetchReq(source, path) {
    const array = require(path);
    const newsapi = new NewsAPI('7aa89004bfac4598b5c38740c93cc5bf');
    newsapi.v2.topHeadlines({
    //country: 'us',
    sources: source,
    language: 'en',
    pageSize: 20
  }).then(response => {
        console.log('hellow from fetchRequest')
        if(response.status == "ok") {

            fs.readFile(path, function (err, data) {
                var json = JSON.parse(data);
                var activeObj = response.articles;
                let i = 0;

                while(activeObj.length > i) {
                    if(array.some(item=> {
                    //    console.log(item.title, '===', activeObj[i].title)
                        return item.title === activeObj[i].title
                    })) {
                        console.log('NO new message')
                    } else {
                        console.log('NEW message available')

                        json.unshift(activeObj[i])

                        fs.writeFile(path, JSON.stringify(json, null, 2), function(err){
                          if (err) throw err;
                          console.log('======,',JSON.stringify(json, null, 2),'======,')
                          console.log('The "data to append" was appended to file!');
                        });
                    }
                    i++
                }
            })
        };
    });
}
 exports.newsAPIFetch = fetchReq;
