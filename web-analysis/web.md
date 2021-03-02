# 分析

## 頁面分析

- 使用者進入首頁會看到 最上面會顯示 Navbar
- Navbar 下面接 banner
- banner 會顯
  1. 全版圖片。
  2. 電影名稱
  3. 電影敘述

## Navbar

使用者點擊首頁圖以及首頁選項會回到初始畫面
![](https://i.imgur.com/vDL4dVf.jpg)

## banner

大 banner 動畫，在固定時間 ( 1S、2S )會自動輪播不同電影
![](https://i.imgur.com/cyuoesc.gif)

當使用者點擊下方縮圖時會立刻切換到另一張　 banner
![](https://i.imgur.com/grxLt6s.jpg)

點擊完會帶到點擊的那部電影
![](https://i.imgur.com/euUNDP5.jpg)

使用者點擊左右兩側的箭頭，可以切換上一部或是下一部電影
![](https://i.imgur.com/YrZAgdI.jpg)

使用者點擊首頁圖以及首頁選項會回到初始畫面
![](https://i.imgur.com/lfwPhoA.jpg)

使用者點擊 我的最愛會顯示"已加入我的最愛"的電影
![](https://i.imgur.com/DmMsgXB.png)

## 頁面分析

### 列出電影清單 ( 因為本身就是陣列 )

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

- 使用者可以在此頁面將電影加入購物車，以方便後續結帳
- 使用者可以加入關注，能夠在關注頁面查看關注的電影
- 使用者在此頁面可以看到電影價格並獲得特價資訊
  ![](https://i.imgur.com/0zXxeFO.png)

使用者可以透過搜尋欄找到對應的電影名稱，
例如搜尋"浴"字，在電影名稱裡只要跟"浴"字有關的電影都會顯示。
![](https://i.imgur.com/6ntxXPs.png)

使用者透過測欄可以過濾某類型的電影，例如動作、劇情...等等
![](https://i.imgur.com/fV9LlGb.png)

## 結帳頁面

使用者進入結帳頁面會

1. 顯示已選購電影的數量跟價格
2. 右側欄會計算電影的總價格
   ![](https://i.imgur.com/mwq15nT.png)

使用者點擊 "垃圾桶的 icon "

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
