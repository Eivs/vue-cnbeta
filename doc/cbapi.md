var timestamp=Math.round(new Date().getTime()/1000)

var sign=md5('app_key=10000&format=json&method=?&timestamp=?&&v=1.0&mpuffgvbvbttn3Rc')

top10
http://api.cnbeta.com/capi?app_key=10000&format=json&method=Article.Top10&timestamp=v=1.0&sign=

news content
http://api.cnbeta.com/capi?app_key=10000&format=json&method=Article.NewsContent&sid=&timestamp=&v=1.0&sign=

getnewses by topic
http://api.cnbeta.com/capi?app_key=10000&format=json&method=Article.Lists&timestamp=&topicid=&v=1.0&sign=

publish comment
http://api.cnbeta.com/capi?app_key=10000&content=&format=json&method=Article.DoCmt&op=publish&sid=&timestamp=&v=1.0&sign=

support comment 这里sid为评论的tid
http://api.cnbeta.com/capi?app_key=10000&format=json&method=Article.DoCmt&op=support&sid=&tid=1&timestamp=&v=1.0&sign=

support against 这里sid为评论的tid
http://api.cnbeta.com/capi?app_key=10000&format=json&method=Article.DoCmt&op=against&sid=&tid=0&timestamp=&v=1.0&sign=

get commentList 24小时内的评论
http://api.cnbeta.com/capi?app_key=10000&format=json&method=Article.Comment&page=&sid=&timestamp=&v=1.0&sign=

get commentList 可以查看24小时后的评论
http://api.cnbeta.com/capi?app_key=10000&article=&format=json&method=phone.Comment&timestamp=&v=1.0&sign=

get NewsList
http://api.cnbeta.com/capi?app_key=10000&format=json&method=Article.Lists&timestamp=&v=1.0&sign=

get hotComment
http://api.cnbeta.com/capi?app_key=10000&format=json&method=Article.RecommendComment&timestamp=&v=1.0&sign=
