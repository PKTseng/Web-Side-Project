# 網頁分析

當接到需求時會需要跟 PM 做大量的溝通，確認這是不是用戶想要的功能跟效果。

分析分成兩個角度:

1. 使用者: 產品的使用者
2. 管理者: 可以觀看後台數據以及決定產品是否可以上架的人

以下做的頁面分析是<font color=#FF0000>逆向回推</font>，從網頁成品回推需求，這樣在將來 PM 開需求的時候才知道怎麼把功能列出來。

以下都是以<font color=#FF0000>使用者</font>的角度出發

## 首頁

### Navbar

使用者進入首頁會看到最上面會顯示 Navbar，網頁往下滑 Navbar 會鎖定在視窗最上方。
使用者點擊首頁圖以及首頁選項會回到初始畫面。
![](https://i.imgur.com/vDL4dVf.jpg)

使用者點擊我的最愛會顯示"已加入我的最愛"的電影
![](https://i.imgur.com/DmMsgXB.png)

### Banner

Banner 包含以下資訊:

1. 全版圖片。
2. 電影名稱。
3. 電影敘述。

Navbar 下面接 Banner。
大 banner 動畫，在固定時間 ( 1s )會自動輪播不同電影。
![](https://i.imgur.com/cyuoesc.gif)

使用者點擊下方縮圖時會立刻切換到另一張　 banner ，如下一張圖。
![](https://i.imgur.com/grxLt6s.jpg)

點擊完會帶到點擊的那部電影
![](https://i.imgur.com/euUNDP5.jpg)

使用者點擊左右兩側的箭頭，可以切換上一部或是下一部電影
![](https://i.imgur.com/YrZAgdI.jpg)

### 電影清單 ( 本身就是陣列 )

![](https://i.imgur.com/FqwLF17.png)

每個電影包含以下資訊

1. 類型(動作)
2. 電影圖片
3. 名稱
4. 可以被加入到購物車
5. 可加入關注
6. 可看詳細內容
   ![](https://i.imgur.com/RbpQjaV.png)

使用者點選查看內容即可進入電影的詳細說明頁面
![](https://i.imgur.com/9YLjfzO.png)

![](https://i.imgur.com/0zXxeFO.png)

### 電影詳細資訊業面

1. 使用者可以在此頁面將電影加入購物車，以方便後續結帳
2. 使用者可以加入關注，能夠在我的最愛查看已關注的電影
3. 使用者在此頁面可以看到電影價格並獲得特價資訊
   ![](https://i.imgur.com/0zXxeFO.png)

使用者可以透過搜尋欄找到對應的電影名稱，
例如搜尋"浴"字，就只會顯示電影名稱跟"浴"字有關的電影。
![](https://i.imgur.com/6ntxXPs.png)

使用者透過測欄可以過濾某類型的電影，例如動作、劇情...等等
![](https://i.imgur.com/fV9LlGb.png)

## 結帳頁面

使用者進入結帳頁面會看到用表格呈現的選購清單
視窗左邊區塊的第一列由左而右依序顯示

1. 電影名稱
2. 打折的價格
3. 選購數量
4. 總價格

視窗右邊區塊會顯示訂單的總價格、折價券碼、進行下一步
![](https://i.imgur.com/mwq15nT.png)

在電影清單的最後一欄，使用者可以點擊 "垃圾桶的 icon "，點擊後會有兩種效果

1. 頁面會先顯示 loading 效果
2. 在移除已選購的電影
   ![](https://i.imgur.com/YGnGipW.png)

使用者點選"確認，下一步"
![](https://i.imgur.com/wyFGCCK.png)

會將使用者帶到填寫 "收件人資訊" 的頁面
![](https://i.imgur.com/l7uzVim.png)

使用者點選 "送出訂單"
![](https://i.imgur.com/eQ5fQmL.png)

會將使用者帶到確認填寫資訊頁面 ( 用高亮是因為字體是灰色的看不清楚 )
![](https://i.imgur.com/SjqnXIq.png)

使用者點選"確認付款去"後

1. 付款狀態會顯示付款完成
2. 購物車的數量也會變成 0

![](https://i.imgur.com/6Gzghtt.png)

![](https://i.imgur.com/0X6PxHn.png)

## 以上為使用這視角

## Navbar (以下為管理者視角)

使用者點擊後台管理
![](https://i.imgur.com/2sViqyx.jpg)

會顯示後台頁面
![](https://i.imgur.com/DD3Jjd5.png)

管理者點選模擬訂單
![](https://i.imgur.com/52lvlZa.png)

每個電影都有以下資訊

1. 電影名稱
2. 電影圖片
3. 原價
4. 特價
5. 選購數量的按鈕
6. 加入購物車的按鈕

![](https://i.imgur.com/s3b2NZJ.jpg)

管理者點擊查看更多
![](https://i.imgur.com/RjXg3o1.png)
會跳出視窗，視窗內的資訊包含

1. 電影名稱
2. 電影圖片
3. 電影介紹
4. 原價
5. 特價
6. 選購數量跟總價
7. 加入購物車按鈕

![](https://i.imgur.com/LGYZ7rU.png)

管理者可以選擇電影數量
![](https://i.imgur.com/w8DUyKu.png)

例如管理者選了 10 部，再點選加到購物車
![](https://i.imgur.com/qeHavLl.png)

首頁的購物車就會及時顯示
![](https://i.imgur.com/s8nv30N.jpg)

## 參考資料來自六角作品強

[作品連結](https://works.hexschool.io/#/?id=86)
