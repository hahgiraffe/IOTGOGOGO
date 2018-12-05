import socket
import threading
import json
import pymysql # 导入pymysql包
import time
db = pymysql.connect("127.0.0.1", "root", "chs646268684", "ehospital_db")  # 打开数据库，配置数据库
cursor = db.cursor()  # 数据库操作
# 监听端口
server_addr = ('0.0.0.0',10001)

def recv_sockdata(the_socket):
    total_data = ""
    while True:
        data = the_socket.recv(1024).decode()
        if "END" in data:
            total_data += data #[:data.index("END")]
            break
        total_data += data
    print("-----------------")
    return total_data
	

class MyThread(threading.Thread,object):

    def __init__(self,sock,addr):
        threading.Thread.__init__(self)
        self.sock = sock
        self.addr = addr
        self.direction = 'UP'

    def run(self):
        print('Accept new connection from {}...'.format(self.addr))
        try:
            self.recv_data()
        except (ConnectionResetError,ConnectionAbortedError):
            print('Connection from {} closed.'.format(self.addr))
            threads.remove(self)

    def recv_data(self):
        while True:
            res_data = recv_sockdata(self.sock)
            #print(res_data)
            try:
                print(res_data)
                data = json.loads(res_data[:-3])  # 去掉结尾的END
                print(data)
                if 'first_dir' in res_data:
                    self.direction = data.get('first_dir')
                    continue

                # 就比如如果当前数据方向是UP，说明是网关发上来的数据，那么就转化后插入数据库
                if self.direction == "UP":
                    print('up data is success')
                    # data = data_dict.get('data')
                    # cmd = "insert into ec_test.ec_data(data_type,data_value,data_time) values('Tem',{},now());".format(data)
                    # cursor.execute(cmd)  # 执行cmd命令
                    # db.commit()
                    board = data['board']
                    frametype = data['frametype']
                    device = data['device']
                    datalen = data['datalen']
                    content = data['data']
                    nowtime=time.strftime("%Y-%m-%d %H:%M:%S")
                    print(board, frametype, device, datalen, content, nowtime)
                    if(board == 'wenshidu'):
                        wd = data['data1']
                        sd= data['data2']
                        # newdata = models.Table_wsd(room_num='F1001',data1=wd,data12=sd,cur_time=nowtime)  其他房间的怎么办
                        # newdata.save()
                        cmd = "insert into ehospital_db.ehospital_table_wsd(room_num,data1,data12,cur_time) values('F1001',{a},{b},now());".format(a=wd,b=sd)
                        cursor.execute(cmd)  # 执行cmd命令
                        db.commit()
                        pass
                    elif(board == 'guangzhao'):
                        # newdata = models.Table_guangzhao(room_num='F1001', data=content, cur_time=nowtime)
                        # newdata.save()
                        cmd = "insert into ehospital_db.ehospital_table_guangzhao(room_num,data,cur_time) values('F1001',{}，now());".format(content)
                        cursor.execute(cmd)  # 执行cmd命令
                        db.commit()
                        pass
                    elif (board == 'CO2'):
                        # newdata = models.Table_CO2(room_num='F1001', data=content, cur_time=nowtime)
                        # newdata.save()
                        cmd = "insert into ehospital_db.ehospital_table_co2(room_num,data,cur_time) values('F1001',{},now());".format(content)
                        cursor.execute(cmd)  # 执行cmd命令
                        db.commit()
                        pass
                    elif (board == 'PM2.5'):
                        # newdata = models.Table_PM(room_num='F1001', data=content, cur_time=nowtime)
                        # newdata.save()
                        cmd = "insert into ehospital_db.ehospital_table_pm(room_num,data,cur_time) values('F1001',{},now());".format(content)
                        cursor.execute(cmd)  # 执行cmd命令
                        db.commit()
                        pass
                    elif (board == 'ziwaixian'):
                        # newdata = models.Table_ziwaixian(room_num='F1001', data=content, cur_time=nowtime)
                        # newdata.save()
                        cmd = "insert into ehospital_db.ehospital_table_ziwaixian(room_num,data,cur_time) values('F1001',{},now());".format(content)
                        cursor.execute(cmd)  # 执行cmd命令
                        db.commit()
                        pass
                    elif (board == 'yanwu'):
                        # newdata = models.Table_yanwu(room_num='F1001', test=content, cur_time=nowtime)
                        # newdata.save()
                        cmd = "insert into ehospital_db.ehospital_table_yanwu(room_num,test,cur_time) values('F1001',{},now());".format(content)
                        cursor.execute(cmd)  # 执行cmd命令
                        db.commit()
                        cmd2 = "insert into ehospital_db.ehospital_table_tishi(user_name,room_num,option,cur_time) values('曹皓爽','F1001','房间产生烟雾',now());"
                        cursor.execute(cmd2)  # 执行cmd命令
                        db.commit()
                        pass
                    elif (board == 'huoguang'):
                        # newdata = models.Table_huoguang(room_num='F1001', test=content, cur_time=nowtime)
                        # newdata.save()
                        cmd = "insert into ehospital_db.ehospital_table_huoguang(room_num,test,cur_time) values('F1001',{},now());".format(content)
                        cursor.execute(cmd)  # 执行cmd命令
                        db.commit()
                        cmd2 = "insert into ehospital_db.ehospital_table_tishi(user_name,room_num,option,cur_time) values('曹皓爽','F1001','房间产生火光',now());"
                        cursor.execute(cmd2)  # 执行cmd命令
                        db.commit()
                        pass
                    elif (board == 'hongwai'):
                        # newdata = models.Table_hongwai(room_num='F1001', test=content, cur_time=nowtime)
                        # newdata.save()
                        cmd = "insert into ehospital_db.ehospital_table_hongwai(room_num,test,cur_time) values('F1001',{},now());".format(content)
                        cursor.execute(cmd)  # 执行cmd命令
                        db.commit()

                        pass
                    elif (board == 'CH4'):
                        # newdata = models.Table_jiawan(room_num='F1001', data=content, cur_time=nowtime)
                        # newdata.save()
                        cmd = "insert into ehospital_db.ehospital_table_jiawan(room_num,data,cur_time) values('F1001',{},now());".format(content)
                        cursor.execute(cmd)  # 执行cmd命令
                        db.commit()
                        cmd2 = "insert into ehospital_db.ehospital_table_tishi(user_name,room_num,option,cur_time) values('曹皓爽','F1001','房间产生甲烷',now());"
                        cursor.execute(cmd2)  # 执行cmd命令
                        db.commit()
                        pass
                    elif (board == 'duishe'):#没有对射反射
                        pass
                    elif (board == 'fanshe'):
                        pass
                elif self.direction == "DOWN":
                    # 如果当前数据方向是DOWN 要找出所有的网络方向是UP的线程（网关线程），将数据发送给网关。
                    for thread in threads:
                        if thread.direction == "UP":
                            thread.sock.send(res_data.encode())
                            print('up data')
                            # data = json.loads(res_data,encoding="utf-8")
                			# print(data)# 收到的数据
                            # 一下模拟收到网关数据后进行的操作
                            # 我们假设收到的数据是温度数据，将温度数据存入数据库
            except json.decoder.JSONDecodeError as e:
                print("error data:"+res_data)
                continue

#创建Socket
tcpSocket = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
#绑定地址
tcpSocket.bind(server_addr)
#监听端口，传入的参数指定等待连接的最大数量
tcpSocket.listen(16)
threads = []
print('Waiting for connection...')
#服务器程序通过一个永久循环来接受来自客户端的连接
def do_service():
    while True:
        # 接受一个新连接:
        sock,addr = tcpSocket.accept()
        # 创建新线程来处理TCP连接:每个连接都必须创建新线程（或进程）来处理，
        # 否则，单线程在处理连接的过程中，无法接受其他客户端的连接：
        mthread = MyThread(sock,addr)
        mthread.start()
        threads.append(mthread)
threading.Thread(target=do_service).start()