/**设置客户端连接服务器端的编码为UTF8**/
SET NAMES UTF8;
/**丢弃数据库,创建新的数据库**/
DROP DATABASE IF EXISTS product;
/** 创建数据库product**/
CREATE DATABASE product CHARSET=UTF8;
/** 进入数据库**/
USE product;
/**创建商品的具体详情表**/
CREATE TABLE user_product(
  id    INT  PRIMARY KEY AUTO_INCREMENT, #商品id
  inch  DECIMAL(10,2),                   #屏幕尺寸
  ram   VARCHAR(32),                      #内存
  rom   VARCHAR(32),                      #硬盘
  cpu   VARCHAR(32),                      #cpu
  title VARCHAR(50),                     #标题
  price DECIMAL(10,2),                   #价格
  detail VARCHAR(1000),                   #产品详细说明
  num    INT,                            #库存
  logo   VARCHAR(50),                    #品牌
  mp     VARCHAR(128),                    #主图
  sell   VARCHAR(32)                     #销量
);
/**商品的数据插入**/
INSERT INTO user_product VALUES(NULL,'13.3英寸','8G','256G固态硬盘 支持SSD硬盘扩容','i5-6200U','小米(MI)Air',4999,'小米(MI)Air 13.3英寸全金属超轻薄笔记本(i5-6200U 8G 256G PCIE固态 940MX独显 FHD WIN10)银',100,'小米','timg.jpg',80);
INSERT INTO user_product VALUES(NULL,'12.5英寸','4G','256G固态硬盘 全高清屏','Core M-7Y30','小米(MI)Air',3599,'小米(MI)Air 12.5英寸全金属超轻薄笔记本(Core M-7Y30 4G 128G固态硬盘 全高清屏 背光键盘 Win10)银',100,'小米','timg.jpg',80);
INSERT INTO user_product VALUES(NULL,'12.5英寸','4G','256G固态硬盘 全高清屏','Core M-7Y30','小米(MI)Air',3599,'小米(MI)Air 12.5英寸全金属超轻薄笔记本(Core M-7Y30 4G 128G固态硬盘 全高清屏 背光键盘 Win10)金',100,'小米','timg.jpg',80);
INSERT INTO user_product VALUES(NULL,'12.5英寸','4G','128G SSD固态硬盘','Core M-6Y30','小米(MI)Air',3599,'小米(MI)Air 12.5英寸全金属超轻薄笔记本(Core M-6Y30 4G 128G SSD固态硬盘 全高清屏 WIN10) 银',100,'小米','timg.jpg',80);
INSERT INTO user_product VALUES(NULL,'13.3英寸','8G','256G固态硬盘 支持SSD硬盘扩容','i5-6200U','小米(MI)Air',4999,'小米(MI)Air 13.3英寸全金属超轻薄笔记本(i5-6200U 8G 256G PCIE固态 940MX独显 FHD WIN10)银',100,'小米','timg.jpg',80);
INSERT INTO user_product VALUES(NULL,'13.3英寸','8G','256G固态硬盘 支持SSD硬盘扩容','i5-6200U','小米(MI)Air',4999,'小米(MI)Air 13.3英寸全金属超轻薄笔记本(i5-6200U 8G 256G PCIE固态 940MX独显 FHD WIN10)银',100,'小米','timg.jpg',80);
INSERT INTO user_product VALUES(NULL,'13.3英寸','8G','256G固态硬盘 支持SSD硬盘扩容','i5-6200U','小米(MI)Air',4999,'小米(MI)Air 13.3英寸全金属超轻薄笔记本(i5-6200U 8G 256G PCIE固态 940MX独显 FHD WIN10)银',100,'小米','timg.jpg',80);