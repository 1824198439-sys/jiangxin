const places = {
  guangzhouAirport: { name: '广州白云国际机场 T2', city: '广州', kind: '出发机场', image: 'assets/saigon.jpg', description: '10 月 2 日 23:05 去程航班出发地。机场图片为通用参考，现场以航站楼指引为准。', tags: ['机场', 'T2'], query: 'Guangzhou Baiyun International Airport Terminal 2' },
  suvarnabhumi: { name: '曼谷素万那普国际机场 T1', city: '曼谷', kind: '抵达机场', image: 'assets/saigon.jpg', description: '10 月 3 日 00:45 抵达。入境后直接前往曼谷水门伯克利酒店休息。', tags: ['机场', '抵达'], query: 'Suvarnabhumi Airport Bangkok' },
  berkeley: { name: '曼谷水门伯克利酒店', city: '曼谷', kind: '曼谷酒店', image: 'assets/berkeley_hotel_order.png', description: '10 月 2 日至 10 月 6 日入住。酒店订单截图作为房型与订单辨认参考。', tags: ['酒店', '水门'], query: 'The Berkeley Hotel Pratunam Bangkok' },
  donMueang: { name: '廊曼国际机场 T1', city: '曼谷', kind: '转场机场', image: 'assets/saigon.jpg', description: '10 月 6 日 FD654 从这里出发，建议 09:00 左右离开酒店。', tags: ['机场', 'DMK T1'], query: 'Don Mueang International Airport Terminal 1' },
  tanSonNhat: { name: '新山一国际机场 T2', city: '胡志明', kind: '胡志明机场', image: 'assets/saigon.jpg', description: '10 月 6 日 15:20 抵达，10 月 8 日 07:10 返程也从这里出发。', tags: ['机场', 'T2'], query: 'Tan Son Nhat International Airport Terminal 2' },
  chipHomestay: { name: 'Chip Homestay & Studio', city: '胡志明', kind: '胡志明酒店', image: 'assets/chip_homestay_order.png', description: '981 Đường Lê Lai，10 月 6 日 14:00 入住。订单截图作为房间与地址辨认参考。', tags: ['酒店', '第一郡'], query: 'Chip Homestay & Studio 981 Duong Le Lai Ho Chi Minh City' },
  phra: { name: 'Phra Arthit', city: '曼谷', kind: '老城河岸', image: 'web_photos/wat_arun.jpg', description: '湄南河边的老城入口，适合早上慢逛和拍照。', tags: ['河岸', '早上'], query: 'Phra Arthit Bangkok' },
  eatSight: { name: 'Eat Sight Story Deck', city: '曼谷', kind: '河景餐厅', image: 'web_photos/wat_arun.jpg', description: '面向河景的午餐点，放在老城上午路线中，避免来回折返。', tags: ['午餐', '河景'], query: 'Eat Sight Story Deck Bangkok' },
  yaowarat: { name: '唐人街（耀华力路）', city: '曼谷', kind: '夜间街区', image: 'web_photos/yaowarat.jpg', description: '日落后再逛更舒服，适合把晚餐和夜间街拍放在一起。', tags: ['夜景', '街拍'], query: 'Yaowarat Road Bangkok' },
  bonchon: { name: 'Bonchon Tha Maharaj', city: '曼谷', kind: '晚餐备选', image: 'web_photos/yaowarat.jpg', description: '位于 Tha Maharaj 一带的晚餐备选，和老城河岸线相邻。', tags: ['餐厅', '备选'], query: 'Bonchon Tha Maharaj Bangkok' },
  local: { name: 'The Local', city: '曼谷', kind: '泰式餐厅', image: 'web_photos/here_hai.jpg', description: '适合在老城行程中作为泰式晚餐备选。', tags: ['泰餐', '备选'], query: 'The Local Bangkok restaurant' },
  chatuchak: { name: '扎度扎周末市场', city: '曼谷', kind: '周末市集', image: 'web_photos/an_dong.jpg', description: '10 月 4 日上午集中逛，体力和大件购物留出余量。', tags: ['购物', '周日'], query: 'Chatuchak Weekend Market Bangkok' },
  noodle: { name: 'Baan Kuay Tiew Ruathong', city: '曼谷', kind: '午餐', image: 'web_photos/pho_dish.jpg', description: '作为周末市场到暹罗之间的午餐备选。', tags: ['午餐', '面食'], query: 'Baan Kuay Tiew Ruathong Bangkok' },
  pangcha: { name: 'Pang Cha Cafe Siam Paragon', city: '曼谷', kind: '甜品', image: 'web_photos/cafe_apartment.jpg', description: '商场内休息和吃甜品，避开下午高温。', tags: ['甜品', '室内'], query: 'Pang Cha Cafe Siam Paragon Bangkok' },
  bigc: { name: 'Big C Supercenter Ratchadamri', city: '曼谷', kind: '超市采购', image: 'web_photos/saigon_square.jpg', description: '适合集中购买伴手礼、日用品和轻便服饰。', tags: ['采购', '暹罗'], query: 'Big C Supercenter Ratchadamri Bangkok' },
  chula: { name: '朱拉隆功夜市', city: '曼谷', kind: '夜市', image: 'web_photos/banthat.jpg', description: '已纳入主行程。和 Banthat Thong 餐饮带相邻，先逛再按客流择店。', tags: ['夜市', '重点加入'], query: 'Chula Night Market Bangkok' },
  somSom: { name: 'Som Som Seafood', city: '曼谷', kind: '必吃海鲜', image: 'web_photos/crab_fried_rice.jpg', description: '你指定一定要去的餐厅。地址为 659 Chulalongkorn 4 Alley, Wang Mai, Pathum Wan，和朱拉隆功夜市、Banthat Thong 同一片区。', tags: ['必吃', '海鲜', '朱拉隆功'], query: 'Som Som Seafood 659 Chulalongkorn 4 Alley Bangkok' },
  jeh: { name: 'Jeh O Chula', city: '曼谷', kind: '餐厅', image: 'web_photos/jeh_o.jpg', description: '朱拉隆功夜市附近的热门餐厅，建议现场看排队情况。', tags: ['晚餐', '排队'], query: 'Jeh O Chula Bangkok' },
  jimjoom: { name: 'Jimjoom99 Banthat Thong', city: '曼谷', kind: '餐厅', image: 'web_photos/banthat.jpg', description: 'Banthat Thong 一带的火锅/餐饮备选。', tags: ['晚餐', 'Banthat Thong'], query: 'Jimjoom99 Banthat Thong Bangkok' },
  chulakitchen: { name: '朱拉厨房', city: '曼谷', kind: '餐厅', image: 'web_photos/banthat.jpg', description: '夜市晚餐的另一个备选，不建议同晚连续打卡多家。', tags: ['晚餐', '备选'], query: 'Chula Kitchen Bangkok' },
  paknam: { name: 'Wat Paknam Phasi Charoen', city: '曼谷', kind: '寺庙', image: 'web_photos/paknam.jpg', description: '吞武里上午第一站，穿着端庄并预留步行时间。', tags: ['寺庙', '吞武里'], query: 'Wat Paknam Phasi Charoen Bangkok' },
  khlong: { name: 'Khlong Bang Luang Floating Market', city: '曼谷', kind: '水上市场', image: 'assets/talatnoi.jpg', description: '和 Wat Paknam 同侧，顺路安排社区与运河体验。', tags: ['运河', '社区'], query: 'Khlong Bang Luang Floating Market Bangkok' },
  baanKook: { name: 'Baan Kook Kai', city: '曼谷', kind: '午餐备选', image: 'web_photos/crab_fried_rice.jpg', description: '吞武里午餐备选，出发当天以营业状态为准。', tags: ['午餐', '备选'], query: 'Baan Kook Kai Bangkok' },
  iconsiam: { name: '暹罗天地 ICONSIAM', city: '曼谷', kind: '商场河畔', image: 'web_photos/iconsiam.jpg', description: '从吞武里过河后进入室内休息、补给和看河景。', tags: ['商场', '河畔'], query: 'ICONSIAM Bangkok' },
  asiatique: { name: '码头夜市 Asiatique', city: '曼谷', kind: '夜市', image: 'web_photos/yaowarat.jpg', description: '和 ICONSIAM 二选一即可，避免夜间长距离折返。', tags: ['夜市', '河畔'], query: 'Asiatique The Riverfront Bangkok' },
  phoQuynh: { name: 'Pho Quynh', city: '胡志明', kind: '越南餐厅', image: 'web_photos/pho_dish.jpg', description: '抵达胡志明第一晚的轻松晚餐备选。', tags: ['第一郡', '晚餐'], query: 'Pho Quynh Ho Chi Minh City' },
  fiveBoys: { name: 'Five Boys Number One Smoothies', city: '胡志明', kind: '饮品店', image: 'web_photos/cafe_apartment.jpg', description: '抵达当晚的饮品备选，按酒店附近位置取舍。', tags: ['饮品', '第一郡'], query: 'Five Boys Number One Smoothies Ho Chi Minh City' },
  post: { name: 'Saigon Central Post Office', city: '胡志明', kind: '城市地标', image: 'web_photos/post_office.jpg', description: '10 月 7 日早上的第一站，步行和拍照优先。', tags: ['地标', '早上'], query: 'Saigon Central Post Office' },
  notre: { name: '西贡圣母大教堂外部', city: '胡志明', kind: '教堂街区', image: 'web_photos/notre_dame.jpg', description: '和中央邮政局相邻，按现场开放区域参观外部。', tags: ['街区', '拍照'], query: 'Notre Dame Cathedral Basilica of Saigon' },
  phoHoa: { name: 'Phở Hòa Pasteur', city: '胡志明', kind: '越南餐厅', image: 'web_photos/pho_hoa.jpg', description: '第一郡午餐备选，避开午后高温。', tags: ['午餐', '河粉'], query: 'Pho Hoa Pasteur Ho Chi Minh City' },
  fineArts: { name: 'Ho Chi Minh City Fine Arts Museum', city: '胡志明', kind: '博物馆', image: 'web_photos/independence_palace.jpg', description: '室内文化点，放在午后市场和购物之前。', tags: ['室内', '文化'], query: 'Ho Chi Minh City Fine Arts Museum' },
  benthanh: { name: '滨城市场', city: '胡志明', kind: '市场', image: 'web_photos/ben_thanh.jpg', description: '注意现金、找零和随身物品，按时间短逛。', tags: ['市场', '小吃'], query: 'Ben Thanh Market Ho Chi Minh City' },
  maven: { name: 'The MAVEN Nguyễn Trãi', city: '胡志明', kind: '服装店', image: 'web_photos/saigon_square.jpg', description: 'Nguyễn Trãi 购物带的重点服饰店之一，先看营业状态。', tags: ['购物', '服装'], query: 'The MAVEN Nguyen Trai Ho Chi Minh City' },
  six: { name: '21Six Nguyen Trai', city: '胡志明', kind: '服装店', image: 'web_photos/saigon_square.jpg', description: '和 The MAVEN 放在同一购物时段，按风格和预算筛选。', tags: ['购物', '服装'], query: '21Six Nguyen Trai Ho Chi Minh City' },
  chats: { name: 'CHATS by C.DAM', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: 'Nguyễn Trãi 一带的女装备选，适合和附近店铺步行串联。', tags: ['购物', '女装'], query: 'CHATS by C.DAM Ho Chi Minh City' },
  aanh: { name: 'Aanh-Jiki', city: '胡志明', kind: '服装店', image: 'web_photos/saigon_square.jpg', description: '同一购物带的补充选项，不建议一次逛完所有店。', tags: ['购物', '服装'], query: 'Aanh Jiki Ho Chi Minh City' },
  mollynista: { name: 'MOLLYNISTA', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的女装店，按约 30 分钟一站安排。', tags: ['购物', '女装'], query: 'MOLLYNISTA Ho Chi Minh City' },
  cocosin: { name: 'COCOSIN STORE', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的女装店，和 Nguyễn Trãi 购物段一起筛选。', tags: ['购物', '女装'], query: 'COCOSIN STORE Ho Chi Minh City' },
  espoir: { name: 'L’ESPOIR', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的女装店，建议单店预留约 30 分钟。', tags: ['购物', '女装'], query: 'L ESPOIR clothing Ho Chi Minh City' },
  lavierge: { name: 'LA VIERGE', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的女装店，和附近店铺按顺路程度取舍。', tags: ['购物', '女装'], query: 'LA VIERGE clothing Ho Chi Minh City' },
  lsoul: { name: 'LSOUL', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的女装店，建议按风格和预算选择。', tags: ['购物', '女装'], query: 'LSOUL clothing Ho Chi Minh City' },
  jubin: { name: 'JUBIN Studio', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的女装店，单店约 30 分钟。', tags: ['购物', '女装'], query: 'JUBIN Studio Ho Chi Minh City' },
  huong: { name: 'HUONG Boutique', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的女装店，可作为备选，不必全部逛完。', tags: ['购物', '女装'], query: 'HUONG Boutique Ho Chi Minh City' },
  bliss: { name: 'Bliss Vintage', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的复古女装店，适合在购物段最后按体力安排。', tags: ['购物', '复古'], query: 'Bliss Vintage Ho Chi Minh City' },
  workshop: { name: 'The Workshop Coffee', city: '胡志明', kind: '咖啡店', image: 'assets/coffee.jpg', description: '第一郡收尾咖啡备选，按购物结束位置选择。', tags: ['咖啡', '收尾'], query: 'The Workshop Coffee Ho Chi Minh City' },
  linh: { name: 'Cà phê Linh', city: '胡志明', kind: '咖啡店', image: 'assets/coffee.jpg', description: '第三郡咖啡休息点，和 Tân Định 动线相近。', tags: ['咖啡', '第三郡'], query: 'Ca phe Linh Ho Chi Minh City' },
  sweetcome: { name: 'SweetCome BKK', city: '曼谷', kind: '午餐备选', image: 'web_photos/crab_fried_rice.jpg', description: '吞武里午餐备选，出发当天以营业状态为准。', tags: ['午餐', '备选'], query: 'SweetCome BKK Bangkok' },
  tanDinh: { name: 'Nhà Thờ Giáo Xứ Tân Định', city: '胡志明', kind: '教堂', image: 'web_photos/notre_dame.jpg', description: '10 月 8 日原计划的第一站，但返程航班很早，实际应改为提前退房去机场。', tags: ['第三郡', '需调整'], query: 'Tan Dinh Church Ho Chi Minh City' },
  clothes: { name: 'MOLLYNISTA / COCOSIN / L’ESPOIR 等', city: '胡志明', kind: '服装购物带', image: 'web_photos/saigon_square.jpg', description: '10 月 8 日原购物计划因 07:10 航班取消；如改签返程，可恢复第三郡购物。', tags: ['购物', '原计划'], query: 'Nguyen Trai shopping street Ho Chi Minh City' },

  sevenEleven: { name: '7-Eleven（早餐/夜宵补给）', city: '曼谷', kind: '便利店', image: 'web_photos/cafe_apartment.jpg', description: '附近没有合适早餐时使用。可优先试泰式奶茶、Oishi 绿茶、M-150 能量饮料、柠檬茶或 Yakult 类乳酸菌饮品；不同门店口味和库存会变化。', tags: ['早餐', '夜宵', '调饮'], query: '7-Eleven Pratunam Bangkok' },
  siamSkywalk: { name: 'Siam 网红天桥（BTS Siam Skywalk）', city: '曼谷', kind: '拍照点', image: 'web_photos/cafe_apartment.jpg', description: '第一天暹罗商圈的开场拍照点，连接 BTS Siam、Siam Paragon 与 CentralWorld 一带，适合 10:00 后拍城市街景。', tags: ['Siam', '拍照', '天桥'], query: 'BTS Siam Skywalk Bangkok' },
  siamLunch: { name: 'Siam Paragon Food Hall / Pang Cha', city: '曼谷', kind: '午餐', image: 'web_photos/cafe_apartment.jpg', description: '固定 12:00 用餐，安排在小狮子互动前，避免空腹排队。', tags: ['12:00', '午餐', 'Siam'], query: 'Siam Paragon Food Hall Bangkok' },
  lionCafe: { name: 'L7 Café 小狮子互动', city: '曼谷', kind: '体验', image: 'web_photos/elephant.jpg', description: '午餐后再去观看小狮子；互动时间和动物状态以当天店家安排为准。', tags: ['小狮子', '下午'], query: 'L7 Cafe lion Bangkok' },
  paknamOuter: { name: '水门寺外围拍照点 · 796 Soi Thoet Thai 26', city: '曼谷', kind: '外围打卡', image: 'web_photos/paknam.jpg', description: '精确地址：796 Soi Thoet Thai 26。按你的计划不进寺内，只在公共道路与外围区域拍照；注意不要影响住户与交通。', tags: ['精确地址', '外围', '拍照'], query: '796 Soi Thoet Thai 26 Bangkok' },
  watArunView: { name: 'Wat Arun 对岸 Tha Tien 公共观景点', city: '曼谷', kind: '公共河岸拍照', image: 'web_photos/wat_arun.jpg', description: '在 Tha Tien 河岸公共区域远眺郑王庙，不购买门票也能拍到经典河景；日落前后光线较好。', tags: ['郑王庙', '对岸', '公共观景'], query: 'Tha Tien Pier Wat Arun viewpoint Bangkok' },
  chatuchakLunch: { name: '乍都乍市集内午餐摊', city: '曼谷', kind: '午餐', image: 'web_photos/an_dong.jpg', description: '市集内就近解决午餐，减少往返；以当天营业摊位和排队情况为准。', tags: ['午餐', '市集'], query: 'Chatuchak Weekend Market food court Bangkok' },
  massageBangkok: { name: '暹罗/朱拉隆功附近泰式按摩', city: '曼谷', kind: '按摩', image: 'web_photos/cafe_apartment.jpg', description: '第三天晚间安排 60–90 分钟按摩，建议提前预约并确认价格、时长与是否需要现金。', tags: ['第三天晚上', '放松'], query: 'Thai massage Banthat Thong Bangkok' },
  armyRange: { name: '曼谷陆军射击场（天气不好备选）', city: '曼谷', kind: '天气备选', image: 'web_photos/saigon_square.jpg', description: '替换原海军射击场，距离和动线更适合留在曼谷的一天；务必提前确认开放、证件、年龄和安全要求。', tags: ['第四天备选', '陆军'], query: 'Army Shooting Range Bangkok' },
  pattayaTour: { name: '芭提雅一日团（天气好二选一）', city: '曼谷', kind: '天气好方案', image: 'web_photos/wat_arun.jpg', description: '天气晴朗且接受长途往返时参加正规一日团。通常早出晚归，可能无法同日完成 ICONSIAM 与 Big C 购物。', tags: ['第四天', '二选一', '报团'], query: 'Pattaya one day tour from Bangkok' },
  butterCrab: { name: '94 Restaurant 黄油蟹', city: '胡志明', kind: '晚餐', image: 'web_photos/butter_crab.jpg', description: '10 月 6 日抵达并入住后安排的重点晚餐；建议提前确认营业和黄油蟹供应。', tags: ['10 月 6 日', '黄油蟹'], query: '94 Restaurant Ho Chi Minh butter crab' },
  geylang: { name: 'Quán Geylang Lor 9 牛蛙粥', city: '胡志明', kind: '夜宵', image: 'web_photos/pho_dish.jpg', description: '黄油蟹后若仍有体力再去；可按距离和营业状态决定是否取消。', tags: ['夜宵', '牛蛙粥'], query: 'Quan Geylang Lor 9 Ho Chi Minh City' },
  vietShampoo: { name: 'Mint Barbershop & Spa 越式洗头', city: '胡志明', kind: '越式洗头', image: 'web_photos/cafe_apartment.jpg', description: '胡志明只安排越式洗头，不安排按摩；建议提前预约，确认服务时长和是否含洗发、头皮护理。', tags: ['越式洗头', '不含按摩'], query: 'Mint Barbershop Spa Vietnamese head spa Ho Chi Minh City' },
  hcmLunch: { name: 'Phở Việt Nam / Phở Hòa Pasteur', city: '胡志明', kind: '午餐', image: 'web_photos/pho_hoa.jpg', description: '越式洗头后就近吃河粉，作为第一郡老城与女装购物之间的午餐。', tags: ['午餐', '河粉'], query: 'Pho Hoa Pasteur Ho Chi Minh City' },
  independence: { name: '独立宫外观', city: '胡志明', kind: '下午替代路线', image: 'web_photos/independence_palace.jpg', description: '下午用来替代重复的滨城市场，安排外观拍照即可，是否进馆按体力决定。', tags: ['下午', '地标'], query: 'Independence Palace Ho Chi Minh City' },
  bookStreet: { name: '胡志明书街', city: '胡志明', kind: '下午替代路线', image: 'web_photos/book_street.jpg', description: '独立宫后顺路逛书街和咖啡店，作为 10 月 7 日下午的轻松替代。', tags: ['书街', '咖啡'], query: 'Ho Chi Minh City Book Street' },
  ceci: { name: 'Ceci', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的女装店，单店按约 30 分钟安排。', tags: ['女装', '约30分钟'], query: 'Ceci clothing Ho Chi Minh City' },
  datt: { name: 'DATT', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的女装店，与第一郡/Nguyễn Trãi 购物段顺路串联。', tags: ['女装', '约30分钟'], query: 'DATT clothing Ho Chi Minh City' },
  shebyshi: { name: 'She By Shi', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的女装店，建议单店停留约 30 分钟，按体力选择。', tags: ['女装', '约30分钟'], query: 'She By Shi Ho Chi Minh City' },
  glamdoll: { name: 'Glam Doll', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的女装店，可作为 Nguyen Trai 购物带的补充站点。', tags: ['女装', '约30分钟'], query: 'Glam Doll clothing Ho Chi Minh City' },
  thaiFood: { name: '泰国必吃清单', city: '曼谷', kind: '餐饮清单', image: 'web_photos/crab_fried_rice.jpg', description: '旅途中至少尝试抛打饭、冬阴功、mama 面、蟹肉炒饭和榴莲。优先结合当天商圈就近吃，不为单独一家店大幅绕路。', tags: ['抛打饭', '冬阴功', 'mama面', '蟹肉炒饭', '榴莲'], query: 'Thai food Siam Bangkok pad kra pao tom yum crab fried rice durian' },
  phedMark: { name: 'Phed Mark', city: '曼谷', kind: '泰式餐厅', image: 'web_photos/banthat.jpg', description: '以打抛猪肉饭闻名的餐厅，适合在暹罗/朱拉隆功一带作为打抛饭专门体验；排队和辣度以当天情况为准。', tags: ['打抛饭', '排队'], query: 'Phed Mark Bangkok' },
  chulaFiftyAlley: { name: '朱拉五十巷泰国厨房', city: '曼谷', kind: '泰式餐厅', image: 'web_photos/banthat.jpg', description: '朱拉隆功/五十巷一带的泰国厨房，作为夜市或 Som Som Seafood 后的餐饮备选，不建议同晚重复点太多。', tags: ['泰餐', '朱拉隆功'], query: 'Chula Fifty Alley Thai Kitchen Bangkok' },
  keenHouseSomsak: { name: 'A Keen House Somsak Poo Op', city: '曼谷', kind: '泰式海鲜', image: 'web_photos/crab_fried_rice.jpg', description: '收藏中的泰式海鲜店，可优先尝试蟹肉、咖喱或冬阴功；请根据当天位置和营业情况决定是否前往。', tags: ['海鲜', '泰餐'], query: 'A Keen House Somsak Poo Op Bangkok' },
  littleHanoiEgg: { name: 'Little HaNoi Egg Coffee', city: '胡志明', kind: '咖啡店', image: 'web_photos/cafe_apartment.jpg', description: '胡志明老城/书街段的蛋咖啡补充点，适合下午文化路线后短暂停留。', tags: ['蛋咖啡', '下午'], query: 'Little HaNoi Egg Coffee Ho Chi Minh City' },
  coTuCaMau: { name: 'Co Tu Ca Mau', city: '胡志明', kind: '越南餐厅', image: 'web_photos/butter_crab.jpg', description: '胡志明晚餐备选，主打越南海鲜风味；可与滨城市场晚餐二选一，按距离和营业状态取舍。', tags: ['越南菜', '海鲜'], query: 'Co Tu Ca Mau Ho Chi Minh City' },
};

const days = [
  { date: '10.02', title: '夜间抵达曼谷', city: '曼谷', stops: [
    ['23:05', '去程航班', '九元航空 AQ1267 · 广州白云 T2 → 曼谷素万那普 T1 00:45+1', 'guangzhouAirport,suvarnabhumi'],
    ['00:45', '入住', '曼谷水门伯克利酒店', 'berkeley'],
  ]},
  { date: '10.03', title: '小狮子、暹罗商圈与朱拉隆功夜市', city: '曼谷', stops: [
    ['10:00', '早餐/调饮', '7-Eleven：泰式奶茶、Oishi 绿茶、柠檬茶或 Yakult 类饮品', 'sevenEleven'],
    ['12:00', '午餐', 'Siam Paragon Food Hall / Pang Cha（先吃饭再看小狮子）', 'siamLunch'],
    ['13:30', '动物互动', 'L7 Café 小狮子互动', 'lionCafe'],
    ['15:30', '暹罗商圈', 'Siam 网红天桥、Siam Paragon、CentralWorld 一带逛街', 'siamSkywalk'],
    ['16:00', '打抛饭专门体验', 'Phed Mark（如排队过长，改为 Siam 周边就近打抛饭）', 'phedMark'],
    ['19:30', '夜间路线', '朱拉隆功夜市', 'chula'],
    ['20:15', '必吃晚餐', 'Som Som Seafood（蟹肉炒饭等海鲜）', 'somSom'],
    ['22:00', '泰餐备选', '朱拉五十巷泰国厨房', 'chulaFiftyAlley'],
    ['22:30', '夜宵', '7-Eleven 补给', 'sevenEleven'],
  ]},
  { date: '10.04', title: '乍都乍周末集市与唐人街', city: '曼谷', stops: [
    ['09:30', '早餐/调饮', '7-Eleven 轻食与泰式奶茶/绿茶', 'sevenEleven'],
    ['10:00', '周末集市', '乍都乍周末集市', 'chatuchak'],
    ['12:30', '午餐', '乍都乍市集内就近用餐，优先尝试抛打饭或 mama 面', 'chatuchakLunch'],
    ['15:30', '海鲜备选', 'A Keen House Somsak Poo Op（若顺路且营业）', 'keenHouseSomsak'],
    ['15:00', '返程休息', '回酒店放下战利品，避开下午高温', 'berkeley'],
    ['18:00', '晚餐与夜景', '唐人街（耀华力路）', 'yaowarat'],
    ['22:30', '夜宵', '7-Eleven 补给，可选榴莲或乳酸菌饮品', 'sevenEleven'],
  ]},
  { date: '10.05', title: '第四天：天气二选一', city: '曼谷', stops: [
    ['09:30', '早餐/调饮', '7-Eleven 轻食与 M-150/柠檬茶', 'sevenEleven'],
    ['10:00', '天气好方案（二选一）', '报名正规芭提雅一日团；长途往返，通常不保证晚间购物', 'pattayaTour'],
    ['10:00', '天气不好方案（二选一）', '陆军射击场（替换海军射击场）', 'armyRange'],
    ['12:30', '天气不好午餐', '射击场附近就餐，优先冬阴功或抛打饭', 'baanKook,sweetcome'],
    ['14:00', '天气不好水上集市', 'Khlong Bang Luang Floating Market', 'khlong'],
    ['16:30', '天气不好购物', '暹罗天地 ICONSIAM', 'iconsiam'],
    ['18:30', '天气不好购物', 'Big C Supercenter Ratchadamri', 'bigc'],
    ['20:30', '天气不好按摩', '暹罗/拉差丹利附近泰式按摩', 'massageBangkok'],
    ['22:30', '夜宵', '7-Eleven 补给，可选 mama 面或泰式奶茶', 'sevenEleven'],
  ]},
  { date: '10.06', title: '曼谷 → 胡志明', city: '转场', stops: [
    ['08:30', '早餐/调饮', '曼谷酒店附近 7-Eleven', 'sevenEleven'],
    ['09:00', '前往机场', '曼谷水门伯克利酒店 → 廊曼机场 T1', 'berkeley,donMueang'],
    ['13:40', '城市转场', '泰国亚洲航空 FD654 · 廊曼 T1 → 新山一 T2 15:20', 'donMueang,tanSonNhat'],
    ['16:00', '入住', 'Chip Homestay & Studio · 981 Đường Lê Lai', 'chipHomestay'],
    ['17:00', '附近女装店串联', 'Chip Homestay 周边第一郡女装店：Ceci / DATT / She By Shi / Glam Doll（每家约 30 分钟，选 2–3 家）', 'ceci,datt,shebyshi,glamdoll'],
    ['19:30', '重点晚餐', '94 Restaurant 黄油蟹', 'butterCrab'],
  ]},
  { date: '10.07', title: '胡志明老城、女装与晚间越式洗头', city: '胡志明', stops: [
    ['09:30', '早餐/调饮', '胡志明酒店附近 7-Eleven', 'sevenEleven'],
    ['10:00', '城市地标', 'Tân Định 粉色教堂', 'tanDinh'],
    ['11:00', '城市地标', 'Saigon Central Post Office', 'post'],
    ['11:30', '教堂外部', '西贡圣母大教堂外部', 'notre'],
    ['12:00', '午餐', 'Phở Việt Nam / Phở Hòa Pasteur', 'hcmLunch'],
    ['13:30', '室内文化点', 'Ho Chi Minh City Fine Arts Museum', 'fineArts'],
    ['15:00', '下午替代路线', '独立宫外观 + 书街/咖啡街，避开重复滨城市场', 'independence,bookStreet'],
    ['16:00', '下午咖啡', 'Little HaNoi Egg Coffee', 'littleHanoiEgg'],
    ['16:30', '女装店串联', 'The MAVEN / 21Six / CHATS / Aanh-Jiki / MOLLYNISTA / COCOSIN / L’ESPOIR / LA VIERGE / LSOUL / JUBIN Studio / HUONG Boutique / Bliss Vintage（每家约 30 分钟，按区域和体力选择）', 'maven,six,chats,aanh,mollynista,cocosin,espoir,lavierge,lsoul,jubin,huong,bliss'],
    ['19:30', '晚餐与夜景', '滨城市场及周边晚餐（只安排晚上去）/ Co Tu Ca Mau（二选一）', 'benthanh,coTuCaMau'],
    ['21:00', '越式洗头', 'Mint Barbershop & Spa（晚饭后；只安排越式洗头，不安排按摩）', 'vietShampoo'],
    ['23:00', '夜宵', 'Quán Geylang Lor 9 牛蛙粥（与黄油蟹分开安排在 10 月 7 日）', 'geylang'],
  ]},
  { date: '10.08', title: '返程日', city: '胡志明', stops: [
    ['03:30', '提前退房', '联系 Chip Homestay 确认行李与退房方式', 'chipHomestay'],
    ['04:00', '前往机场', '从 981 Đường Lê Lai 前往新山一国际机场 T2', 'chipHomestay,tanSonNhat'],
    ['07:10', '返程航班', '国泰航空 CX786 · 胡志明 → 中国香港 10:55', null],
    ['退税提示', '机场办理', '如购物店家提供合规退税单，直接在机场按指引办理；不为退税专门绕路。', 'tanSonNhat'],
  ]},
];

const routeList = document.querySelector('#route-list');
const tabs = [...document.querySelectorAll('.city-tab')];

function mapsEmbed(query) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed&z=15`;
}

function staticImage(path) {
  return window.location.hostname.endsWith('github.io') ? path.split('/').pop() : path;
}



function renderRoute(city = 'all') {
  routeList.innerHTML = '';
  const filteredDays = days.filter(day => city === 'all' || day.city.includes(city) || day.stops.some(stop => (stop[3] || '').split(',').some(key => places[key]?.city.includes(city))));
  const firstPlaceDay = filteredDays.findIndex(day => day.stops.some(stop => stop[3]));
  filteredDays.forEach((day, dayIndex) => {
    const group = document.createElement('details');
    group.className = 'day-group';
    group.open = dayIndex === firstPlaceDay;
    group.dataset.city = day.city;
    group.innerHTML = `<summary class="day-header"><span class="day-date">${day.date}</span><span class="day-title">${day.title}</span><span class="day-city">${day.city}</span><span class="day-chevron" aria-hidden="true">⌄</span></summary><div class="stop-list"></div>`;
    const list = group.querySelector('.stop-list');
    day.stops.forEach(([time, kind, label, key]) => {
      const stop = document.createElement('div');
      stop.className = 'stop';
      const place = key ? places[key] : null;
      const placeKeys = key ? key.split(',') : [];
      const linkedPlaces = placeKeys.map(placeKey => places[placeKey]).filter(Boolean);
      stop.innerHTML = `<div class="stop-time">${time}</div><div class="stop-content"><div class="stop-kind">${kind}</div><div class="stop-places">${linkedPlaces.length ? linkedPlaces.map(place => {
        const placeKey = Object.keys(places).find(candidate => places[candidate] === place);
        return `<button class="place-toggle" type="button" data-place="${placeKey}" aria-expanded="false" aria-controls="route-place-${placeKey}">${place.name}</button>`;
      }).join('') : `<strong class="plain-stop">${label}</strong>`}</div><p class="stop-note">${linkedPlaces.length > 1 ? '点击任一店名，图片和地图会在这里展开。' : linkedPlaces[0]?.description || ''}</p><div class="stop-inline-detail" hidden aria-live="polite"></div></div>`;
      list.appendChild(stop);
    });
    routeList.appendChild(group);
  });
  routeList.querySelectorAll('.place-toggle').forEach(button => button.addEventListener('click', () => selectPlace(button.dataset.place, button)));
}

function selectPlace(key, button) {
  const place = places[key];
  const panel = button.closest('.stop').querySelector('.stop-inline-detail');
  const shouldClose = !panel.hidden && panel.dataset.place === key;

  routeList.querySelectorAll('.stop-inline-detail').forEach(item => {
    item.hidden = true;
    item.innerHTML = '';
    delete item.dataset.place;
  });
  routeList.querySelectorAll('.place-toggle').forEach(item => item.setAttribute('aria-expanded', 'false'));
  if (shouldClose) return;

  button.setAttribute('aria-expanded', 'true');
  panel.id = `route-place-${key}`;
  panel.innerHTML = placeDetailMarkup(place);
  panel.dataset.place = key;
  panel.hidden = false;
}

function photoLinks(place) {
  const googleUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(place.query)}`;
  const isClothing = /女装|服装/.test(place.kind || '') || /女装|服装/.test(place.name || '');
  if (isClothing) {
    const igUrl = `https://www.instagram.com/explore/search/keyword/?q=${encodeURIComponent(place.name)}`;
    return `<a class="photo-link" href="${igUrl}" target="_blank" rel="noopener">Instagram 店铺图片</a><a class="photo-link fallback" href="${googleUrl}" target="_blank" rel="noopener">没有对应账号？查看 Google 图片</a>`;
  }
  return `<a class="photo-link" href="${googleUrl}" target="_blank" rel="noopener">查看 Google 图片</a>`;
}

function placeDetailMarkup(place) {
  return `<div class="detail-content"><div class="online-photo"><img class="detail-media" src="${staticImage(place.image)}" alt="${place.name} 参考图" loading="lazy" /><div class="photo-source">${photoLinks(place)}</div></div><div class="detail-body"><p class="detail-kicker">${place.city} · ${place.kind}</p><h3>${place.name}</h3><p>${place.description}</p><div class="detail-meta">${place.tags.map(tag => `<span class="detail-chip">${tag}</span>`).join('')}</div></div><iframe class="map-frame" title="${place.name} 的 Google Maps 定位" loading="lazy" src="${mapsEmbed(place.query)}"></iframe><div class="map-caption">图片优先提供 Instagram 店铺入口；无对应账号时使用 Google 图片 · Google Maps 页内定位</div></div>`;
}

function inlinePlaceMarkup(place) {
  return `<div class="inline-place-content"><div><img src="${staticImage(place.image)}" alt="${place.name} 参考图" loading="lazy" /><div class="photo-source">${photoLinks(place)}</div></div><div><p class="detail-kicker">${place.city} · ${place.kind}</p><h4>${place.name}</h4><p>${place.description}</p><div class="detail-meta">${place.tags.map(tag => `<span class="detail-chip">${tag}</span>`).join('')}</div></div></div><iframe class="inline-map" title="${place.name} 的 Google Maps 定位" loading="lazy" src="${mapsEmbed(place.query)}"></iframe>`;
}

function attachInlineLocations() {
  document.querySelectorAll('.inline-location').forEach(button => button.addEventListener('click', () => {
    const place = places[button.dataset.place];
    const card = button.closest('.order-card');
    const panel = card.querySelector('.inline-place');
    const shouldClose = !panel.hidden && panel.dataset.place === button.dataset.place;
    document.querySelectorAll('.inline-place').forEach(item => { item.hidden = true; item.innerHTML = ''; delete item.dataset.place; });
    if (!shouldClose) {
      panel.innerHTML = inlinePlaceMarkup(place);
      panel.dataset.place = button.dataset.place;
      panel.hidden = false;
    }
  }));
}

tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(item => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
  tab.classList.add('active');
  tab.setAttribute('aria-selected', 'true');
  renderRoute(tab.dataset.city);
}));

attachInlineLocations();
renderRoute();
